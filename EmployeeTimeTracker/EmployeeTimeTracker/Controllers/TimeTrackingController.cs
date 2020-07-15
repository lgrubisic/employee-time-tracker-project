using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeTimeTracker.Models;

namespace EmployeeTimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeTrackingController : ControllerBase
    {
        private readonly EmployeeTimeTrackContext _context;

        public TimeTrackingController(EmployeeTimeTrackContext context)
        {
            _context = context;
        }

        // GET: api/TimeTracking
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeTrackings>>> GetTimeTrackings()
        {
            return await _context.TimeTrackings.ToListAsync();
        }

        // GET: api/TimeTracking/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TimeTrackings>> GetTimeTracking(int id)
        {
            var timeTracking = await _context.TimeTrackings.FindAsync(id);

            if (timeTracking == null)
            {
                return NotFound();
            }

            return timeTracking;
        }

        // PUT: api/TimeTracking/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTimeTracking(int id, TimeTrackings timeTracking)
        {
            if (id != timeTracking.timer_id)
            {
                return BadRequest();
            }

            _context.Entry(timeTracking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeTrackingExists(id))
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

        // POST: api/TimeTracking
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TimeTrackings>> PostTimeTracking(TimeTrackings timeTracking)
        {
            _context.TimeTrackings.Add(timeTracking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTimeTracking", new { id = timeTracking.timer_id }, timeTracking);
        }

        // DELETE: api/TimeTracking/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TimeTrackings>> DeleteTimeTracking(int id)
        {
            var timeTracking = await _context.TimeTrackings.FindAsync(id);
            if (timeTracking == null)
            {
                return NotFound();
            }

            _context.TimeTrackings.Remove(timeTracking);
            await _context.SaveChangesAsync();

            return timeTracking;
        }

        private bool TimeTrackingExists(int id)
        {
            return _context.TimeTrackings.Any(e => e.timer_id == id);
        }
    }
}
