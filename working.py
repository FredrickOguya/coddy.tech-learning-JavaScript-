"""
inpu = 5
no =1
for i in range (1,inpu+1):
    no*=i
print(no)

def values(lst):
    # Write code here
    num = len(lst)
    for i in range(num):
        print(lst[i])
values([5, 9, 2, 10, 2])

def merge(lst1, lst2):
    # Write code here
    num = len(lst2)
    for i in range(lst1):
        lst2.append(lst1[i])
        lst2.sort()
        return lst2

def reverse(lst):
    # Write code here
    new_lst  = []
    for i in range(len(lst)-1,0,-1):
        new_lst.append(lst[i])
    print(new_lst)
reverse([1, 2, 3])



def print_pyramid(n):
    for i in range(1, n + 1, 2):
        spaces = " " * ((n - i) // 2)
        stars = "*" * i
        print(spaces + stars + spaces)
print_pyramid(5)

There are other built-in functions just like print() and len() that we haven't covered yet.

One of them is the is sum() that calculates the sum of a list:

lst = [1, 2, 3, 4]
print(sum(lst))
Will output: 10 because 1+2+3+4=10

To calculate the average without using any build-in function we can sum all of the items and divide them by the number of items in the list:

total = 0
for i in range(len(lst)):
    total += lst[i]
average = total/len(lst)
Another way to calculate the average is by using the sum() function:

average = sum(lst)/len(lst)

Challenge

Medium
Create a function named whatToBuy that receives four arguments:

First argument is a list of numbers that indicate the price of a construction item
Second argument is a list of numbers that indicates the quantity of each construction item
Third argument is a number indicating the total price allowed for each item
Fourth argument is a list of construction names
The function calculates, for each item, the total price required to buy it. The total price for each item is calculated like this:

(quantity * price) / (average_quantity * average_price)
The function will return a list of two elements:

The first element is a sorted list of all the construction names whose total price is smaller than the restriction (third argument).
The second element is a number, which indicates how many construction items removed

Hints

Hint 1
Revealed

Notice the edge case of no items at all, handle it using a simple if:

if len(prices) == 0:
    return [[], 0]
"""    
def whatToBuy(price,quantity,totalPrice,constructionItems):
    if len(price)== 0:
        print([[],0]) 
    else:
        averageQuantity = sum(quantity)/len(quantity)
        averagePrice = sum(price)/len(price)
        averageList =[]
        total_price_average = []
        for i in range(len(price)):
            total_price_average.append((price[i]*quantity[i])/(averageQuantity * averagePrice))
            if total_price_average[i]<totalPrice:
                averageList.append(constructionItems[i])
        removed = len(constructionItems)- len(averageList)
        averageList.sort()
        print([averageList,removed])



whatToBuy(
[5, 2, 9, 3, 1, 2, 9],
[1, 1, 1, 1, 6, 6, 6],
0.5,
['pencil', 'bottle', 'wallet', 'phone', 'toy', 'mouse', 'door']

)