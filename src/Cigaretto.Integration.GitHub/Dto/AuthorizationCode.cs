using Newtonsoft.Json;

namespace Cigaretto.Integration.GitHub.Dto {
    public class AuthorizationCode {
        [JsonProperty("code")]
        public string Code { get; set; }
        [JsonProperty("state")]
        public string State { get; set; }
    }
}
