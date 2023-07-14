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
        Timesheet.belongsTo(models.EmployeeProjectRelation, {
            foreingnKey: {
                name: "EmployeeProjectRelationId",
                allowNull: false,
            },
        });
    };

    return Timesheet;
};
