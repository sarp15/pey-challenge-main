package datastore

import (
	"context"

	"github.com/google/uuid"
)

// Store users in this map to mimic a db
var userStore = make(map[string]User)

type User struct {
	Id    string
	Name  string
	Email string
	FavouriteColour string
}

func CreateUser(ctx context.Context, name string, email string, favouriteColour string) (string, error) {
	id := uuid.New().String()
	// save the user
	userStore[id] = User{
		Id:    id,
		Name:  name,
		Email: email,
		FavouriteColour: favouriteColour,
	}

	return id, nil
}
