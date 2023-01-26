# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model
import re

class Recipe:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.under30 = data['under30']
        self.date_made = data['date_made']
        self.user_id = data['user_id']

    @classmethod
    def create(cls, data):
        query = """
        INSERT INTO recipes (name, description, instructions, under30, date_made, user_id)
        VALUES (%(name)s, %(description)s, %(instructions)s, %(under30)s, %(date_made)s, %(user_id)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = """
        UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under30 = %(under30)s
        WHERE recipes.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
        DELETE FROM recipes WHERE id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get1(cls, data):
        query = """
            SELECT * 
            FROM recipes 
            LEFT JOIN users 
            ON recipes.user_id = users.id
            WHERE recipes.id = %(id)s
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if results: 
            for row in results:
                this_recipe = cls(results[0])
                user_data = {
                    **row,
                    'id' : row['users.id'],
                    'created_at' : row['users.created_at'],
                    'updated_at' : row['users.updated_at']
                }
                this_user = user_model.User(user_data)
                this_recipe.chef = this_user
                
            return this_recipe
            
            
        return False

    @classmethod
    def get_all(cls):
        query = """ SELECT * 
                    FROM recipes 
                    JOIN users 
                    ON recipes.user_id = users.id;"""
        print(query)
        
        # 
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_recipes = []
        # Iterate over the db results and create instances of friends with cls.
        for row in results:
            this_recipe = cls(row)
            user_data = {
                **row,
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at']
            }
            this_user = user_model.User(user_data)
            this_recipe.chef = this_user
            all_recipes.append(this_recipe)
        return all_recipes

    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['name']) < 1:
                flash("Name must be at least 2 characters", 'new')
                is_valid = False
        if len(form_data['description']) < 1:
                flash("Description required", 'new')
                is_valid = False
        if len(form_data['instructions']) < 1:
                flash("Instructions required", 'new')
                is_valid = False
        if len(form_data['date_made']) < 1:
                flash("description required", 'new')
                is_valid = False
        if "under30" not in form_data:
                flash("Under 30 minutes required.", 'new')
                is_valid = False
        return is_valid