class User():
    def __init__(self, firstname, lastname, email, age) -> None:
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.age = age
        self.rewardsmem = False
        self.points = 0

    def display(self):
        print(f"Name: {self.firstname}")
        print(f"Last name:{self.lastname}")
        print(f"Email: {self.email}")
        print(f"Age:{self.age}")
        print(f"Member:{self.rewardsmem}")
        print(f"Points:{self.points}\n")
        return self
    
    def enroll(self):
        if self.rewardsmem == True:
            print("Is already a member")
        else:
            self.rewardsmem = True
            self.points = 200
        return self
    
    def spend_points(self, amount):
        if self.points > amount:
            print("You don't have enough points!")
        else:
            self.points -= amount
        return self

user1 = User("Matt","Parsons","mp@gmail.com",26)
user2 = User("Mike","Connors","MC@gmail.com",27)
user3 = User("George","Clayson","GC@gmail.com",25)
print(user1.display())
user1.enroll()
user1.display()
# user1.display().enroll().display()
user1.spend_points(50).display()
user1.spend_points(50).display()
user2.enroll().spend_points(80)
user1.display()
user2.display()
user3.display().spend_points(100)
user1.enroll()
