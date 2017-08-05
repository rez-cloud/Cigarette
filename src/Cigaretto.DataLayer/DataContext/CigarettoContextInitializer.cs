using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cigaretto.DataLayer.DataContext {
    public class CigarettoContextInitializer {
        private readonly CigarettoDataContext Context;

        public CigarettoContextInitializer(CigarettoDataContext context) {
            Context = context;
        }

        public async Task InitializeAsync() {
            //if(await Context)
            return;
        }
    }
}