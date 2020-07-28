using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeTimeTracker.Migrations.TimeTracking
{
    public partial class EmployeeManager : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "manager_id",
                table: "EmployeeInfo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "EmployeeManager",
                columns: table => new
                {
                    manager_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    first_name = table.Column<string>(unicode: false, maxLength: 30, nullable: false),
                    last_name = table.Column<string>(unicode: false, maxLength: 30, nullable: false),
                    username = table.Column<string>(unicode: false, maxLength: 30, nullable: false),
                    password = table.Column<string>(unicode: false, maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeManager", x => x.manager_id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeInfo_manager_id",
                table: "EmployeeInfo",
                column: "manager_id");

            migrationBuilder.AddForeignKey(
                name: "FK__Manager__emplo__31H62524",
                table: "EmployeeInfo",
                column: "manager_id",
                principalTable: "EmployeeManager",
                principalColumn: "manager_id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Manager__emplo__31H62524",
                table: "EmployeeInfo");

            migrationBuilder.DropTable(
                name: "EmployeeManager");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeInfo_manager_id",
                table: "EmployeeInfo");

            migrationBuilder.DropColumn(
                name: "manager_id",
                table: "EmployeeInfo");
        }
    }
}
