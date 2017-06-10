module.exports = function(db) {
	db.burgers.belongsTo(db.names, {foreign: {allowNull: false} });
	db.names.hasMany(db.burgers, {onDelete: "cascade"});
};