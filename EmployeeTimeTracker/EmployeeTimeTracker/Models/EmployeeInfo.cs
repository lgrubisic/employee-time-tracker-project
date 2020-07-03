using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace EmployeeTimeTracker.Models
{
    public class EmployeeInfo
    {
        [Key]
        public int id_num { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string username { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string password { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string first_name { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string last_name { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string user_privileges { get; set; }
    }
}
