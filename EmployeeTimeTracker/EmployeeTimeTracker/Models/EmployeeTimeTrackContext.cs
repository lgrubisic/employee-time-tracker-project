using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EmployeeTimeTracker.Models
{
    public partial class EmployeeTimeTrackContext : DbContext
    {
        public EmployeeTimeTrackContext()
        {
        }

        public EmployeeTimeTrackContext(DbContextOptions<EmployeeTimeTrackContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmployeeInfo> EmployeeInfo { get; set; }
        public virtual DbSet<TimeTrackings> TimeTrackings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LGRUBISIC-W10;Database=EmployeeTimeTrack;User Id=HRCLOUD\\\\\\\\lgrubisic; Password=TableMug2105;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeInfo>(entity =>
            {
                entity.HasKey(e => e.id_num);

                entity.Property(e => e.id_num).HasColumnName("id_num");

                entity.Property(e => e.first_name)
                    .IsRequired()
                    .HasColumnName("first_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.last_name)
                    .IsRequired()
                    .HasColumnName("last_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.user_privileges)
                    .IsRequired()
                    .HasColumnName("user_privileges")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TimeTrackings>(entity =>
            {
                entity.HasKey(e => e.timer_id);

                entity.Property(e => e.timer_id).HasColumnName("timer_id");

                entity.Property(e => e.date_of_work)
                    .HasColumnName("date_of_work")
                    .HasColumnType("date");

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
