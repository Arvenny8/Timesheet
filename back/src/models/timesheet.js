module.exports = (sequelize, DataTypes) => {
    const Timesheet = sequelize.define(
        "Timesheet",
        {
            workHrs: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            costPerHrs: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            Date: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    );
    Timesheet.associate = (models) => {
        Timesheet.hasMany(models.Employee, {
            foreingnKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
        Timesheet.hasMany(models.Project, {
            foreingnKey: {
                name: "projectId",
                allowNull: false,
            },
        });
    };

    return Timesheet;
};
