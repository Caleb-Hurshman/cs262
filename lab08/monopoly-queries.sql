-- This sql file contains queries for the monopoly database
-- for lab08 in CS 262, Fall 2020
-- by Caleb Hurshman (cah222)


--Queries for Lab08 exercise 8.1

--a. SELECT *
--   FROM Game
--   ORDER BY time DESC

--b. SELECT *
--   FROM Game
--   WHERE time > '2020-10-16'

--c. SELECT * FROM Player
--   WHERE name IS NOT NULL

--d. SELECT PlayerID FROM PlayerGame
--   WHERE score > 2000

--e. SELECT * FROM Player
--   WHERE emailAddress LIKE '%gmail%'


-Queries for Lab08 exercise 8.2

--a. SELECT score
--   FROM Player, PlayerGame
--   WHERE PlayerGame.playerID = Player.ID
--   AND Player.name = 'The King'
--   ORDER BY score DESC

--b. SELECT name
--   FROM Game, Player, PlayerGame
--   WHERE PlayerGame.playerID = Player.ID
--   AND PlayerGame.gameID = Game.ID
--   AND Game.time = '2006-06-28 13:20:00'
--   ORDER BY PlayerGame.score DESC 
--   LIMIT 1;

--c. It makes sure that the id created for the second player is larger than the first       --   player, meaning it was created later, and also checks to make sure they don't have  --   identical ids.

--d. If you had a set of data where two data points had something in common (same name,  --   same birthdate, same password) you would want to be able to differentiate between   --   them