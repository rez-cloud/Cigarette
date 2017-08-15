using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Cigaretto.Common.Dto;
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
        private readonly IComponentProvider ComponentProvider;

        public ProjectController(Common.Mapping.IObjectMapper mapper, IProjectProvider projectProvider, IComponentProvider componentProvider) {
            Mapper = mapper;
            ProjectProvider = projectProvider;
            ComponentProvider = componentProvider;
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
        public async Task<IActionResult> AddProject([FromBody][Required]ProjectDto projectDto) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }
            var project = Mapper.Map<ProjectDto, Project>(projectDto);
            Project savedProject = await ProjectProvider.AddProjectAsync(project);
            return FromContent(savedProject);
        }

        [HttpDelete("api/project/{id}")]
        public async Task<IActionResult> DeleteProject([Required]int id) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            bool result = await ProjectProvider.RemoveProjectAsync(id);
            return FromContent(result);
        }        
    }
}