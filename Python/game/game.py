from game_classes import Barbarian
from game_classes import Cleric
import random

barb = Barbarian("Conan")
cler = Cleric("Bob")

print("You are the barbarian, you approach a cleric.")
while barb.health > 0 and cler.health > 0:
    response = ""
    while not response =="1" and not response =="2":
        response = input("What do? 1) attack 2) REALLY ATTACK")
        print(response)
    if response == "1":
        barb.attack(cler)
    elif response == "2":
        barb.beserker_rage(cleric)
    else:
        print("Please choose a valid option")
        dice_roll ==1:
        cler.attack(barb)
    else:
        cler.heal
