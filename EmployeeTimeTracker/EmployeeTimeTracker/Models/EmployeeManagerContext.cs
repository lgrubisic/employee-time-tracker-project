using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTimeTracker.Models
{
    public partial class EmployeeManagerContext: DbContext
    {
        public IConfiguration Configuration { get; }

        public EmployeeManagerContext(DbContextOptions<EmployeeManagerContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }


        public virtual DbSet<EmployeeManager> EmployeeManager { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DBConnection"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeManager>(entity =>
            {
                entity.HasKey(e => e.manager_id);
                entity.Property(e => e.manager_id).HasColumnName("timer_id");

                entity.Property(e => e.first_name)
                    .HasColumnName("first_name")
                    .HasColumnType("string");

                entity.Property(e => e.employee_init_id).HasColumnName("employee_init_id");

                entity.Property(e => e.time_in)
                    .HasColumnName("time_in")
                    .HasColumnType("time(0)");

                entity.Property(e => e.time_out)
                    .HasColumnName("time_out")
                    .HasColumnType("time(0)");

                entity.HasOne(d => d.EmployeeInit)
                    .WithMany(p => p.TimeTrackings)
                    .HasForeignKey(d => d.employee_init_id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TimeTrack__emplo__36B12243");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

