using AutoMapper;

namespace Cigaretto.Common.Mapping {
    public class ObjectMapper : IObjectMapper {
        private readonly IMapper MapperInstance;

        public ObjectMapper(IObjectMapperConfiguration configuration) {
            MapperInstance = new MapperConfiguration(configuration.Configure).CreateMapper();
        }

        public TDestination Map<TSource, TDestination>(TSource source) {
            return MapperInstance.Map<TSource, TDestination>(source);
        }
    }
}