using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Cigaretto.Common.Dto;
using Cigaretto.DataLayer.DataContext.Tables;
using Cigaretto.DataLayer.Providers;
using Cigaretto.UI.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using IObjectMapper = Cigaretto.Common.Mapping.IObjectMapper;

namespace Cigaretto.UI.Controllers {
    [Produces("application/json")]
    [Route("api/")]
    public class ComponentController : BaseController {
        private readonly IObjectMapper Mapper;
        private readonly IComponentProvider ComponentProvider;

        public ComponentController(IObjectMapper mapper, IComponentProvider componentProvider) {
            Mapper = mapper;
            ComponentProvider = componentProvider;
        }

        [HttpGet("project/{projectId}/component")]
        public async Task<IActionResult> GetComponents([Required]int projectId) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            List<Component> components = await ComponentProvider.GetComponentsAsync(projectId);
            List<ComponentDto> projectsDto = Mapper.Map<List<Component>, List<ComponentDto>>(components);
            return FromContent(projectsDto);
        }

        [HttpPost("project/{projectId}/component")]
        public async Task<IActionResult> AddComponent([Required]int projectId, [FromBody][Required]ComponentDto componentDto) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }
            var component = Mapper.Map<ComponentDto, Component>(componentDto);
            Component savedComponent = await ComponentProvider.AddComponentAsync(projectId, component);
            return FromContent(savedComponent);
        }


        [HttpDelete("project/{projectId}/component/{id}")]
        public async Task<IActionResult> DeleteComponent([Required]int id) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            bool result = await ComponentProvider.RemoveComponentAsync(id);
            return FromContent(result);
        }
    }
}