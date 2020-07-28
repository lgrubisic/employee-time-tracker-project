using EmployeeTimeTracker.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
    public class AuthenticateResponse
    {
        public int id_num { get; set; }
        public int manager_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string username { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(EmployeeInfo employee, string token)
        {
            id_num = employee.id_num;
            first_name = employee.first_name;
            last_name = employee.last_name;
            username = employee.username;
            Token = token;
        }

        public AuthenticateResponse(EmployeeManager employeeManager, string token)
        {
            manager_id = employeeManager.manager_id;
            first_name = employeeManager.first_name;
            last_name = employeeManager.last_name;
            username = employeeManager.username;
            Token = token;
        }
    }
}
