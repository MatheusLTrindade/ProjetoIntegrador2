from flask import Flask, render_template
import pandas as pd
import json
import plotly
import plotly.express as px

import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("./home/home.html")

@app.route("/login")
def login():
    return render_template("./login/login.html")

@app.route("/open_account")
def cadastro():
    return render_template("./cadastro/open_account.html")

@app.route("/user")
def dashboard_user():
    return render_template("./user/index_user.html")

@app.route("/user/contatos")
def contatos():
    return render_template("./user/contatos.html")

@app.route("/user/extrato")
def extrato():
    return render_template("./user/extrato.html")

@app.route("/user/analytics")
def analytics_user():
    return render_template("./user/analytics_user.html")

@app.route("/adm")
def dashboard_adm():
    return render_template("./adm/index_adm.html")

@app.route("/adm/clientes")
def clientes():
    return render_template("./adm/clientes.html")

@app.route("/adm/ordens")
def ordens():
    return render_template("./adm/ordens.html")

@app.route("/adm/analytics")
def analytics_adm():

    #
    df = pd.DataFrame({
      'Fruit': ['Apples', 'Oranges', 'Bananas', 'Apples', 'Oranges', 
      'Bananas'],
      'Amount': [4, 1, 2, 2, 4, 5],
      'City': ['SF', 'SF', 'SF', 'Montreal', 'Montreal', 'Montreal']
    })
    fig = px.bar(df, x='Fruit', y='Amount', color='City', 
      barmode='group')
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

    # grafico pizza
    df2 = px.data.tips()
    fig2 = px.pie(df2, values='tip', names='day', color='day',
             color_discrete_map={'Thur':'lightcyan',
                                 'Fri':'cyan',
                                 'Sat':'royalblue',
                                 'Sun':'darkblue'})
    graphJSON2 = json.dumps(fig2, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template("./adm/analytics-adm.html", graphJSON=graphJSON, graphJSON2=graphJSON2)

if __name__ == '__main__':
    port = int(os.getenv('PORT'), '5000')
    app.run(debug=True,host='0.0.0.0', port = port)
