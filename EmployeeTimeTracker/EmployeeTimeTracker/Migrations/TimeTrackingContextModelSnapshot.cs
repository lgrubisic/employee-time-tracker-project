﻿// <auto-generated />
using System;
using EmployeeTimeTracker.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    [DbContext(typeof(EmployeeManagerTimeTrackContext))]
    partial class TimeTrackingContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EmployeeTimeTracker.Models.TimeTracking", b =>
                {
                    b.Property<int>("timer_id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("date_of_work");

                    b.Property<string>("employee_init_id");

                    b.Property<DateTime>("time_in")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("time_out")
                        .HasColumnType("datetime2");

                    b.HasKey("timer_id");

                    b.ToTable("TimeTrackings");
                });
#pragma warning restore 612, 618
        }
    }
}
