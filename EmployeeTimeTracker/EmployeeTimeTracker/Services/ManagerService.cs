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
    public interface IManagerService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        IEnumerable<EmployeeManager> GetAll();
    }

    public class ManagerService : IManagerService
    {
        private readonly EmployeeManagerTimeTrackContext _context;
        
        private readonly AppSettings _appSettings;

        public ManagerService(IOptions<AppSettings> appSettings, EmployeeManagerTimeTrackContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
           
            var manager = _context.EmployeeManager.SingleOrDefault(x => x.username == model.Username && x.password == model.Password);

            // return null if user not found
            if (manager == null) return null;

            // authentication successful so generate jwt token
            var token = GenerateJwtToken(manager);

            return new AuthenticateResponse(manager, token);
        }

        // helper methods

        private string GenerateJwtToken(EmployeeManager mng)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, mng.manager_id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public IEnumerable<EmployeeManager> GetAll()
        {
            return _context.EmployeeManager;
        }
    }
}
