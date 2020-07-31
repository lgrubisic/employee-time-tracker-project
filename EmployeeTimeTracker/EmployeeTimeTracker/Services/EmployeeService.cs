using EmployeeTimeTracker.Entities;
using EmployeeTimeTracker.Helpers;
using EmployeeTimeTracker.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace EmployeeTimeTracker.Services
{
    public interface IEmployeeService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);

        IEnumerable<EmployeeInfo> GetAll();
    }

    public class EmployeeService : IEmployeeService
    {
        private readonly EmployeeManagerTimeTrackContext _context;
        private readonly AppSettings _appSettings;
        private AuthenticateResponse result;

        public EmployeeService(IOptions<AppSettings> appSettings, EmployeeManagerTimeTrackContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        /**
        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var employee = _context.EmployeeInfo.SingleOrDefault(x => x.username == model.Username && x.password == model.Password);

            // return null if user not found
            if (employee == null)
            {
                Console.WriteLine("MODEL PASSWORD 0 " + model.Username);
                Console.WriteLine("MODEL PASSWORD 0 " + model.Password);
                Console.WriteLine("EMPLOYEE PASSWORD " + employee.password);
                return null;
            }

            var isTrue = BCrypt.Net.BCrypt.Verify(employee.password, model.Password);
            //var isTrue = true;

            if (isTrue == true)
            {
                // authentication successful so generate jwt token
                var token = GenerateJwtToken(employee);
                result = new AuthenticateResponse(employee, token);
                Console.WriteLine("MODEL PASSWORD 1 " + model.Password);
                Console.WriteLine("EMPLOYEE PASSWORD 1 " + employee.password);
            } else
            {
                Console.WriteLine("MODEL PASSWORD 2 " + model.Password);
                Console.WriteLine("EMPLOYEE PASSWORD 2 " + employee.password);
                return null;
            }

            Console.WriteLine("PASSWORD 1 " + employee.password);
            Console.WriteLine("EMPLOYEE 1 " + employee.password);
            Console.WriteLine("FNAME 1 " + employee.password);
            Console.WriteLine("LNAME 1 " + employee.password);

            return result;
        }
        */

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var employee = _context.EmployeeInfo.SingleOrDefault(x => x.username == model.Username && x.password == model.Password);
            // return null if user not found
            if (employee == null) return null;
            // authentication successful so generate jwt token
            var token = GenerateJwtToken(employee);

            return new AuthenticateResponse(employee, token); ;
        }
        

        // helper methods
        private string GenerateJwtToken(EmployeeInfo emp)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, emp.id_num.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public IEnumerable<EmployeeInfo> GetAll()
        {
            return _context.EmployeeInfo;
        }
    }
}