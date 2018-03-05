'use strict';
module.exports = (sequelize, DataTypes) => {
  var units = sequelize.define('units', {
    unit_u_id: DataTypes.STRING,
    manager_u_id: DataTypes.STRING,
    user_u_id: DataTypes.STRING,
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    unit_num: DataTypes.INTEGER,
    stories_num: DataTypes.INTEGER,
    bed: DataTypes.INTEGER,
    bath: DataTypes.INTEGER,
    garage: DataTypes.BOOLEAN,
    yard: DataTypes.STRING
  }, {});
  units.associate = function(models) {
    // associations can be defined here
  };
  return units;
};