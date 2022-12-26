create TABLE persons(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(40)
);

create TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    todo VARCHAR(255),
    isDone BOOLEAN,
    FOREIGN KEY(person_id) REFERENCES persons(id) ON DELETE CASCADE
);