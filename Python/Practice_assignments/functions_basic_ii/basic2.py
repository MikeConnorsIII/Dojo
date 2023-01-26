#1
# def down0(peach):
#     New_list = []
#     for i in range(peach , -1 , -1):
#         New_list.append(i)
#         print(i)
#     return New_list
# print(down0(76))

#2
# def pandr(x = []):
#     if len(x) == 2:
#         print(x[0])
#         return x[1]

# v = pandr([1,2,3,4,5,6])
# print(v)

#3 
# def firstpluslength(x = []):
#     sum = x[0] + x[len(x) - 1]
#     return sum
# print(firstpluslength([3,4,5,6,7,8,9]))

#4
# def greaterthantwo(List = []):
#     filteredList = []
#     values = 0
#     if len(List) < 2:
#         return False
#     for i in range(len(List)):
#         if List[i] > List[1]:
#             filteredList.append(List[i])
#             values += 1
#     print(values)
#     return filteredList

# print(greaterthantwo([3,2,5,6,7,8,1]))

# def lengthandvalue(size,value):
#     List = []
#     for i in range(size):
#         List.append(value)
#     return List

# print(lengthandvalue(7,1))