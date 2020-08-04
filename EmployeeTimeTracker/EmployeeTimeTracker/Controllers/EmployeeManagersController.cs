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
using CryptSharp;

namespace EmployeeTimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeManagersController : ControllerBase
    {
        private readonly EmployeeManagerTimeTrackContext _context;
        public IManagerService _mngService;

        public EmployeeManagersController(EmployeeManagerTimeTrackContext context, IManagerService mngService)
        {
            _context = context;
            _mngService = mngService;
        }

        //AUTH
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateRequest model)
        {
            var response = _mngService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect, please try again." });

            return Ok(response);
        }

        // GET: api/EmployeeManagers
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<IEnumerable<EmployeeManager>>> GetEmployeeManager()
        {
            return await _context.EmployeeManager.ToListAsync();
        }

        // GET: api/EmployeeManagers/5
        [HttpGet("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<EmployeeManager>> GetEmployeeManager(int id)
        {
            var employeeManager = await _context.EmployeeManager.FindAsync(id);

            if (employeeManager == null)
            {
                return NotFound();
            }

            return employeeManager;
        }

        // PUT: api/EmployeeManagers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> PutEmployeeManager(int id, EmployeeManager employeeManager)
        {
            if (id != employeeManager.manager_id)
            {
                return BadRequest();
            }

            _context.Entry(employeeManager).State = EntityState.Modified;

            try
            {
                employeeManager.password = Crypter.Blowfish.Crypt(employeeManager.password);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeManagerExists(id))
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

        // POST: api/EmployeeManagers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<EmployeeManager>> PostEmployeeManager(EmployeeManager employeeManager)
        {
            employeeManager.password = Crypter.Blowfish.Crypt(employeeManager.password);
            _context.EmployeeManager.Add(employeeManager);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeManager", new { id = employeeManager.manager_id }, employeeManager);
        }

        // DELETE: api/EmployeeManagers/5
        [HttpDelete("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<EmployeeManager>> DeleteEmployeeManager(int id)
        {
            var employeeManager = await _context.EmployeeManager.FindAsync(id);
            if (employeeManager == null)
            {
                return NotFound();
            }

            _context.EmployeeManager.Remove(employeeManager);
            await _context.SaveChangesAsync();

            return employeeManager;
        }

        private bool EmployeeManagerExists(int id)
        {
            return _context.EmployeeManager.Any(e => e.manager_id == id);
        }
    }
}
