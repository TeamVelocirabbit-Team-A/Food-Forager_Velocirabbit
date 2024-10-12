package db

import (
	"context"
	"fmt"

	"github.com/RoderickXii/Food-Forager/internal/models"
)

func InsertUser(username, password, email, first_name, last_name string) error {
	insertUserStr := `
		INSERT INTO users (username, password, email, first_name, last_name)
		VALUES ($1, $2, $3, $4, $5)`
	_, err := pool.Exec(context.Background(), insertUserStr, username, password, email, first_name, last_name)
	if err != nil {
		return err
	}
	return nil
}

func GetUser(username string) (models.Login, error) {
    var user models.Login
    getUserStr := `
        SELECT first_name, last_name, username, email, password FROM users WHERE username = $1`
    err := pool.QueryRow(context.Background(), getUserStr, username).Scan(&user.FirstName, &user.LastName, &user.Username, &user.Email, &user.Password)
    if err != nil {
        return models.Login{}, err
    }
    fmt.Printf("User: %v\n", user)
    return user, nil
}