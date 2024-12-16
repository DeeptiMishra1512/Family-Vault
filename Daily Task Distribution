Summary: This page describes the steps to follow in order to create the MVP in a week.

# Outline line of Tasks
ZCW Passion Project methodology for PassionProj Week.

Each of these phases are designed to move the project from the One-Pager stage to *something* 
working by the end of the week.

There are two possible templates here, one for a 3-tier Web Applicationa and one for the creation of
a Data Pipeline Application.

## Documentation 

The one-pager, the UX/UI mocks, and the data model documents should be complete.

## Method

Perform each of these phases in order. 

## 3-tier Web App

Now, **What is your `Entity-1`??**
In the Piro360 example, it is `Piro`

You need to determine what entity you will focus one first, what is the key
thing your app holds for a User?

### Create Repo for Project

- add all your docs in a `doc/` folder
- draft initial README.md with summarized paragraph of the one-pager
- create a `src/` folder for all your source code

### Create all three tiers

- create frontend, business logic server, database backend
- the goal of these first phases to get
  - something into a database
  - something from the database onto a web page
  - restrict the display of items based on ownership of user
  - something which can be added to db from the frontend based on the user

### REST Server (initial)
- Build a small, single entity (`Entity-1`) rest server.
  - Load some test data into the db behind the REST server with a SQL file for Entity-1.
  - Prove data is loaded with SQL
  - Prove data is loaded with a tool like Postman
- Add a User entity with a one-to-many relationship to Entity-1
  - Load some User test data into the db behind the REST server with a SQL file.
  - Prove data is loaded with SQL using an INNER join.
  - Prove data is loaded with a tool like Postman

### VanillaJS Interface

- display on a single page html, List-Of Entity-1s
- add links to Detail-Of Enitity-1s
- build a Detail-Of page for Entity-1
- add a non-working button for `add` and `edit` and `delete` of Entity-1
- style the VanillaJS UI with bootstrap or something
  - can use Koley-css 
- add a POST/FORM which adds entity-1s from the UI frontend
  - add new page for adding an Entity-1
  - add JS for same
  - connect to REST backend
  - prove it works with postman and the new page
    - what will you do about the User foreign-key relationship?

### Display User-restricted Entity-1s

- add ability to set User-1 on a List-Of page
- restrict display of List-Of Entity-1s by a User
- modify add-entity-1 page to handle the User foreign-key relationships 
- style the pages to be consistent with each other

### Business Logic

- what business logic addition can you add to your REST server?
- _Example:_ `piro360` is the idea of tags
  - display `Piro`s by `User` and by `Tag`
  - adding and removing of tags from a `Piro`


### Getting fancy... Add ReactJS UI

- add a reactjs interface that mimics your VanillaJS interface
- style it consistently
- what new spiffy items can you now do that were not really possible with vanillaJS?

### Create an admin UI

- create a CRUD admin UI for your Entities
- make sure only Users with Admin privileges can edit the database.

### Add JWT security to the project

- you may, finally, at this point, need a Login page
- create a session-based security model
- prove it works with Postman
- and maybe a Register page. (maybe)
- which brings up a Profile page
- how can you prove that your login page and its session security works?

## Data Pipeline Project

This is a comprehensive project plan outline for your data engineering pipeline.

### Create Repo for Project

- add all your docs in a `doc/` folder
- draft initial README.md with summarized paragraph of the one-pager
- create a `src/` folder for all your source code

### Data Research Phase
- Identify potential data sources
  - Document data requirements (volume, velocity, variety)
  - Assess data quality needs
  - Determine necessary data formats and schemas
- Create SQL database for data and document how it gets setup from scratch

### Data Collection & Storage Setup
- Create data ingestion pipelines in python
  - load from sources into SQL (pandas?)

### Exploratory Data Analysis (EDA) Phase

- Create initial Jupyter notebook
- Perform basic statistical analysis
  - Check data distributions and patterns
  - Identify outliers and anomalies
  - Handle missing values
- Document initial findings
- Create data cleaning procedures

### Advanced Analytics Phase

- Define key metrics and KPIs
  - Develop statistical models
- Implement feature engineering
- Create data transformation pipelines
- Validate analytical results

### Visualization Development
- Select appropriate visualization libraries
- Design initial visualization mockups
- Create core visualizations
  - Implement interactive features?
- Ensure responsive design (mobile and desktop?)
- Test visualization performance
- Document visualization components

