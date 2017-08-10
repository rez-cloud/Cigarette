using System.Collections.Generic;
using System.Threading.Tasks;
using Cigaretto.DataLayer.DataContext;
using Cigaretto.DataLayer.DataContext.Tables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Cigaretto.DataLayer.Providers {
    public interface IProjectProvider {

        Task<Project> AddProjectAsync(Project newProject);

        Task<bool> RemoveProjectAsync(int id);

        Task<List<Project>> GetProjectsAsync();
    }

    public class ProjectProvider : IProjectProvider {
        private readonly CigarettoDataContext Context;

        public ProjectProvider(CigarettoDataContext context) {
            Context = context;
        }

        public async Task<Project> AddProjectAsync(Project newProject) {
            var entity = await Context.Projects.AddAsync(newProject);
            await Context.SaveChangesAsync();
            return entity.Entity;
        }

        public async Task<bool> RemoveProjectAsync(int id) {
            Project project = await Context.Projects.FirstOrDefaultAsync(p => p.Id == id);
            if (project == null) { return false; }
            EntityEntry<Project> entity = Context.Projects.Remove(project);
            await Context.SaveChangesAsync();
            return entity.State == EntityState.Deleted;
        }

        public async Task<List<Project>> GetProjectsAsync() {
            List<Project> projects = await Context.Projects.AsNoTracking().ToListAsync();
            return projects;
        }
    }
}
