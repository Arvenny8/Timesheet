module.exports = (sequelize, DataTypes) => {
    const EmployeeProjectRelation = sequelize.define(
        "EmployeeProjectRelation",
        {},
        {
            underscored: true,
        }
    );
    EmployeeProjectRelation.associate = (models) => {
        EmployeeProjectRelation.hasMany(models.Employee, {
            foreingnKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
        EmployeeProjectRelation.hasMany(models.Project, {
            foreingnKey: {
                name: "projectId",
                allowNull: false,
            },
        });
    };
    return EmployeeProjectRelation;
};
