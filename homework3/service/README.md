# Homework 3
a. https://powerful-savannah-37742.herokuapp.com
    https://powerful-savannah-37742.herokuapp.com/players
    https://powerful-savannah-37742.herokuapp.com/players/:id
    https://powerful-savannah-37742.herokuapp.com/highscoreholder
    router.put("/players/:id", updatePlayer);
    router.post('/players', createPlayer);
    router.delete('/players/:id', deletePlayer);
    
b. https://powerful-savannah-37742.herokuapp.com  is nullipotent
    https://powerful-savannah-37742.herokuapp.com/players  is nullipotent
    https://powerful-savannah-37742.herokuapp.com/players/:id  is nullipotent
    https://powerful-savannah-37742.herokuapp.com/highscoreholder  is nullipotent
    router.put("/players/:id", updatePlayer);  is idempotent
    router.post('/players', createPlayer);  is neither idempotent nor nullipotent
    router.delete('/players/:id', deletePlayer);  is idempotent
    
c. I think it is RESTful because it uses https and doesn't track state (no saved context of user visits)

d. There 
 
