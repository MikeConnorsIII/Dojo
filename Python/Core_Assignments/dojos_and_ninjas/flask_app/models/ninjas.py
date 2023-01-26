# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the friend table from our database
class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojos_id = data['dojos_id']##THIS MAY CAUSE AN ISSUE-------------------------------------------------------------------
        
    # Now we use class methods to query our database

    @classmethod
    def create(cls, data):
        print(data)
        query = """
        INSERT INTO ninjas (first_name, last_name, age, dojos_id) 
        VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojos_id)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)
