using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Cigaretto.DataLayer.DataContext.Tables {
    public class Module {
        public int Id { get; set; }
        public string Name { get; set; }

        public int ProjectId { get; set; }

        public virtual Project Project { get; set; }
        public virtual ICollection<Component> Components { get; set; }

        public static void CreateModel(ModelBuilder modelBuilder) { }
    }
}