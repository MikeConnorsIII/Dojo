class BankAccount:
    Acts = []
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.Acts.append(self)

        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
        # your code here
    def display_account_info(self):
        print("-----------------")
        print(f"Your balance is {self.balance}\n")
        return self
        # your code here
    def yield_interest(self):
        self.balance = self.int_rate * self.balance + self.balance
        return self
        # your code here
    @classmethod 
    def All_accounts_info(cls):
        print("Printing all bank accounts!\n")
        for users in cls.Acts:
            users.display_account_info()


# user1 = BankAccount(.01,500)
# user2 = BankAccount(.01,1000)
# user1.display_account_info()
# user1.yield_interest().display_account_info()
# user2.display_account_info()
# user1.deposit(50).deposit(1000).deposit(150).withdraw(500).yield_interest().display_account_info()
# user2.deposit(50).deposit(1000).withdraw(10).withdraw(20).withdraw(40).withdraw(90).yield_interest().display_account_info()
# BankAccount.All_accounts_info()

class User:
    BA = []
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = [
            {
                "Checking":BankAccount(int_rate=.02,balance=0)
            }
        ]
        #try to create
        # BankAccount{(int_rate=0.02, balance=0)}
    
    # other methods
    def create_account(self,name,int_rate,balance):
        self.account[0]['Checking'].append({name:BankAccount(int_rate,balance)})
    def make_deposit(self, amount):
        self.account[0]['Checking'].deposit(amount)
        return self
    def make_withdraw(self, amount):
        self.account[0]['Checking'].withdraw(amount)
        return self
    def make_display(self):
        self.account[0]['Checking'].display_account_info()
        return self
# your code here

user1 = User("Mike", "rch@gmail.com")
# user1.make_display()
user1.make_deposit(100)
user1.make_display()
user1.make_withdraw(20)
# user1.make_display()

"""
SENSEI BONUS: Allow a user to have multiple accounts; update methods so the user has to specify which account 
they are withdrawing or depositing to

SENPAI BONUS: Add a transfer_money(self, amount, other_user) method to the user class that takes an amount and a 
different User instance, and transfers money from the user's account into another user's account.
"""