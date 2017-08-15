using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cigaretto.DataLayer.DataContext;
using Cigaretto.DataLayer.DataContext.Tables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Cigaretto.DataLayer.Providers {
    public interface IComponentProvider {
        Task<List<Component>> GetComponentsAsync(int projectId);
        Task<Component> AddComponentAsync(int projectId, Component component);
        Task<bool> RemoveComponentAsync(int id);
    }

    public class ComponentProvider : IComponentProvider {
        private readonly CigarettoDataContext Context;

        public ComponentProvider(CigarettoDataContext context) {
            Context = context;
        }

        public async Task<List<Component>> GetComponentsAsync(int projectId) {
            List<Component> components = await Context.Components.Where(module => module.ProjectId == projectId).ToListAsync();
            return components;
        }

        public async Task<Component> AddComponentAsync(int projectId, Component component) {
            component.ProjectId = projectId;
            var entity = await Context.Components.AddAsync(component);
            await Context.SaveChangesAsync();
            return entity.Entity;
        }

        public async Task<bool> RemoveComponentAsync(int id) {
            Component component = await Context.Components.FirstOrDefaultAsync(m => m.Id == id);
            if (component == null) { return false; }
            EntityEntry<Component> entity = Context.Components.Remove(component);
            await Context.SaveChangesAsync();
            return entity.State == EntityState.Deleted;
        }
    }
}