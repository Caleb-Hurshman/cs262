--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--
-- additions made by Caleb Hurshman (cah222) for cs262 Fall, 2020
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PLayerGameProperty;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp,
	finished bool
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	location varchar(30) NOT NULL
	);	

CREATE TABLE Property (
	ID integer PRIMARY KEY,
	name varchar(30) NOT NULL
	);

CREATE TABLE PlayerGameProperty (
	playerID integer REFERENCES Player(ID),
	gameID integer REFERENCES Game(ID),
	propertyID integer REFERENCES Property(ID),
	houses integer,
	hotels integer
	);
	

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerGameProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00', true);
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00', true);
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00', true);

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 1000, 'boardwalk');
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 10000, 'boardwalk');
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 0, 'vermont avenue');
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 500, 'park place');
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 2500, 'baltic avenue');
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 0, 'park place');
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 1000, 'states avenue');
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 10, 'pacific avenue');

INSERT INTO Property VALUES (1, 'boardwalk');
INSERT INTO Property VALUES (2, 'pennsylvania ave');
INSERT INTO Property VALUES (3, 'park place');

INSERT INTO PlayerGameProperty VALUES (1, 1, 1, 1, 0);
INSERT INTO PlayerGameProperty VALUES (2, 1, 2, 0, 1);
INSERT INTO PlayerGameProperty VALUES (3, 1, 3, 1, 1);

