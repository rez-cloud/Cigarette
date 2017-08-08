using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Cigaretto.UI.Infrastructure {

    public abstract class BaseController : Controller {
        private const int ValidationErrorStatusCode = 422;

        protected IActionResult ValidationError() {
            return StatusCode(ValidationErrorStatusCode, GetAllErrorMessages());
        }

        private IList<string> GetAllErrorMessages() {
            List<string> stringList = new List<string>();
            foreach (ModelStateEntry modelStateEntry in ModelState.Values) {
                IEnumerable<string> collection = modelStateEntry.Errors.Select(error => error.ErrorMessage);
                stringList.AddRange(collection);
            }
            return stringList;
        }

        protected IActionResult FromHttpResponse(HttpClientResponse response) {
            return StatusCode((int)response.StatusCode, response.Content);
        }

        protected IActionResult FromContent(object content) {
            if (content == null) { return NoContent(); }
            IEnumerable source = content as IEnumerable;
            if (source != null && !Enumerable.OfType<object>(source).Any()) { return NoContent(); }
            return Ok(BasicJsonSerializer.Serialize(content));
        }
    }
}