"""
Basic - Print all integers from 0 to 150.

Multiples of Five - Print all the multiples of 
5 from 5 to 1,000

Counting, the Dojo Way - Print integers 1 to 100. 
If divisible by 5, print "Coding" instead. 
If divisible by 10, print "Coding Dojo".

Whoa. That Sucker's Huge - 
Add odd integers from 0 to 500,000, 
and print the final sum.

Countdown by Fours - Print positive numbers 
starting at 2018, counting down by fours.

Flexible Counter - Set three variables: 
lowNum, highNum, mult. Starting at lowNum 
and going through highNum, 
print only the integers that are a 
multiple of mult. 
For example, if lowNum=2, highNum=9, and mult=3, 
the loop should print 3, 6, 9 (on successive lines)

"""

#1

for i in range(151):
    print(i)

#2 

for i in range(5, 1000, 5):
    print(i)

#3 

for i in range(1,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)

#4 

num=500000
total = sum(range(1,num+1,2))
print(total)

#5
for i in range(2018, 0, -4):
    print(i)

#6
def counter(lowNum, highNum, mult):
    for i in range(lowNum, highNum+1):
        if i % mult == 0: 
            print(i)

print(counter(2,9,3))

"""
Flexible Counter - Set three variables: 
lowNum, highNum, mult. Starting at lowNum 
and going through highNum, 
print only the integers that are a 
multiple of mult. 
For example, if lowNum=2, highNum=9, and mult=3, 
the loop should print 3, 6, 9 (on successive lines)
"""