CREATE TABLE game_platform_binder (
	id SERIAL PRIMARY KEY,
	game_id INT,
	platform_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (platform_id) REFERENCES game_platform(id)
);