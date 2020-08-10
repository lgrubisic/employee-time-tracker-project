using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class FKFixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "manager_init_id",
                table: "TimeTrackings");

            migrationBuilder.AlterColumn<int>(
                name: "employee_init_id",
                table: "TimeTrackings",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "employee_init_id",
                table: "TimeTrackings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "manager_init_id",
                table: "TimeTrackings",
                type: "int",
                nullable: true);
        }
    }
}
