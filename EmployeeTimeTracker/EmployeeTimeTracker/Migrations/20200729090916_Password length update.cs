using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class Passwordlengthupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "password",
                table: "EmployeeInfo",
                unicode: false,
                maxLength: 90,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(70)",
                oldUnicode: false,
                oldMaxLength: 70);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "password",
                table: "EmployeeInfo",
                type: "varchar(70)",
                unicode: false,
                maxLength: 70,
                nullable: false,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 90);
        }
    }
}
