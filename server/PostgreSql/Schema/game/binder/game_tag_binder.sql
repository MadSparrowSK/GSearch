CREATE TABLE game_tag_binder (
	id SERIAL PRIMARY KEY,
	game_id INT,
	tag_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (tag_id) REFERENCES game_tag(id)
);