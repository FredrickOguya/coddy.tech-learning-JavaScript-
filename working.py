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
"""
def reverse(lst):
    # Write code here
    new_lst  = []
    for i in range(len(lst)-1,0,-1):
        new_lst.append(lst[i])
    print(new_lst)
reverse([1, 2, 3])