module.exports = function(sequelize,DataTypes){
    let units = sequelize.define("Units",{
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        beds: DataTypes.INTEGER,
        bath: DataTypes.INTEGER,
        garage: DataTypes.BOOLEAN        
    });
    return units;
};