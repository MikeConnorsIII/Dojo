x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# Change the value 10 in x to 15. Once you're done, x should now be
# [ [5,2,3], [15,8,9] ].
x[1][0] = 15
# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]["last_name"] = "Bryant"
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'
# Change the value 20 in z to 30
z[0]['y'] = 30
#----------------------------------------------------------------------------------
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(some_list): 
    for students in some_list:
        for key,value in students.items():
            if key == 'first_name':
                print(f"{key} - {value}", end=", ")
                
            else:
                print(f"{key} - {value}")
# iterateDictionary(students)

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

def iterateDictionary2(key_name, some_list):
    for dictionary in some_list:
        if key_name in dictionary: 
            print(dictionary[key_name])
# iterateDictionary2('last_name' , students)
# -----------------------------------------------------------------
# DOJO DICTIONARY Keys: Location, Instructors - we added studednts for additional context
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon'], 
   'students': ['Mike', 'Max', 'Spencer']
}

#Method  printInfo(some_dict)
def printInfo(some_dict):
    for some_key in some_dict: #some key is i in js, 
        print( f"{len(some_dict[some_key])} {some_key.upper()}")
        for some_value in some_dict[some_key]: #some value is going to be the value of the list inside our dictionary
            print(some_value)
        print()
        
# calling printInfo() passing in the dictionary 'dojo' as some_dict
printInfo(dojo)

# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon





