using AutoMapper;
using Cigaretto.Common.Dto;
using Cigaretto.Common.Mapping;
using Cigaretto.DataLayer.DataContext.Tables;

namespace Cigaretto.UI.Infrastructure {
    public class ObjectMapperConfiguration : IObjectMapperConfiguration {
        public void Configure(IMapperConfigurationExpression config) {
            config.CreateMap<Project, ProjectDto>().ReverseMap();
            config.CreateMap<Module, ModuleDto>().ReverseMap();
        }
    }
}
