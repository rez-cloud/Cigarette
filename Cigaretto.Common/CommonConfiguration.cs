using Cigaretto.Common.Mapping;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cigaretto.Common {
    public static class CommonConfiguration {
        public static void ConfigureDependency(IServiceCollection services, IConfigurationRoot configuration) {
            services.AddSingleton(configuration);
            services.AddSingleton<IObjectMapper, ObjectMapper>();
        }
    }
}