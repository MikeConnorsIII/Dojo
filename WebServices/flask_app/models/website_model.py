# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model
import re

class Website:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.type = data['type']
        self.name = data['name']
        self.priorities = data['priorities']
        self.pages = data['pages']
        self.mobile = data['mobile']
        self.hosting = data['hosting']
        self.content = data['content']
        self.services = data['services']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
        INSERT INTO websites (type, name, pages, priorities, user_id, mobile, hosting, content, services)
        VALUES (%(type)s, %(name)s, %(pages)s, %(priorities)s, %(user_id)s, %(mobile)s, %(hosting)s, %(content)s, %(services)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = """
        UPDATE websites SET type = %(type)s, name = %(name)s, pages = %(pages)s, priorities = %(priorities)s, mobile = %(mobile)s, mobile = %(mobile)s, hosting = %(hosting)s, content = %(content)s, services = %(services)s
        WHERE websites.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
        DELETE FROM websites WHERE id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get1(cls, data):
        query = """
            SELECT * 
            FROM websites 
            LEFT JOIN users 
            ON websites.user_id = users.id
            WHERE websites.id = %(id)s
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if results: 
            for row in results:
                this_website = cls(results[0])
                user_data = {
                    **row,
                    'id' : row['users.id'],
                    'created_at' : row['users.created_at'],
                    'updated_at' : row['users.updated_at']
                }
                this_user = user_model.User(user_data)
                this_website.creator = this_user
                
            return this_website
            
            
        return False

    @classmethod
    def get_all(cls):
        query = """ SELECT * 
                    FROM websites 
                    JOIN users 
                    ON websites.user_id = users.id;"""
        print(query)
        
        # 
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of friends
        all_websites = []
        # Iterate over the db results and create instances of friends with cls.
        for row in results:
            this_website = cls(row)
            user_data = {
                **row,
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at']
            }
            this_user = user_model.User(user_data)
            this_website.creator = this_user
            all_websites.append(this_website)
        return all_websites


    # @staticmethod
    # def validator(form_data):
    #     is_valid = True
    #     if len(form_data['type']) < 1:
    #             flash("type must be at least 2 characters", 'new')
    #             is_valid = False
    #     if len(form_data['name']) < 1:
    #             flash("name required", 'new')
    #             is_valid = False
    #     if  form_data['pages'] == '0':
    #             flash("How many pages would you like your website?", 'new')
    #             is_valid = False
    #     if  len(form_data['pages']) < 1:
    #             flash("Please select how many pages you would like!", 'new')
    #             is_valid = False
    #     if len(form_data['date']) < 1:
    #             flash("date required", 'new')
    #             is_valid = False
    #     return is_valid