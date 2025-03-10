import requests
import matplotlib.pyplot as plt
# python -u "c:\Users\Shashank\Desktop\Finvestory\frontend\src\AnalyticsMonkey\visualize\overall.py"

routes = {
    "GET_ALL_STOCKS" : "http://localhost:5004/api/transaction/stocks/purchased" ,
    "GET_ALL_ETFS" : "http://localhost:5004/api/transaction/etfs/purchased" ,
    "GET_ALL_MFS" : "http://localhost:5004/api/transaction/mfs/purchased"
}

request = requests.get(routes.get("GET_ALL_STOCKS"))
stocks_list = request.json().get("stocks_list")

request = requests.get(routes.get("GET_ALL_ETFS"))
etfs_list = request.json().get("etfs_list")

request = requests.get(routes.get("GET_ALL_MFS"))
mfs_list = request.json().get("mf_list")



def portfolio_divide():
    stocks_invested = sum(stock.get("invested_amt", 0) for stock in stocks_list)
    etfs_invested = sum(etf.get("invested_amt", 0) for etf in etfs_list)
    mfs_invested = sum(mf.get("invested_amt", 0) for mf in mfs_list)
    investments = [stocks_invested, etfs_invested,mfs_invested]
    labels = ["Stocks", "ETFs","MFs"]
    colors = ["blue", "green","red"]
    plt.figure(figsize=(6, 6))
    plt.pie(investments, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, shadow=True)
    plt.title("Portfolio Investment Distribution")
    try:
        plt.savefig("overall_portfolio_invesment_distri.png")
        print("Plot saved successfully!")
    except Exception as e:
        print(e)
    plt.show()

def show_all_divide():
    all_investments = stocks_list + etfs_list + mfs_list

    investment_names = [inv["name"] for inv in all_investments]
    investment_amounts = [inv["invested_amt"] for inv in all_investments]

    plt.figure(figsize=(10, 10))
    plt.pie(investment_amounts, labels=investment_names, autopct="%1.1f%%", startangle=140, 
        colors=plt.cm.Paired.colors, wedgeprops={"edgecolor": "black"})

    plt.title("Portfolio Distribution by Individual Investments")
    plt.axis("equal")  # Equal aspect ratio ensures the pie chart is circular.

    plt.savefig("individual_portfolio_pie_chart.png", dpi=300)
    plt.show()
    try:
        plt.savefig("individual_portfolio.png")
        print("Plot saved successfully!")
    except Exception as e:
        print(e)
    plt.show()

portfolio_divide()