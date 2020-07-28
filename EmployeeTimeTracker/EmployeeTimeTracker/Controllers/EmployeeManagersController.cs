using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeTimeTracker.Models;

namespace EmployeeTimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeManagersController : ControllerBase
    {
        private readonly EmployeeManagerTimeTrackContext _context;

        public EmployeeManagersController(EmployeeManagerTimeTrackContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeManagers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeManager>>> GetEmployeeManager()
        {
            return await _context.EmployeeManager.ToListAsync();
        }

        // GET: api/EmployeeManagers/5
        [HttpGet("{id}")]
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
        public async Task<IActionResult> PutEmployeeManager(int id, EmployeeManager employeeManager)
        {
            if (id != employeeManager.manager_id)
            {
                return BadRequest();
            }

            _context.Entry(employeeManager).State = EntityState.Modified;

            try
            {
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
        public async Task<ActionResult<EmployeeManager>> PostEmployeeManager(EmployeeManager employeeManager)
        {
            _context.EmployeeManager.Add(employeeManager);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeManager", new { id = employeeManager.manager_id }, employeeManager);
        }

        // DELETE: api/EmployeeManagers/5
        [HttpDelete("{id}")]
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
