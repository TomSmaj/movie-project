USE movies_db;

INSERT INTO users(username, password, createdAt, updatedAt) VALUES('testUser1', 'password', '2018-11-20', '2018-11-20');
INSERT INTO users(username, password, createdAt, updatedAt) VALUES('testUser2', 'password', '2018-11-20', '2018-11-20');

INSERT INTO clubs(name, description, createdAt, updatedAt, admin) 
VALUES('Women in Cinema', 'This is a movie club focusing on the discussion of women in cinema.', '2018-11-20', '2018-11-20', 'testUser1');

INSERT INTO clubs(name, description, createdAt, updatedAt, admin) 
VALUES('Racial Justice', 'This is a movie club focusing on the discussion of movies exploring the topics of racial justice.', '2018-11-20', '2018-11-20', 'testUser2');

INSERT INTO discussions(text, title, startDate, endDate, active, movie, moviePoster, moviePlot, movieYear, createdAt, updatedAt, ClubClubId, UserUserId)
VALUES('Hey guys, I want to talk about Suspiria. What did you think about it?',
		'What did you think about Suspiria?',
		'2018-11-20',
		'2018-11-30',
		1,
        'Suspiria',
        'https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwMDE3NDMyNjM@._V1_.jpg',
        'This is the plot of Suspiria',
        2018,
        '2018-11-20',
        '2018-11-20',
        1,
        1
);

INSERT INTO discussions(text, title, startDate, endDate, active, movie, moviePoster, moviePlot, movieYear, createdAt, updatedAt, ClubClubId, UserUserId)
VALUES('What do you guys think about Get Out',
		'Get Out?',
		'2018-11-20',
		'2018-11-30',
		1,
        'Get Out',
        'https://img.moviepostershop.com/get-out-movie-poster-2017-1000778070.jpg',
        'This is the plot of Get Out',
        2017,
        '2018-11-20',
        '2018-11-20',
        2,
        2
);

INSERT INTO clubusers(createdAt, updatedAt, ClubClubId, UserUserId)
VALUES('2018-11-20', '2018-11-20', 1, 1);

INSERT INTO clubusers(createdAt, updatedAt, ClubClubId, UserUserId)
VALUES('2018-11-20', '2018-11-20', 2, 2);



