// bulk commands from commands that can be used together for a specific scenario or flow, to make the test code cleaner and more reusable
import webTablesCommands from "./webTablesCommands";

class bulkCommands {
  // bulk commands for web tables page/menu
  fillFormUserOnWebTables(user) {
    webTablesCommands.fillFirstName(user.firstName);
    webTablesCommands.fillLastName(user.lastName);

    if (user.email) {
      webTablesCommands.fillEmail(user.email);
    }

    if (user.age !== undefined && user.age !== null && user.age !== "") {
      webTablesCommands.fillAge(user.age);
    }

    if (
      user.salary !== undefined &&
      user.salary !== null &&
      user.salary !== ""
    ) {
      webTablesCommands.fillSalary(user.salary);
    }

    webTablesCommands.fillDepartment(user.department);
  }
}

export default new bulkCommands();
