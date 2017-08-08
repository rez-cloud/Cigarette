using AutoMapper;

namespace Cigaretto.Common.Mapping {
    public interface IObjectMapperConfiguration {
        void Configure(IMapperConfigurationExpression config);
    }
}