﻿// <auto-generated />
using EmployeeTimeTracker.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EmployeeTimeTracker.Migrations
{
    [DbContext(typeof(EmployeeInfoContext))]
    [Migration("20200703133806_InitialCreation")]
    partial class InitialCreation
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EmployeeTimeTracker.Models.EmployeeInfo", b =>
                {
                    b.Property<int>("id_num")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("first_name")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("last_name")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("user_privileges")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.HasKey("id_num");

                    b.ToTable("EmployeeInfo");
                });
#pragma warning restore 612, 618
        }
    }
}
