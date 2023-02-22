import React from "react";

import styles from "./SongCard.module.css";

const SongCard = ({song}) => {
	return (
		<div className={styles.card}>
			<div>
				<div>
					<img
						src="https://64.media.tumblr.com/f349c4d4e0c0214b6ba07cc165d91faa/407cf9a471ee953d-0a/s500x750/fd374588880ee35acd472f11d528b19ab3cd9331.gif"
						alt="Song"
						className={styles.song_image}
					/>
				</div>
				<h3 className={styles.song_text}>{song.title_short}</h3>
				<h3 className={styles.song_text}>{song.artist.name}</h3>
			</div>
			<button className={styles.song_button}>Favorite Song</button>
		</div>
	);
};

export default SongCard;
