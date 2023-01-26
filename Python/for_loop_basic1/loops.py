#Loops

#For Loops

#for _____ in ____:
#first blank is out iterative variable, will be different for collections
#

#second blank is the collection we are iterating over
#range is a function that returns a sequence of numbers
# range(start, stop, step)
#start - - the number we will begin at INCLUSIVE
#stop -- the number we will stop at EXLUSIVE
#step -- increment value can be + or -

# for number in range(1,11,2):
#         print(number)

our_list = ['gyrados' , 'vulpix' , 'ninetails' , 'pikachu']
our_string = "pokemon"
# for one_pokemon in our_list:
#     one_pokemon = "Gengar"
#     print(one_pokemon)
# print(our_list)

for i in range(len(our_list)):
    print(our_list[i])
    our_list[i] = "ditto"
print(our_list)

for char in our_string:
    print(char)

cat1 = {
    'name' : 'Cinnamon', 
    'age' : 2,
    'color' : 'orange'
}
cat2 = {
    'name' : 'Meow', 
    'age' : 2,
    'color' : 'black'
}
for key in cat1:
    print(key, cat1[key])

for val in cat1.values():
    print(val)

for key,val in cat1.items():
    print(key, val)

cat_list = [cat1,cat2]

for one_cat in cat_list:
    for key in one_cat:
        print(f"{key} - {one_cat[key]}")

print(cat_list[1]['name'])
#While 
"""
while condition:
    logic that works towards invalidating the condition
"""
x = 5
while x > 0:
    print("Hello")
    x-= 1