using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;

namespace Cigaretto.DataLayer.DataContext {
    public class CigarettoContextFactory : IDbContextFactory<CigarettoDataContext> {
        private const string DbConnectionStringName = "CigarettoConnectionString";

        public CigarettoDataContext Create(DbContextFactoryOptions options) {
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");
            IConfigurationRoot configuration = builder.Build();

            string connectionString = configuration.GetConnectionString(DbConnectionStringName);
            return Create(connectionString);
        }

        public CigarettoDataContext Create(string connectionString) {
            var optionBuilder = new DbContextOptionsBuilder<CigarettoDataContext>();
            optionBuilder.UseSqlServer(connectionString);
            var context = new CigarettoDataContext(optionBuilder.Options);

            if (context.Database.GetPendingMigrations().Any()) {
                context.Database.Migrate();
                var initializer = new CigarettoContextInitializer(context);
                initializer.InitializeAsync().Wait();
            }
            return context;
        }
    }
}