using Cigaretto.DataLayer.DataContext.Tables;
using Microsoft.EntityFrameworkCore;

namespace Cigaretto.DataLayer.DataContext {
    public class CigarettoDataContext : DbContext {

        public DbSet<Project> Projects { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Component> Components { get; set; }

        public CigarettoDataContext(DbContextOptions options) : base(options) {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            Project.CreateModel(modelBuilder);
            Module.CreateModel(modelBuilder);
            Component.CreateModel(modelBuilder);
        }

    }
}