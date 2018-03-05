'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    user_type: DataTypes.STRING,
    manager_u_id: DataTypes.STRING,
    user_u_id: DataTypes.STRING,
    first_n: DataTypes.STRING,
    last_n: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.INTEGER,
    company: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};