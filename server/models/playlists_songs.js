const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
	PlaylistSongs: sequelize.define("playlist_songs", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		song_id: DataTypes.INTEGER,
	}),
};
