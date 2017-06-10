module.exports = function(sequelize, DataType){
	var names = sequelize.define("names",{
		eater_name:{
			type: DataType.STRING,

			validate:{
				notEmpty: true,
				len:[1,150]
			}}
	});
	return names;
};