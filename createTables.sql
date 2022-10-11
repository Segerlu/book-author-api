DROP TABLE IF EXISTS authors CASCADE;

CREATE TABLE authors (
    id varchar(50) PRIMARY KEY,
    name varchar(50),
    birth_date varchar(25),
    top_book varchar(50),
    num_books_written integer
);


DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
    id serial PRIMARY KEY,
    title varchar(200),
    publish_year integer DEFAULT 0,
    page_count integer DEFAULT 0,
    author_key varchar(50) REFERENCES authors ON DELETE CASCADE
);

INSERT INTO authors (id, name, birth_date, top_book, num_books_written) 
    VALUES ('OL1394865A', 'Brandon Sanderson', '19 December 1975', 'The Final Empire', 110);

INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Final Empire', 2001, 672, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Elantris', 2005, 623, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Way of Kings', 2010, 1008, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Well of Ascension', 2000, 784, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Hero of Ages', 2008, 760, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Alloy of Law', 2001, 368, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('A Memory of Light', 2013, 912, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Firefight (The Reckoners);', 2001, 452, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Skyward', 2018, 528, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Bands of Mourning', 2001, 448, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Knife of Dreams', 2005, 832, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Words of Radiance', 2014, 1088, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Calamity', 2001, 432, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Warbreaker', 2009, 580, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Shadows of Self', 2015, 383, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Alcatraz Versus The Evil Librarians', 2007, 314, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Towers Of Midnight', 2010, 976, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Oathbringer', 2017, 1214, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Gathering Storm', 2009, 824, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Steelheart (The Reckoners, Book 1);', 2001, 416, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rhythm of War', 2020, 1088, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Starsight', 2019, 480, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Alcatraz versus the Scriveners Bones', 2008, 321, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Cytonic', 2021, 432, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Rithmatist', 2013, 448, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Alcatraz versus the Shattered Lens', 2010, 288, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Alcatraz versus the Knights of Crystallia', 2009, 312, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mistborn Trilogy', 2001, 1712, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Skyward Flight : The Collection', 2022, 640, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Arcanum Unbounded', 2016, 672, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Dark Talent', 2016, 280, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The emperors soul', 2012, 160, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Legion', 2018, 352, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Dangerous Women', 2013, 480, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Oathbringer part 1', 2017, 656, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Lost Metal', 2016, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Legion: Lies of the Beholder', 2018, 142, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Edgedancer', 2016, 249, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Legion & The Emperos Soul', 2013, 232, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Legion', 2012, 88, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Way of Kings Part Two', 2020, 1, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Way of Kings, Part One', 2011, 298, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Words of Radiance Part Two: The Stormlight Archive Book Two', 2001, 576, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rythm of War part 1', 2021, 736, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Legion: Skin Deep', 2001, 204, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Oathbringer Part Two', 2018, 768, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Children of the Nameless', 2018, 168, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Words of Radiance Part One: The Stormlight Archive Book Two', 2001, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Stormlight Archive MM Boxed Set I, Books 1-3', 2018, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Infinity blade', 2018, 107, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rhythm of War Part Two', 2022, 752, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Dawnshard', 2020, 208, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('FirstBorn & Defending Elysium (Double Novella); **SIGNED**', 2013, 160, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mistborn: Secret History', 2019, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Brandon Sandersons Fantasy Firsts : (the Way of Kings, Mistborn: the Final Empire, Rithmatist, Alcatraz vs. the Evil Librarians);', 2017, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Untitled Brandon Sanderson 3 of 3', 2099, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Sixième du crépuscule et autres nouvelles', 2018, 544, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Stormlight Archive Series 6 Books Collection Set by Brandon Sanderson', 2020, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Untitled Sanderson 2 of 3 (Childrens); Untitled Sanderson 2 Of 3 (Children', 2099, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Reckoners Series', 2016, 1059, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Stormlight Archives HC Boxed Set 1-4', 2022, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mistborn : the Wax and Wayne Series', 2018, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Defending Elysium', 2021, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Stormlight Archive Series Brandon Sanderson Collection 4 Books Bundles Set', 2017, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Alcatraz und das Pergament des Todes', 2008, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Reckoners Series Boxed Set', 2016, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Firstborn', 2010, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Stormlight Archive', 2016, 28, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rozjemca', 2016, 630, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rhythm of War Part One', 2023, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Arena Blanca', 2022, 496, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Der Pfad der Winde', 2016, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Untitled Sanderson 2 of 3 (ChildrenS);', 2015, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Creative Writing Course', 2022, 334, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Firefight', 2016, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Emperors Soul - The 10th Anniversary Special Edition', 2022, 192, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Hero of Ages', 2014, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mistborn', 2014, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Steelheart', 2014, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Rithmatist', 2014, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Well of Ascension', 2014, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Calamity', 2017, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('White Sand', 2016, 160, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mitosis: A Reckoners Story (The Reckoners);', 2001, 96, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Snapshot: Signed', 2017, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('The Complete Alcatraz', 2012, 1096, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('El rithmatista', 0, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Mistborn', 0, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Kinder des Nebels', 0, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('La Voie des Rois 1', 0, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Sufletul Imparatului', 0, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Perfect State (Kindle Single);', 2015, 87, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Scarlet Circus', 2023, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Brandon Sandersons White Sand Volume 2', 2018, 160, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Shadows for Silence in the Forests of Hell', 2015, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('What the Storm Means : Prologue to the Gathering Storm', 2009, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Distinctions : Prologue to Towers of Midnight', 2010, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('By Grace and Banners Fallen', 2012, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Sunreach', 2021, 0, 'OL1394865A');
INSERT INTO books (title, publish_year, page_count, author_key) 
    VALUES ('Bastille vs. the Evil Librarians', 2022, 0, 'OL1394865A');