using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cigaretto.DataLayer.DataContext;
using Cigaretto.DataLayer.DataContext.Tables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Cigaretto.DataLayer.Providers {
    public interface IModuleProvider {
        Task<List<Module>> GetModulesAsync(int projectId);
        Task<Module> AddModuleAsync(int projectId, Module module);
        Task<bool> RemoveModuleAsync(int id);
    }

    public class ModuleProvider : IModuleProvider {
        private readonly CigarettoDataContext Context;

        public ModuleProvider(CigarettoDataContext context) {
            Context = context;
        }

        public async Task<List<Module>> GetModulesAsync(int projectId) {
            List<Module> modules = await Context.Modules.Where(module => module.ProjectId == projectId).ToListAsync();
            return modules;
        }

        public async Task<Module> AddModuleAsync(int projectId, Module module) {
            module.ProjectId = projectId;
            var entity = await Context.Modules.AddAsync(module);
            await Context.SaveChangesAsync();
            return entity.Entity;
        }

        public async Task<bool> RemoveModuleAsync(int id) {
            Module module = await Context.Modules.FirstOrDefaultAsync(m => m.Id == id);
            if (module == null) { return false; }
            EntityEntry<Module> entity = Context.Modules.Remove(module);
            await Context.SaveChangesAsync();
            return entity.State == EntityState.Deleted;
        }
    }
}