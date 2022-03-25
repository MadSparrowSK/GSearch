CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    author TEXT,
    title TEXT,
    description TEXT,
    content TEXT,
    image TEXT,
    date DATE default CURRENT_DATE,
    type VARCHAR(30),
    type_id INT,
);