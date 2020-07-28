﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class Hashingupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "EmployeeManager",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "EmployeeManager",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "EmployeeInfo",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "EmployeeInfo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
