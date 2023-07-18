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
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM("Male", "Female"),
                allowNull: false,
            },
            birthday: {
                type: DataTypes.STRING,
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
        Employee.hasMany(models.EmployeeProjectRelation, {
            foreignKey: {
                name: "employeeId",
                allowNull: false,
            },
        });
    };
    return Employee;
};
