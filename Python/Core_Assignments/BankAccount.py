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


user1 = BankAccount(.01,500)
user2 = BankAccount(.01,1000)
# user1.display_account_info()
# user1.yield_interest().display_account_info()
# user2.display_account_info()
user1.deposit(50).deposit(1000).deposit(150).withdraw(500).yield_interest().display_account_info()
user2.deposit(50).deposit(1000).withdraw(10).withdraw(20).withdraw(40).withdraw(90).yield_interest().display_account_info()
BankAccount.All_accounts_info()