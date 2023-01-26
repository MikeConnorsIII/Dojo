#what is a function 
#set of instructions that can be called
#they may take in parameters
#they will always return something -- even if it's none

def say_hello(times=3,name="Bob"):
    for i in range(times):
        print(f"Hello {name}")

say_hello(5,"Mike")

#default parameters
#must come after non-defaulted params
#named arguments
say_hello(name="Bob",times=5)
