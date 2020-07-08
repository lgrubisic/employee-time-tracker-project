using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class TimeTrackMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TimeTrackings",
                columns: table => new
                {
                    timer_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    employee_init_id = table.Column<string>(nullable: true),
                    date_of_work = table.Column<DateTime>(nullable: false),
                    time_in = table.Column<DateTime>(type: "datetime2", nullable: false),
                    time_out = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeTrackings", x => x.timer_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TimeTrackings");
        }
    }
}
