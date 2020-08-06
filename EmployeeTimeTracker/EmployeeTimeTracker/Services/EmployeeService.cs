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
using CryptSharp;
using AttributeRouting.Helpers;

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

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var employee = _context.EmployeeInfo.FirstOrDefault(x => x.username == model.Username);
            if(employee == null) {

            } else if (Crypter.Blowfish.Crypt(model.Password, employee.password) != employee.password)
            {
                employee = null;
            }

            bool isTrue = false;
            if (employee != null)
            {
                isTrue = Crypter.CheckPassword(model.Password, employee.password);
            }

            if (isTrue == true)
            {
                // authentication successful so generate jwt token
                var token = GenerateJwtToken(employee);
                result = new AuthenticateResponse(employee, token);
            }
            else
            {
                return null;
            }
            // return null if user not found
            if (employee == null) return null;
            return result;
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