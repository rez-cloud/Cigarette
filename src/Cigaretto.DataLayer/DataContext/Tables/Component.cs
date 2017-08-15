using Microsoft.EntityFrameworkCore;

namespace Cigaretto.DataLayer.DataContext.Tables {
    public class Component {
        public int Id { get; set; }
        public string Name { get; set; }

        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

        public static void CreateModel(ModelBuilder modelBuilder) { }
    }
}