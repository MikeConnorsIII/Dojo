@classmethod
def get_all(cls)
query = """
    SELECT * FROM awards JOIN dogs ON dogs.id = awards.dog_id;
"""

results = connecttomySQL(DATABASE).query_db(query)

all_rewards