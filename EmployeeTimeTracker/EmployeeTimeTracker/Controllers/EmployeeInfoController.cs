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
    public class EmployeeInfoController : ControllerBase
    {
        private readonly EmployeeInfoContext _context;

        public EmployeeInfoController(EmployeeInfoContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeInfo
        [HttpGet]
        public IEnumerable<EmployeeInfo> GetEmployeeInfo()
        {
            return _context.EmployeeInfo;
        }

        // GET: api/EmployeeInfo/5
        [HttpGet("{id}")]
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
        public async Task<IActionResult> PostEmployeeInfo([FromBody] EmployeeInfo employeeInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.EmployeeInfo.Add(employeeInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeInfo", new { id = employeeInfo.id_num }, employeeInfo);
        }

        // DELETE: api/EmployeeInfo/5
        [HttpDelete("{id}")]
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