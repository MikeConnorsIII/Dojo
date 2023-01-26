#object? an instance of a class that comers with the attributes ( describes values ) and methods (things an object can do)
#that are described in the class 
#Class? template . blueprint for our instancves / objects -- custom data type


dog_1 = {
    'name' : 'Mochi' , 
    'age' : '3',
    'breed' : "malti poo"
}

dog_2 = { 
    'name' : 'Paloma' , 
    'age' : '2',
    'breed' : "jack russel"
}
#attributes are the describing factors of an object
class Dog:
    all_dogs = []
    # def __init__(self,name,age,breed):
        # self.name = name
        # self.age = age
        # self.breed = breed
#you can come back without breaking code with pass
        def __init__(self, dict, roomate):
            self.name = dict['name']
            self.age = dict['age']
            self.breed = dict['breed']
            self.roomate = Human(roomate.name)
            Dog.all_dogs.append(self)

        def bark(self):
            print(f"{self.name} makes a loud bork!")
            return self

        def birthday(self):
            self.age = self.age +1
            # self.age += 1
            print(f"{self.name} gets a year older! They are now {self.age} years old!")
            return self

        def __repr__(self):
            return f"{self.name} is a dog object {self.breed}"

        def greet_roomate(self):
            if self.roomate == None:
                print("The dog looks around, doesn't see anyone.")
            print(f"{self.name} approaches {self.roomate.name}")
            self.roomate.say_hello()

        @classmethod
        def bark_party(cls):
            for one_dog in cls.all_dogs:
                one_dog.bark()

        @staticmethod
        def convert_years_to_dog_years(years):
            return years * 7

        @staticmethod
        def is_valid(dictionary):
            is_valid = True 
            if dictionary['name'] == ""
                is_valid = False
            return is_valid
        #this will make sure 
class Human:
    def __init__(self, name):
        self.name = name

        def say_hello(self):
        print("Hello, my name is {self.name}")

Dog.bark_party()
if.Dog.is_valid(dog_1):
    dog5 = Dog(dog_1)
independent_dog = dog.greet_roomate()

# dog_3 = Dog(dog_1)
# dog_4 = Dog(dog_2)
# print(dog_3.name)
# print(dog_4.name)

# dog_3.bark().bark().bark().birthday().bark()
# dog_3.birthday()

me = Human("Spencer")#you have to move this above the creation of the dog in order for it to be netered
dog_3.roomate = me
print(dog_3.roomate.name)