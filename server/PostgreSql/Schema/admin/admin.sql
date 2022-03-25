CREATE TABLE admin(
    id serial PRIMARY KEY,
    login TEXT UNIQUE,
    password TEXT,
    key TEXT
)