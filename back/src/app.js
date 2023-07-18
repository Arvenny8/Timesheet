require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");
const authRoute = require("./routes/authRoute");
const projectRouth = require("./routes/projectRoute");
const timesheetRoute = require("./routes/timesheetRoute");
const teamRoute = require("./routes/teamRoute");
const EmpProject = require("./routes/EmployeeProjectRoute");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/project", projectRouth);
app.use("/timesheet", timesheetRoute);
app.use("/teampage", teamRoute);
// app.use("/empproject", EmpProject);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(process.env.PORT || 8000, () => {
    console.log("Server running with port " + port);
});
