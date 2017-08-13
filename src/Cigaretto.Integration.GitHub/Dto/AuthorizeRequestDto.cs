using Newtonsoft.Json;

namespace Cigaretto.Integration.GitHub.Dto {
    public class AuthorizeRequestDto {
        [JsonProperty("client_id")]
        public string ClientId { get; set; }

        [JsonProperty("redirect_uri")]
        public string RedirectUri { get; set; }

        [JsonProperty("state")]
        public string State { get; set; }

        [JsonProperty("scope")]
        public string Scope { get; set; }
    }
}
