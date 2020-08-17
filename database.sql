
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "email" VARCHAR (150) NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "organization" VARCHAR (150) NOT NULL,
    "phone_number" INTEGER
);

CREATE TABLE "ideas" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"comment" TEXT NOT NULL
);

CREATE TABLE "feedback_questions" (
	"id" SERIAL PRIMARY KEY,
	"questions" INT REFERENCES "feedback_questions"
);

CREATE TABLE "feedback" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"question_id" INT REFERENCES "feedback_questions",
	"comments" TEXT NOT NULL
);


SELECT * FROM "user" WHERE "id" = 3;
