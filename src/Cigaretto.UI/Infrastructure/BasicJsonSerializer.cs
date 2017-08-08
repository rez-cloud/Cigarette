using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Cigaretto.UI.Infrastructure {
    public static class BasicJsonSerializer {
        private static readonly JsonSerializerSettings SerializerSettings = new JsonSerializerSettings() {
            ContractResolver = (IContractResolver)new CamelCasePropertyNamesContractResolver(),
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        };

        public static string Serialize<T>(T obj) where T : class {
            try {
                return JsonConvert.SerializeObject((object)obj, (Formatting)Formatting.Indented, (JsonSerializerSettings)BasicJsonSerializer.SerializerSettings);
            } catch {
                return (string)null;
            }
        }

        public static T Deserialize<T>(string json) where T : class {
            try {
                return JsonConvert.DeserializeObject<T>(json, BasicJsonSerializer.SerializerSettings);
            } catch {
                return default(T);
            }
        }
    }
}