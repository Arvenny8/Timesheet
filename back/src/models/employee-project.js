module.exports = (sequelize, DataTypes) => {
    const EmployeeProjectRelation = sequelize.define(
        "EmployeeProjectRelation",
        {},
        {
            underscored: true,
        }
    );
    EmployeeProjectRelation.associate = (models) => {
        EmployeeProjectRelation.belongsTo(models.Employee, {
            foreignKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
        EmployeeProjectRelation.belongsTo(models.Project, {
            foreignKey: {
                name: "projectId",
                allowNull: false,
            },
        });
    };
    return EmployeeProjectRelation;
};
