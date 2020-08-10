using System;
using System.Collections.Generic;

namespace EmployeeTimeTracker.Models
{
    public partial class TimeTrackings
    {
        public int timer_id { get; set; }
        public DateTime date_of_work { get; set; }
        public TimeSpan time_in { get; set; }
        public TimeSpan? time_out { get; set; }
        public int employee_init_id { get; set; }

        public virtual EmployeeInfo EmployeeInit { get; set; }
    }
}
