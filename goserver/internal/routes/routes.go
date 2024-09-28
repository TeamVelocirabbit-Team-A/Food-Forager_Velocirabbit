package routes

import (
	"fmt"
	"net/http"
	"os"

	"github.com/RoderickXii/Food-Forager/internal/db"
	"github.com/RoderickXii/Food-Forager/internal/handlers"
)


func NewRouter() (http.Handler, error){
	mux := http.NewServeMux()

	mux.HandleFunc("/api/data", apiDataHandler)
	mux.HandleFunc("/register", registerHandler)
	mux.HandleFunc("/login", loginHandler)

	err := db.Connect()
	if err != nil {
		os.Exit(1)
		return nil, fmt.Errorf("Internal server error connection to database: %v\n", err)
	}

	return mux, nil
}


func apiDataHandler (w http.ResponseWriter, r *http.Request) {
	data := "Some Data from the API"
	fmt.Fprintln(w, data)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
    // Set CORS headers
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return
    }

		switch r.Method {
    // case "GET":
    //     handleGet(w, r)
    case "POST":
        handlers.HandleLoginPost(w, r)
    // case "PUT":
    //     handlePut(w, r)
    // case "DELETE":
    //     handleDelete(w, r)
    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }

}

func registerHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return
    }
    
    if r.Method != "POST" {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    handlers.HandleRegisterPost(w, r)

}

