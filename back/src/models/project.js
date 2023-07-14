module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
        "Project",
        {
            projectName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            Budget: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            status: {
                type: DataTypes.ENUM("On Going", "DONE"),
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
    Project.associate = (models) => {
        Project.hasMany(models.EmployeeProjectRelation, {
            foreingnKey: {
                name: "EmployeeProjectRelationId",
                allowNull: false,
            },
        });
    };
    return Project;
};
