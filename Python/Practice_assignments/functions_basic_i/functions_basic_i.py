#1
# def number_of_food_groups():
#     return 5
# print(number_of_food_groups()) #this will return 5



#2
# def number_of_military_branches():
#     return 5
# print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches()) 
# #this will not do anything because the first two functions are not defined
#correct


# #3
# def number_of_books_on_hold():
#     return 5
#     return 10
# print(number_of_books_on_hold()) 
# #this will print 5 because the return tells the function to end
# #correct

#4
# def number_of_fingers():
#     return 5
#     print(10)
# print(number_of_fingers())
#same as above, will return 5
# correct



# # #5
# def number_of_great_lakes():
#     print(5)
# x = number_of_great_lakes()
# print(x)
#this will print 5
#it also printed none

#6
# def add(b,c):
#     print(b+c)
# print(add(1,2) + add(2,3))
#this will print 3 + 5
#result was a type error



# # #7
# def concatenate(b,c):
#     return str(b)+str(c)
# print(concatenate(2,5))
# i believe this will print 7
#it actually returned 25, so it did not do any addition, it made the two seperate numbers into one number


# #8
# def number_of_oceans_or_fingers_or_continents():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(number_of_oceans_or_fingers_or_continents())
#this will first print 100, then print 10
#correct


#9
# def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
# print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
# print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
# #this should print 
# """
# 7
# 14
# 7 14
# """
#the third line was 21, which meant it added 14 and 7 together. I believe the add up above messed with the code.


# #10
# def addition(b,c):
#     return b+c
#     return 10
# print(addition(3,5))
# """
# this should print 8
# and it did
# correct
# """


#11
# b = 500
# print(b)
# def foobar():
#     b = 300
#     print(b)
# print(b)
# foobar()
# print(b)
# """
# 500
# 500
# 300
# 500
# is my prediction

# and it was correct
# """


#12
# b = 500
# print(b)
# def foobar():
#     b = 300
#     print(b)
#     return b
# print(b)
# foobar()
# print(b)
# """
# 500
# 500
# 300
# 300
# 500
# is my prediction
# and there was only one 300 printed. I suspect it is because the return did not print anything
# """


#13
# b = 500
# print(b)
# def foobar():
#     b = 300
#     print(b)
#     return b
# print(b)
# b=foobar()
# print(b)
# '''
# 500
# 500
# 300
# is my prediction
# b was reassigned to be 300 so it should have been called twice


# '''

#14
# def foo():
#     print(1)
#     bar()
#     print(2)
# def bar():
#     print(3)
# foo()
# '''
# this will print
# 1
# 3
# 2
# and it did
# '''

# #15
# def foo():
#     print(1)
#     x = bar()
#     print(x)
#     return 10
# def bar():
#     print(3)
#     return 5
# y = foo()
# print(y)
# '''
# this will print 
# 1
# 3
# 5
# 10
# and it did
# '''