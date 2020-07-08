using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class DbUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TimeTrackings",
                columns: table => new
                {
                    timer_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    date_of_work = table.Column<DateTime>(type: "date", nullable: false),
                    time_in = table.Column<TimeSpan>(type: "time(0)", nullable: false),
                    time_out = table.Column<TimeSpan>(type: "time(0)", nullable: true),
                    employee_init_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeTrackings", x => x.timer_id);
                    table.ForeignKey(
                        name: "FK__TimeTrack__emplo__36B12243",
                        column: x => x.employee_init_id,
                        principalTable: "EmployeeInfo",
                        principalColumn: "id_num",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TimeTrackings_employee_init_id",
                table: "TimeTrackings",
                column: "employee_init_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TimeTrackings");
        }
    }
}
