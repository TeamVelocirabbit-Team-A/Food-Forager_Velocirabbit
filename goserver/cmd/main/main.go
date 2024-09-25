package main

import (
	"fmt"
	"net/http"

	"github.com/RoderickXii/Food-Forager/internal/routes"
)

func main() {
	router := routes.NewRouter()

	port := 80
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server is running on http://localhost%s\n", addr)
	err := http.ListenAndServe(addr, router)
	if err != nil {
		panic(err)
	}

}