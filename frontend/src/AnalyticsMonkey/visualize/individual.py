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


# Function to generate a pie chart
def generate_pie_chart(investment_list, title, filename):
    if not investment_list:
        print(f"No data available for {title}. Skipping chart.")
        return
    
    # Extract names and investment amounts
    investment_names = [inv["name"] for inv in investment_list]
    investment_amounts = [inv["invested_amt"] for inv in investment_list]

    # Create Pie Chart
    plt.figure(figsize=(8, 8))
    plt.pie(investment_amounts, labels=investment_names, autopct="%1.1f%%", startangle=140, 
            colors=plt.cm.Paired.colors, wedgeprops={"edgecolor": "black"})

    plt.title(title)
    plt.axis("equal")  # Equal aspect ratio ensures a circular pie chart

    # Save & Show Plot
    plt.savefig(filename, dpi=300)
    plt.show()

# Function to generate pie chart for stocks
def generate_stocks_pie_chart():
    stocks_list = fetch_data(routes.get("GET_ALL_STOCKS"))
    generate_pie_chart(stocks_list, "Stock Portfolio Distribution", "stocks_pie_chart.png")

# Function to generate pie chart for ETFs
def generate_etfs_pie_chart():
    generate_pie_chart(etfs_list, "ETF Portfolio Distribution", "etfs_pie_chart.png")

# Function to generate pie chart for Mutual Funds
def generate_mfs_pie_chart():
    generate_pie_chart(mfs_list, "Mutual Fund Portfolio Distribution", "mfs_pie_chart.png")

#generate_stocks_pie_chart()
#generate_etfs_pie_chart()
#generate_mfs_pie_chart()

from collections import defaultdict

# Function to group stocks by category (sector)
def group_stocks_by_sector(stocks_list):
    sector_investments = defaultdict(float)  # Dictionary to store total investment per sector
    
    for stock in stocks_list:
        sector = stock["category"]  # Directly using the 'category' field
        sector_investments[sector] += stock["invested_amt"]

    return sector_investments

# Function to generate a pie chart
def generate_sector_pie_chart(sector_investments):
    if not sector_investments:
        print("No data available for stock sectors. Skipping chart.")
        return
    
    sectors = list(sector_investments.keys())
    investments = list(sector_investments.values())

    # Create Pie Chart
    plt.figure(figsize=(9, 9))
    plt.pie(investments, labels=sectors, autopct="%1.1f%%", startangle=140, 
            colors=plt.cm.Set3.colors, wedgeprops={"edgecolor": "black"})

    plt.title("Stock Portfolio Distribution by Sector")
    plt.axis("equal")  # Ensure the pie is a circle

    # Save & Show Plot
    plt.savefig("stocks_sector_pie_chart.png", dpi=300)
    plt.show()

# Main function to generate sector-wise pie chart
def generate_stocks_by_sector_chart():
    sector_investments = group_stocks_by_sector(stocks_list)
    generate_sector_pie_chart(sector_investments)


generate_stocks_by_sector_chart()

