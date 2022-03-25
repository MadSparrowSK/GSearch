CREATE TABLE game_pub_binder (
	id SERIAL PRIMARY KEY,
	game_id INT,
	game_pub_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (game_pub_id) REFERENCES game_publisher(id)
);