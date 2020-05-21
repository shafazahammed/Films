module.exports = {
    "up": "CREATE TABLE comments (comment_id INT NOT NULL, AUTO_INCREMENT comment_id, PRIMARY KEY comment_id (comment_id), user_id VARCHAR(50), user_name VARCHAR(50), comment TEXT, film_id VARCHAR(50),created DATE )",
    "down": "DROP TABLE comments"
}