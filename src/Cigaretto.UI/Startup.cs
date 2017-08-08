using Cigaretto.Common;
using Cigaretto.Common.Mapping;
using Cigaretto.DataLayer.DataContext;
using Cigaretto.DataLayer.Providers;
using Cigaretto.UI.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;

namespace Cigaretto.UI {
    public class Startup {

        private const string ConnectionStringName = "CigarettoConnectionString";

        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {

            SetupSwagger(services);

            services.AddSingleton<IObjectMapperConfiguration, ObjectMapperConfiguration>();
            CommonConfiguration.ConfigureDependency(services, Configuration);
            
            services.AddScoped<IProjectProvider, ProjectProvider>();

            // Add framework services.
            services.AddMvc();

            string connectionString = Configuration[ConnectionStringName] ?? Configuration.GetConnectionString(ConnectionStringName);
            services.AddDbContext<CigarettoDataContext>(options => options.UseSqlServer(connectionString, a => a.MigrationsAssembly("SimCorp.Cloud.KPI.API.PostData")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseSwagger();
            app.UseSwaggerUI(options => {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Cigaretto UI");
            });

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            } else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }


        private static void SetupSwagger(IServiceCollection services) {
            services.AddSwaggerGen(options => {
                options.SwaggerDoc("v1", new Info {
                    Title = "Cigaretto UI",
                    Version = "v1",
                    Description = "Projects Managing"
                });
                options.DescribeAllEnumsAsStrings();
            });
        }
    }
}
