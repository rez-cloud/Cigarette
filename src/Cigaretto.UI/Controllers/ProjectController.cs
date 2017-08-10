using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Cigaretto.DataLayer.DataContext.Tables;
using Cigaretto.DataLayer.Providers;
using Cigaretto.UI.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace Cigaretto.UI.Controllers {

    [Produces("application/json")]
    [Route("api/project")]
    public class ProjectController : BaseController {
        private readonly Common.Mapping.IObjectMapper Mapper;
        private readonly IProjectProvider ProjectProvider;

        public ProjectController(Common.Mapping.IObjectMapper mapper, IProjectProvider projectProvider) {
            Mapper = mapper;
            ProjectProvider = projectProvider;
        }

        [HttpGet]
        public async Task<IActionResult> GetProjects() {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            List<Project> projects = await ProjectProvider.GetProjectsAsync();
            List<ProjectDto> projectsDto = Mapper.Map<List<Project>, List<ProjectDto>>(projects);
            return FromContent(projectsDto);
        }

        [HttpPost]
        public async Task<IActionResult> SaveProject([FromBody][Required]ProjectDto projectDto) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }
            var project = Mapper.Map<ProjectDto, Project>(projectDto);
            Project savedProject = await ProjectProvider.AddProjectAsync(project);
            return FromContent(savedProject);
        }
    }

    public class ProjectDto {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}