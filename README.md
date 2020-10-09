# Django Project Starter

This is a template that you can use to start a Django project.

## Pre-requisites
- Docker
- Docker-compose

## Includes
- Django instance
- PostgreSQL database

## Plugins
- Django RestFramework


## Installation

1. Clone this repo in a new folder
2. Rename everywhere `djangostarter` is mentionned
3. Build the docker: `docker-compose build`
4. Start the docker: `docker-compose up -d`


## Default values

### Login for postgres
**DB** postgres

**Username** postgres

**Password** postgres

### URLs
- [Django admin](http://localhost:8000/admin/)
- [DRF login](http://localhost:8000/api-auth/)


## Usefull tips
**Create your admin user**
1. Enter the web docker, example: `docker exec -it django-starter_web_1 bash`
2. Create the user: `python ./manage.py createsuperuser`
3. Fill the information
4. Test it at the login url

**Create and run migrations**
1. Enter the web docker, example: `docker exec -it django-starter_web_1 bash`
2. Create the migrations: `python ./manage.py makemigrations`
3. Run the migrations: `python ./manage.py migrate`

**Navigate the database**
1. Enter the db docker, example: `docker exec -it django-starter_db_1 bash`
2. Enter the database with psql, example: `psql -Upostgres`

**Create an app**
1. Enter the web docker, example: `docker exec -it django-starter_web_1 bash`
2. Create the app, example: `python ./manage.py startapp mydjangoapp`

**Run tests**
1. Enter the web docker, example: `docker exec -it django-starter_web_1 bash`
2. Run tests `python ./manage.py test`
