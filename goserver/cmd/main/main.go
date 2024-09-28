package main

import (
	"fmt"
	"net/http"

	"github.com/RoderickXii/Food-Forager/internal/routes"
)

func main() {
	router, err := routes.NewRouter()
	if err != nil {
		panic(err)
	}

	port := 80
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server is running on http://localhost%s\n", addr)
	error := http.ListenAndServe(addr, router)
	if error != nil {
		panic(error)
	}

}