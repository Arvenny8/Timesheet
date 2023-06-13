module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
        "Employee",
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            salary: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM("FirstJob", "Admin"),
                allowNull: false,
            },
        },
        {
            underscored: true,
        }
    );
    Employee.associate = (models) => {
        Employee.belongsTo(models.Timesheet, {
            foreingnKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
        Employee.hasMany(models.EmployeeProjectRelation, {
            foreingnKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
    };

    return Employee;
};
