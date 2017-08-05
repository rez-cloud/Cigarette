using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Cigaretto.DataLayer.DataContext.Tables {
    public class Project {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Module> Modules { get; set; }

        public static void CreateModel(ModelBuilder modelBuilder) {

        }
    }
}