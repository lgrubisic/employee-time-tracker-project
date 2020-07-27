using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
    public partial class EmployeeManager
    {
        public int manager_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int employee_id { get; set; }
    }
}
