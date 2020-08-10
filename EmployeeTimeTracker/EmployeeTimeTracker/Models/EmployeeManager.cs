 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
    public partial class EmployeeManager
    {
        public EmployeeManager()
        {
            EmployeeInfo = new HashSet<EmployeeInfo>();
        }

        public int manager_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string username { get; set; }
        public string password { get; set; }

        public virtual ICollection<EmployeeInfo> EmployeeInfo { get; set; }

    }
}
