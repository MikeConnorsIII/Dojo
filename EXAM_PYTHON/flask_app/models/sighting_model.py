# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model
import re

class Sighting:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.location = data['location']
        self.details = data['details']
        self.date = data['date']
        self.amount = data['amount']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
        INSERT INTO sightings (location, details, amount, date, user_id)
        VALUES (%(location)s, %(details)s, %(amount)s, %(date)s, %(user_id)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = """
        UPDATE sightings SET location = %(location)s, details = %(details)s, amount = %(amount)s, date = %(date)s
        WHERE sightings.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
        DELETE FROM sightings WHERE id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get1(cls, data):
        query = """
            SELECT * 
            FROM sightings 
            LEFT JOIN users 
            ON sightings.user_id = users.id
            WHERE sightings.id = %(id)s
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if results: 
            for row in results:
                this_sighting = cls(results[0])
                user_data = {
                    **row,
                    'id' : row['users.id'],
                    'created_at' : row['users.created_at'],
                    'updated_at' : row['users.updated_at']
                }
                this_user = user_model.User(user_data)
                this_sighting.witness = this_user
                
            return this_sighting
            
            
        return False

    @classmethod
    def get_all(cls):
        query = """ SELECT * 
                    FROM sightings 
                    JOIN users 
                    ON sightings.user_id = users.id;"""
        print(query)
        
        # 
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_sightings = []
        # Iterate over the db results and create instances of friends with cls.
        for row in results:
            this_sighting = cls(row)
            user_data = {
                **row,
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at']
            }
            this_user = user_model.User(user_data)
            this_sighting.witness = this_user
            all_sightings.append(this_sighting)
        return all_sightings

    @classmethod
    def get_skeptics(cls):
        query = """ SELECT * 
                    FROM skeptics 
                    JOIN users 
                    ON skeptics.user_id = users.id;"""
        print(query)
        
        # 
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_skeptics = []
        # Iterate over the db results and create instances of friends with cls.
        for row in results:
            this_sighting = cls(row)
            user_data = {
                **row,
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at']
            }
            this_user = user_model.User(user_data)
            this_sighting.skeptic = this_user
            all_skeptics.append(this_sighting)
        return all_skeptics

    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['location']) < 1:
                flash("location must be at least 2 characters", 'new')
                is_valid = False
        if len(form_data['details']) < 1:
                flash("details required", 'new')
                is_valid = False
        if  form_data['amount'] == '0':
                flash("You sit on a throne of lies, how many did you see?", 'new')
                is_valid = False
        if  len(form_data['amount']) < 1:
                flash("Please select how many you saw!", 'new')
                is_valid = False
        if len(form_data['date']) < 1:
                flash("date required", 'new')
                is_valid = False
        return is_valid