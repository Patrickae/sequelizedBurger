
module.exports = function(sequelize, DataType){
	var burgers = sequelize.define("burgers",{
		burger_name:{
			type: DataType.STRING,

			validate:{
				notEmpty: true,
				len:[1,150]
			}

		},
		devoured:{
			type: DataType.BOOLEAN,
			defaultValue: false
		}
	});
	return burgers;
};