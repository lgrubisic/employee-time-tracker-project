using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using EmployeeTimeTracker.Helpers;
using EmployeeTimeTracker.Models;
using EmployeeTimeTracker.Entities;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;

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
        private PasswordHasher<EmployeeInfo> hasher = new PasswordHasher<EmployeeInfo>();
        private readonly AppSettings _appSettings;
        private EmployeeInfo emp;

        public EmployeeService(IOptions<AppSettings> appSettings, EmployeeManagerTimeTrackContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var employee = _context.EmployeeInfo.SingleOrDefault(x => x.username == model.Username && x.password == model.Password);
            // return null if user not found
            if (employee == null) return null;

            //FIND USER PASSWORD STORED IN DB AND GIVE IT AS A PARAMETER TO VERIFYHASHEDPASSWORD
            /**
            Console.WriteLine("PASSWORD" + employee.password);
            hasher.VerifyHashedPassword(emp, employee.password, model.Password);
            onsole.WriteLine("EMP" + emp);
            Console.WriteLine("PASSWORD" + employee.password);
            Console.WriteLine("BYTE64" + model.Password);
            */

            // authentication successful so generate jwt token
            var token = generateJwtToken(employee);
            Console.WriteLine("PASSWORD" + employee.password);
            return new AuthenticateResponse(employee, token);
        }

        // helper methods
        private string generateJwtToken(EmployeeInfo emp)
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
