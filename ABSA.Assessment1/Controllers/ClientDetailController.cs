using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ABSA.Assessment1.Common;

namespace ABSA_Assessment1.Controllers
{
    [Route("api/[controller]")]
    public class ClientDetailController : Controller
    {
        [HttpGet("[action]")]
        public ClientDetails GetClientDetails()
        {
            string json = System.IO.File.ReadAllText(path: "Resources/clientDetails.json");
            var result = JsonConvert.DeserializeObject<ClientDetails>(json);
            return result;
        }

        
        [HttpPost("[action]")]
        public ClientDetails UpdateClientDetails([FromBody]ClientDetails client)
        {
            string output = Newtonsoft.Json.JsonConvert.SerializeObject(client, Newtonsoft.Json.Formatting.Indented);
            System.IO.File.WriteAllText("Resources/clientDetails.json", output);
            return client;
        }

    }
}
