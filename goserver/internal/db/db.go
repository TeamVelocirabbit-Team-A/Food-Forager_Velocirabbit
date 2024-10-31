package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

var pool *pgxpool.Pool

// Connect initializes the database connection pool
func Connect() error {
    var err error
    pool, err = pgxpool.New(context.Background(), os.Getenv("DATABASE_URL"))
    if err != nil {
        return fmt.Errorf("unable to create connection pool: %v", err)
    }

		 // Create the table if it doesn't exist
    err = createTable(pool)
    if err != nil {
        return fmt.Errorf("error creating table: %v", err)
    }

		// Get the list of tables and print them
    tables, err := getTables(pool)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error getting tables: %v\n", err)
        os.Exit(1)
    }
    fmt.Println("Tables in the database:")
    for _, table := range tables {
        fmt.Println(table)
    }

    return nil
}

func Close() {
    if pool != nil {
        pool.Close()
    }
}

func createTable (db *pgxpool.Pool) error {
    createTableStr := `
        CREATE TABLE IF NOT EXISTS users (
            uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            id SERIAL,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`
    _, err := db.Exec(context.Background(), createTableStr)
    if err != nil {
            return err
    }
    return nil
}

func getTables(db *pgxpool.Pool) ([]string, error) {
    rows, err := db.Query(context.Background(), "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var tables []string
    for rows.Next() {
        var tableName string
        if err := rows.Scan(&tableName); err != nil {
            return nil, err
        }
        tables = append(tables, tableName)
    }

    if rows.Err() != nil {
        return nil, rows.Err()
    }

    return tables, nil
}