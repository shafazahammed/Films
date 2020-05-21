module.exports = {
    "up": "CREATE TABLE users (user_id INT NOT NULL, AUTO_INCREMENT user_id, PRIMARY KEY user_id (user_id), name VARCHAR(50), email VARCHAR(50), password TEXT )",
    "down": "DROP TABLE users"
}