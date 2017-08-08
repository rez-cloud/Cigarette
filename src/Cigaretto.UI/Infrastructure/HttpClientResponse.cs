using System.Net;

namespace Cigaretto.UI.Infrastructure {
    public class HttpClientResponse {
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;

        public string Content { get; set; }

        public bool IsSuccessStatusCode {
            get {
                if (this.StatusCode >= HttpStatusCode.OK)
                    return this.StatusCode <= (HttpStatusCode) 299;
                return false;
            }
        }

        public override string ToString() {
            return string.Format("{0}: {1}, {2}: {3}, {4}: {5}", (object) "StatusCode", (object) this.StatusCode, (object) "Content", (object) this.Content, (object) "IsSuccessStatusCode", (object) this.IsSuccessStatusCode);
        }
    }
}