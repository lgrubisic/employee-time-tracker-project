using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeTimeTracker.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using EmployeeTimeTracker.Services;
using Microsoft.AspNetCore.Identity;
using System;

namespace EmployeeTimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeInfoController : ControllerBase
    {
        private readonly EmployeeManagerTimeTrackContext _context;
        private IEmployeeService _empService;
        private PasswordHasher<EmployeeInfo> hasher = new PasswordHasher<EmployeeInfo>();

        public EmployeeInfoController(EmployeeManagerTimeTrackContext context, IEmployeeService empService)
        {
            _context = context;
            _empService = empService;
        }

        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<EmployeeInfo> GetEmployeeInfo()
        {
            return _context.EmployeeInfo;
        }

        //AUTH
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateRequest model)
        {
            //SENDING THE PASSWORD IN BASE64 STRING TO REHASH
            /**
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(model.Password);
            var byte64string = System.Convert.ToBase64String(plainTextBytes);
            model.Password = byte64string;
            */

            var response = _empService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect, please try again." });

            return Ok(response);
        }

        

        // GET: api/EmployeeInfo/5
        [HttpGet("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> GetEmployeeInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employeeInfo = await _context.EmployeeInfo.FindAsync(id);

            if (employeeInfo == null)
            {
                return NotFound();
            }

            return Ok(employeeInfo);
        }

        // PUT: api/EmployeeInfo/5
        [HttpPut("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> PutEmployeeInfo([FromRoute] int id, [FromBody] EmployeeInfo employeeInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeInfo.id_num)
            {
                return BadRequest();
            }

            _context.Entry(employeeInfo).State = EntityState.Modified;

            try
            {
                employeeInfo.password = hasher.HashPassword(employeeInfo, employeeInfo.password);

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeInfo
        [HttpPost]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> PostEmployeeInfo([FromBody] EmployeeInfo employeeInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            employeeInfo.password = hasher.HashPassword(employeeInfo, employeeInfo.password);

            _context.EmployeeInfo.Add(employeeInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeInfo", new { id = employeeInfo.id_num }, employeeInfo);
        }

        // DELETE: api/EmployeeInfo/5
        [HttpDelete("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> DeleteEmployeeInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employeeInfo = await _context.EmployeeInfo.FindAsync(id);
            if (employeeInfo == null)
            {
                return NotFound();
            }

            _context.EmployeeInfo.Remove(employeeInfo);
            await _context.SaveChangesAsync();

            return Ok(employeeInfo);
        }

        private bool EmployeeInfoExists(int id)
        {
            return _context.EmployeeInfo.Any(e => e.id_num == id);
        }
    }
}