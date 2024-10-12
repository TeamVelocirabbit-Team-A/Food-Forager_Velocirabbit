package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/RoderickXii/Food-Forager/internal/db"
	"github.com/RoderickXii/Food-Forager/internal/models"
	"github.com/RoderickXii/Food-Forager/utils"
)

func HandleRegisterPost (w http.ResponseWriter, r *http.Request){
	fmt.Println("in Register Handler")
	var client models.User

	// Decode the incoming json
	err := json.NewDecoder(r.Body).Decode(&client)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println("finished decoding")

	if client.Username == "" || 
			client.Password == "" || 
			client.Email == "" || 
			client.FirstName == "" || 
			client.LastName == "" {
		http.Error(w, "Missing Credentials", http.StatusBadRequest)
		return
	}

	// Validates and hashes the password
	if !utils.IsValidPassword(client.Password) {
		http.Error(w, "Invalid Password", http.StatusBadRequest)
		return
	}
	fmt.Println("finished valdidating password")

	client.Password, _ = utils.HashPassword(client.Password)

	fmt.Println("finished hashing")

	// Insert the user into the database
	err = db.InsertUser(client.Username, client.Password, client.Email, client.FirstName, client.LastName)
	if err != nil {
			http.Error(w, "Error inserting user", http.StatusInternalServerError)
			return
	}
	fmt.Println("finished inserting user")

	// Send a JSON response back to the client server
	response := map[string]string{
			"message": "Registration successful",
			"username":    client.Username,
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err = json.NewEncoder(w).Encode(response)
	if err != nil {
			fmt.Println("Error encoding response:", err)
			return
	}
	fmt.Printf("finished sending response with %v\n", response)
}

