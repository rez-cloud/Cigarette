namespace Cigaretto.Common.Mapping {
    public interface IObjectMapper {
        TDestination Map<TSource, TDestination>(TSource source);
    }
}