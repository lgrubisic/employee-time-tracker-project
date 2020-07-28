using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class Removedfieldsfromtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "EmployeeManager");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "EmployeeManager");

            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "EmployeeInfo");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "EmployeeInfo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "EmployeeManager",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "EmployeeManager",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "EmployeeInfo",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "EmployeeInfo",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
