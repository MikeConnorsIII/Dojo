num1 = 42 #this is an integer (primitive)

num2 = 2.3 #this is a float (primitive)

boolean = True #this is a  boolean value (Primitive)

string = 'Hello World' #this is a  string value (Primitive)
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #this is a List value (Composite)
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #this is a dictionary value (Composite)
fruit = ('blueberry', 'strawberry', 'banana') #this is a tuple value (Composite)
print(type(fruit)) #this is a command to print datatype of fruit
print(pizza_toppings[1])#this is a command to print the 1 index of pizza_toppings, which would be Sausage
pizza_toppings.append('Mushrooms') #This command will add Mushrooms to the List at the end
print(person['name']) #This command would call for the data labeled within Name which would be John
person['name'] = 'George'#This would replace John with George
person['eye_color'] = 'blue'#This is a dictionary entry
print(fruit[2])#this would print banana, it is asking for the index 2 of the variable fruit

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")#This function would print It's greater if num1 is bigger than 45 and It's lower if it is less than 45

if len(string) < 5: 
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!") # this is checking the length attribute of a word and printing the result

for x in range(5): #1 to 5
    print(x)
for x in range(2,5): #2 3 4 5
    print(x)
for x in range(2,10,3): #2 to 10 and increments by 3
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1 #this funtion counts from 0 to 5

pizza_toppings.pop()#removes the last item in the list
pizza_toppings.pop(1)#removes the index in position 1 

print(person)
person.pop('eye_color') #removes eye colors from the dictionary of person
print(person)

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break  #this function will print all but the last of the text in the array

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times() #this is a function which will say hello 10 times

def print_hello_x_times(x):
    for num in range(x):
        print('Hello') #this function will let you put how many ti9mes you want it to say hi if you replace x with a integer

print_hello_x_times(4) #this will print hello 4 times

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3) #this will print none as num3 is undefined
# num3 = 72 #this assigns num3 a value of 72
# fruit[0] = 'cranberry'#this will replace blueberry with cranberry 
# print(person['favorite_team']) # this is undefined and should return none. 
# print(pizza_toppings[7])#this will come back as undefined
#   print(boolean)#this will print True
# fruit.append('raspberry')#this will add raspberry tyo the end of the array
# fruit.pop(1)# this will remove strawberry from the array. 