package routes

import (
	"fmt"
	"net/http"
)

func NewRouter() http.Handler{
	mux := http.NewServeMux()

	// mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("../client/dist/static/"))))
	// mux.HandleFunc("/", indexHandler)
	mux.HandleFunc("/api/data", apiDataHandler)

	return mux
}

// func indexHandler (w http.ResponseWriter, r *http.Request) {
// 	http.ServeFile(w, r, "../client/dist/index.html")
// }

func apiDataHandler (w http.ResponseWriter, r *http.Request) {
	data := "Some Data from the API"
	fmt.Fprintln(w, data)
}