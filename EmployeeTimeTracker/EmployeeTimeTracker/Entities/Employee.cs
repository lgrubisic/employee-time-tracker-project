using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Entities
{
    public class Employee
    {
            public int id_num { get; set; }
            public string first_name { get; set; }
            public string last_name { get; set; }
            public string username { get; set; }

            [JsonIgnore]
            public string password { get; set; }
    }
}
