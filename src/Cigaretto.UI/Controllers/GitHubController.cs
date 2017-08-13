using System.Collections.Generic;
using Cigaretto.Integration.GitHub.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Cigaretto.UI.Controllers {
    [Route("api/[controller]")]
    public class GitHubController : Controller {

        [HttpPost]
        public void Code([FromQuery]AuthorizationCode code) {

        }

    }
}