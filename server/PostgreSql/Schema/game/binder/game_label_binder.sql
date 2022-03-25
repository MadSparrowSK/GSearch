CREATE TABLE game_label_binder (
	id SERIAL PRIMARY KEY,
	game_id INT,
	label_id INT,
	FOREIGN KEY (game_id) REFERENCES game(id),
	FOREIGN KEY (label_id) REFERENCES game_label(id)
)