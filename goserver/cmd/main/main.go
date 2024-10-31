package main

import (
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/RoderickXii/Food-Forager/internal/db"
	"github.com/RoderickXii/Food-Forager/internal/routes"
)

func main() {
	router, err := routes.NewRouter()
	if err != nil {
		panic(err)
	}

	defer db.Close()

	port := 80
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server is running on http://localhost%s\n", addr)
	error := http.ListenAndServe(addr, router)
	if error != nil {
		panic(error)
	}

	sigChan := make(chan os.Signal, 1)
    signal.Notify(sigChan, os.Interrupt, syscall.SIGTERM)
    <-sigChan

    fmt.Println("Shutting down gracefully...")
}