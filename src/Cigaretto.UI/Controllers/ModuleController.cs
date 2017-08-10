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
    public class ModuleController : BaseController {
        private readonly IObjectMapper Mapper;
        private readonly IModuleProvider ModuleProvider;

        public ModuleController(IObjectMapper mapper, IModuleProvider moduleProvider) {
            Mapper = mapper;
            ModuleProvider = moduleProvider;
        }

        [HttpGet("project/{projectId}/module")]
        public async Task<IActionResult> GetModules([Required]int projectId) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            List<Module> modules = await ModuleProvider.GetModulesAsync(projectId);
            List<ModuleDto> projectsDto = Mapper.Map<List<Module>, List<ModuleDto>>(modules);
            return FromContent(projectsDto);
        }

        [HttpPost("project/{projectId}/module")]
        public async Task<IActionResult> AddModule([Required]int projectId, [FromBody][Required]ModuleDto moduleDto) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }
            var module = Mapper.Map<ModuleDto, Module>(moduleDto);
            Module savedModule = await ModuleProvider.AddModuleAsync(projectId, module);
            return FromContent(savedModule);
        }


        [HttpDelete("project/{projectId}/module/{id}")]
        public async Task<IActionResult> DeleteModule([Required]int id) {
            if (!ModelState.IsValid) {
                return ValidationError();
            }

            bool result = await ModuleProvider.RemoveModuleAsync(id);
            return FromContent(result);
        }
    }
}