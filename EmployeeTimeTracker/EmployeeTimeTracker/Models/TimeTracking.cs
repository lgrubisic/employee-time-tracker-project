using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeTimeTracker.Models
{
    public class TimeTracking
    {
        [Key]
        public int timer_id { get; set; }

        [ForeignKey("id_num")]
        public string employee_init_id { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime date_of_work { get; set; }

        [Required]
        [Column(TypeName = "datetime2")]
        public DateTime time_in { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime time_out { get; set; }
    }
}
