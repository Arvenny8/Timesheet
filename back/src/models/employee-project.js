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
            foreingnKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
        EmployeeProjectRelation.belongsTo(models.Project, {
            foreingnKey: {
                name: "projectId",
                allowNull: false,
            },
        });
        EmployeeProjectRelation.belongsTo(models.Project, {
            foreingnKey: {
                name: "EmployeeProjectRelationId",
                allowNull: false,
            },
        });
    };
    return EmployeeProjectRelation;
};
