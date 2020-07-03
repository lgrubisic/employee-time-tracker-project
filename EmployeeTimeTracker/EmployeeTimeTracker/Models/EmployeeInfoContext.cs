using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
        public class EmployeeInfoContext : DbContext
        {
            public EmployeeInfoContext(DbContextOptions<EmployeeInfoContext> options) : base(options)
            { }

            public DbSet<EmployeeInfo> EmployeeInfo { get; set; }
        }
}
