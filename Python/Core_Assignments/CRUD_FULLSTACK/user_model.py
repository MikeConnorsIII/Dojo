# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
DATABASE = "users"
# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
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
        INSERT INTO users (first_name, last_name, email) 
        VALUES (%(first_name)s, %(last_name)s, %(email)s)
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