# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
# model the class after the friend table from our database
class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = """
        SELECT * 
        FROM dojos;"""
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        dojos = []
        # Iterate over the db results and create instances of dojos with cls.
        for dojo in results:
            dojos.append( cls(dojo) )
        return dojos

    @classmethod
    def create(cls, data):
        print(data)
        query = """
        INSERT INTO dojos (name) 
        VALUES (%(name)s)
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get1(cls, data):
        query = """
            SELECT * FROM dojos 
            LEFT JOIN ninjas on dojos.id = ninjas.dojos_id
            WHERE dojos.id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results: 
            dojo_instance = cls(results[0])
            for one_row in results:
                if one_row['ninjas.id'] == None:
                    return dojo_instance
                ninja_data = {
                'id' : one_row['ninjas.id'],
                'first_name' : one_row['first_name'],
                'last_name' : one_row['last_name'],
                'age' : one_row['age'],
                'created_at' : one_row['ninjas.created_at'],
                'updated_at' : one_row['ninjas.updated_at'],
                'dojos_id' : one_row['dojos_id']
                }
                dojo_instance.ninjas.append(ninja_data)
            return dojo_instance
        return False