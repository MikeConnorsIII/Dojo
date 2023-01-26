x = 10
if x > 50: 
    print("bigger than 50")
else:
    print("smaller than 50")
    x += 1

# this is a comment

"""
This is a comment on multiple lines
"""

#variables ? = Something that stores a value, a bucket with a label on it. 

snake_case = "All lower case, seperated by underscors"
GLOBAL_VAR = "All caps" 
#class names will be pascal case ie HumanClass

#Datatypes

#Primitive
#integer/float -- number
integer = 8
float_num = 8.6

#string
string = "A collection of characters"
format_string = f"We can inject variables {integer}"
#concat_str = "Can we do this" + integer
#print(concat_str)
print(format_string)
#boolean

bool1 = True
bool2 = False

#Composite

#Lists -- what we call arrays in js
list = [1,2,3,4,5,6]
    #   0 1 2 3 4 5 
val = list[5] = 100
print(list)
#Literally Indexted Single thing
#list functions
len(list) #returns the Length
min(list)
max(list)

#list methods
list.append(1337)
print(list)
list.pop(2) #pop will remove by index
print(list)
list.remove(100) #will remove by value
list.sort(reverse=True)
print(list)

#dictionaries
#Don't index, Coupled Things
#Key Value Pairs
dog_dict = {
    'name' : 'Wiley', 
    'age' : 3,
    'breed' : "Pitbull"
}
print(dog_dict)
name = dog_dict['name']
print(name)
#if *key* in *dictionary*:
if "name" in dog_dict:
    print(f"The dogs name is {dog_dict['name']}")
if "size" in dog_dict:
    print(f"The dogs name is {dog_dict['size']}")
else:
    print("Size not found")

dog_dict['size'] = "big boi"

#removing from a dict
del dog_dict['age']
breed = dog_dict.pop('breed')
dog_dict.clear()

#tuples
#immutable List? Cannot be changed
tup = (1,2,3,5)

#tup[3] = 128736 #cannot do this causes an error

#if
#else
#elif

x = 8 

if x == 5:
    print("x is 5")
elif x > 5:
    print("x is big")
else:
    print("x is small")

    """
    py       js 
    ==       ===
    none     null
    not      !
    or       |
    and      &&
    is <-------- is is used to check if both operands are the same object
    """
'''
string.upper(): returns a copy of the string with all the characters in uppercase.
string.lower(): returns a copy of the string with all the characters in lowercase.
string.count(substring): returns number of occurrences of substring in string.
string.split(char): returns a list of values where string is split at the given character. Without a parameter the default split is at every space.
string.find(substring): returns the index of the start of the first occurrence of substring within string.
string.isalnum(): returns boolean depending on whether the string's length is > 0 and all characters are alphanumeric (letters and numbers only). Strings that include spaces and punctuation will return False for this method. Similar methods include .isalpha(), .isdigit(), .islower(), .isupper(), and so on. All return booleans.
string.join(list): returns a string that is all strings within our set (in this case a list) concatenated.
string.endswith(substring): returns a boolean based upon whether the last characters of string match substring.
'''