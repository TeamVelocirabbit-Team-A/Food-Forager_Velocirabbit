package utils

import (
	"fmt"
	"strings"
	"unicode"

	"golang.org/x/crypto/bcrypt"
)

func IsValidPassword (password string) bool {
	minLen := 8;
	maxLen := 20;
	
	if len(password) < minLen || len(password) > maxLen {
		return false
	} 
		
	specialChars := "@$!%*?&"
	var hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar bool

	for _, char := range password {
			if hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar {
					break
			}

			switch {
			case unicode.IsUpper(char):
					hasUpperCase = true
			case unicode.IsLower(char):
					hasLowerCase = true
			case unicode.IsDigit(char):
					hasNumber = true
			case strings.ContainsRune(specialChars, char):
					hasSpecialChar = true
			}
	}

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
}

func HashPassword(password string) (newPassword string, err error) {
	var pwInByte []byte

	pwInByte, err = bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("Error hashing password:", err)
		return "", err
	}	

	return string(pwInByte), nil
}

func ComparePassword(hashedPassword, password string) error {
    err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
    if err != nil {
        return err
    }
    return nil
}