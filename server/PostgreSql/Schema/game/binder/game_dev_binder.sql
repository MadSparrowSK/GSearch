CREATE TABLE game_dev_binder(
	id SERIAL PRIMARY KEY,
	game_id INT,
	game_dev_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (game_dev_id) REFERENCES game_developer(id)
);