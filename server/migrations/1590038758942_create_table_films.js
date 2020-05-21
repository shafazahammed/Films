module.exports = {
    "up": "CREATE TABLE films (film_id INT NOT NULL,AUTO_INCREMENT film_id, PRIMARY KEY film_id (film_id), user_id INT NOT NULL, name VARCHAR(100), description TEXT, genre TEXT , country VARCHAR(50),ticketprice INT(10),releasedate VARCHAR(50),photo TEXT,rating INT(10),created DATE )",
    "down": "DROP TABLE films"
}