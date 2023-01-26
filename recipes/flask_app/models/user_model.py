# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.password = data['password']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM Users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('users').query_db(query)
        # Create an empty list to append our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            friends.append( cls(friend) )
        return friends

    @classmethod
    def create(cls, data):
        print(data)
        query = """
        INSERT INTO users (first_name, last_name, email, password) 
        VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s)
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = """
        UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s
        WHERE users.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
        DELETE FROM users WHERE users.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get1(cls, data):
        query = """
            SELECT * FROM users 
            WHERE id = %(id)s
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results: 
            return cls(results[0])
        return False

    @classmethod
    def get_email(cls, data):
        query = """
            SELECT * FROM users 
            WHERE email = %(email)s
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results: 
            return cls(results[0])
        return False

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @staticmethod
    def validate_user(user):
        is_valid = True # we assume this is true
        if len(user['first_name']) < 2:
            is_valid = False
            flash("First name must be at least 2 characters.", 'reg')
        if len(user['last_name']) < 2:
            is_valid = False
            flash("Last name must be at least 2 characters.", 'reg')
        if len(user['email']) < 1:
            is_valid = False
            flash("Email must be filled out.", 'reg')
        elif not EMAIL_REGEX.match(user['email']):
            is_valid = False
            flash("Email invalid", 'reg')
        else:
            data = { 
                'email' : user['email']
            }
            potential_user = User.get_email(data)
            if potential_user:
                is_valid = False
                flash("email already exists (hope it's you!)", 'reg')    #dont have function yet
        if len(user['password']) < 3:
            flash("Password must be 4 chars", 'reg')
            is_valid = False
        elif not user['password'] == user['conf_password']:
            flash("Passwords must match", 'reg')
            is_valid = False
        return is_valid