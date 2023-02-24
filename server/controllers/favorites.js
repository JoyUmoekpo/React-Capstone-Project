const { Favorites } = require("../models/favorites");

module.exports = {
	addFavorite: async (req, res) => {
		try {
			const { song_id, userId } = req.body;
			await Favorites.create({ song_id, userId });
			console.log(req.body);
		} catch (error) {
			console.log("ERROR IN addFavorite");
		}
	},
	getFavorites: async (req, res) => {
		try {			
			// const { userId } = req.user;
			const favorites = await Favorites.findAll({
				limit: 5,
			});
			res.status(200).send(favorites);
		} catch (error) {
			console.log("ERROR IN getFavorites", error);
			res.sendStatus(500);
		}
	},
};