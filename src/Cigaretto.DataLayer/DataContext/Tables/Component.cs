using Microsoft.EntityFrameworkCore;

namespace Cigaretto.DataLayer.DataContext.Tables {
    public class Component {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual Module Module { get; set; }

        public static void CreateModel(ModelBuilder modelBuilder) { }
    }
}