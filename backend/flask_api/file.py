import pandas 

path = "backend\stocksandetfs.xlsx"
file = pandas.read_excel(path)

processed = []
processed_json = {}
for i in file.iterrows():
    string = str(i[1])
    lst = list(string.split())
    # print(lst)
    transaction = {
        "type" : lst[1] ,
        "name" : lst[3] ,
        "quantity": lst[5] ,
        "buy-price" : lst[7] ,
        "buy-amt" : lst[11] ,
        "buy-date" : lst[25] ,
    } 
    processed.append(transaction)

print(processed)
