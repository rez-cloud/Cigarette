using AutoMapper;
using Cigaretto.Common.Mapping;
using Cigaretto.DataLayer.DataContext.Tables;
using Cigaretto.UI.Controllers;

namespace Cigaretto.UI.Infrastructure {
    public class ObjectMapperConfiguration : IObjectMapperConfiguration {
        public void Configure(IMapperConfigurationExpression config) {
            config.CreateMap<ProjectDto, Project>().ReverseMap();
        }
    }
}
