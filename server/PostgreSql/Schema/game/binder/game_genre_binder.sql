CREATE TABLE game_genre_binder (
	id SERIAL PRIMARY KEY,
	game_id INT,
	genre_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (genre_id) REFERENCES game_genre(id)
);