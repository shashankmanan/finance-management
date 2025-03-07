from flask import Flask , jsonify
import pandas 

app = Flask(__name__)

@app.route("/stocks")
def get_stocks_and_etfs():
    path = "backend\stocksandetfs.xlsx"
    file = pandas.read_excel(path)

    processed = []
    
    for i in file.iterrows():
        string = str(i[1])
        lst = list(string.split())
    
        transaction = {
            "type" : lst[1] ,
            "name" : lst[3] ,
            "quantity": lst[5] ,
            "buy-price" : lst[7] ,
            "buy-amt" : lst[11] ,
            "buy-date" : lst[25] ,
        } 
    processed.append(transaction)
    return jsonify(processed)

if __name__ == "__main__":
    app.run(debug=True)