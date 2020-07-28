using System;
using System.Collections.Generic;

namespace EmployeeTimeTracker.Models
{
    public partial class EmployeeInfo
    {
        public EmployeeInfo()
        {
            TimeTrackings = new HashSet<TimeTrackings>();
        }

        public int id_num { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int manager_id { get; set; }
        public string user_privileges { get; set; }

        public virtual EmployeeManager EmployeeManag { get; set; }

        public virtual ICollection<TimeTrackings> TimeTrackings { get; set; }
    }
}
