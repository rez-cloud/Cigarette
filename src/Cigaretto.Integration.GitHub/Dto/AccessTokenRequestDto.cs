﻿using Newtonsoft.Json;

namespace Cigaretto.Integration.GitHub.Dto {
    public class AccessTokenRequestDto {
        [JsonProperty("client_id")]
        public string ClientId { get; set; }

        [JsonProperty("client_secret")]
        public string ClientSecret { get; set; }

        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("redirect_uri")]
        public string RedirectUri { get; set; }

        [JsonProperty("state")]
        public string State { get; set; }
    }
}