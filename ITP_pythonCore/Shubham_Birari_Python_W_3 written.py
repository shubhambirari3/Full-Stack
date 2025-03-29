
     
	#  Shubham Birari(ITPM python )
	 
	#  Python test 3



## 1. Create a class BankAccount with the following:
#•	A private attribute _balance.
#•	Public methods deposit, withdraw, and get_balance to manipulate and access the balance securely.
#•	Prevent direct access to the balance and ensure only the provided methods can modify or retrieve it.

class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number  
        self.__balance = balance  

    
    def get_balance(self):
        return self.__balance

    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}. New balance: {self.__balance}")
        else:
            print("Invalid deposit amount")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew {amount}. Remaining balance: {self.__balance}")
        else:
            print("Invalid withdrawal amount")

account = BankAccount("123456789", 1000)


print("Balance:", account.get_balance())  


account.deposit(500) 


account.withdraw(200)

try:
    account.__balance
except Exception as e:
    print("Restrict the accsess of balance : " , e)
	
	
## 2. Create two classes Dog and Cat, both of which have the same method speak. 
#Use polymorphism to call the speak method of each object dynamically.
# Additionally, write a function that accepts any object with a speak method and calls it, demonstrating polymorphism in action.
 
 
class Animal:
     def speak(self):
	     return "some sound"
		
class Dog(Animal):
     def speak(self):
	     return "dog sound"
		 
class Cat(Animal):
     def speak(self):
	     return "cat sound"
		 
def animal_speak(animal):
    print(animal.speak())
	
sheru = Dog()
mau = Cat()

animal_speak(sheru)
animal_speak(mau)

##6.Create a Parent class with an __init__ method. Use super() in the child class to call the parent constructor.

class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
class ElectricCar(Car):
    def __init__(self,brand ,model , year, battery_type ):
        super().__init__(brand,model)
        self.year = year
        self.battery_type = battery_type\
		
Ev1 = ElectricCar("tata" , "nexon",2024 , "30kw" )

Ev1.brand


##8. Create a parent class Shape with a method display_area. Derive Rectangle and Circle classes, and override the display_area method to calculate specific areas.

class Shape:
    def area(self, radius, width=None):
        if width is None:  
            print("Area of  circle:",3.14*radius*radius)
        else:  
            print("Area of  rectangle:",radius * width)

shape = Shape()
shape(5)    # area of circle
shape(4,5)  #area of rec

# 3. Create a program that performs division. Handle the following scenarios:
# 1.	Division by zero (ZeroDivisionError).
# 2.	Invalid input type, such as trying to divide a string by a number (ValueError).

def divide_numbers():
    try:
        num1 = float(input("Enter the numerator: "))
        num2 = float(input("Enter the denominator: "))
        result = num1 / num2
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")
    except ValueError:
        print("Error: Invalid input. Please enter numeric values.")
    else:
        print(f"Result: {result}")

divide_numbers()

#7.Create an abstract class Animal using the abc module, and implement concrete methods in subclasses Lion and Tiger

from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Lion(Animal):
    def speak(self):
        return "Roar"

class Tiger(Animal):
    def speak(self):
        return "tiger sound "

# Creating instances and calling their speak methods
lion = Lion()
tiger = Tiger()

print(lion.speak())  
print(tiger.speak())  


 # 4. Create a function to find area of Circle and Rectangle and display the output..

def area(radius_length,width=None):
   if width is None:  
                   print("Area of  circle:",3.14*radius_length*radius_length)
   else:  
         print("Area of  rectangle:",radius_length * width)
		 
area(4) #area of circle
area(3,4)  #area of rec
   
#5.Write a program to create a class Hybrid that inherits from ElectricCar and GasCar.

class ElectricCar:
    def __init__(self, battery_capacity):
        self.battery_capacity = battery_capacity

class GasCar:
    def __init__(self, fuel_tank_capacity):
        self.fuel_tank_capacity = fuel_tank_capacity

class Hybrid(ElectricCar, GasCar):
    def Hybrid_info(self):
        print(f"This hybrid car has a battery capacity of {self.battery_capacity} kWh and a fuel tank capacity of {self.fuel_tank_capacity} liters.")

car = Hybrid(50, 40)
car.Hybrid_info()


#10.Write a Python program to demonstrate data abstraction using the abc module.

from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Lion(Animal):
    def speak(self):
        return "Roar"

class Tiger(Animal):
    def speak(self):
        return "tiger sound "

lion = Lion()
tiger = Tiger()

print(lion.speak())  
print(tiger.speak())

 