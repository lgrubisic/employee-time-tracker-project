using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
    public class TimeTrackingContext : DbContext
    {
        public TimeTrackingContext(DbContextOptions<TimeTrackingContext> options) : base(options)
        { }

        public DbSet<TimeTracking> TimeTrackings { get; set; }
    }

}
