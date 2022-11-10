from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("./home/home.html")

@app.route("/open_account")
def cadastro():
    return render_template("./cadastro/open_account.html")

@app.route("/adm")
def dashboard_adm():
    return render_template("./adm/index_adm.html")

@app.route("/user")
def dashboard_user():
    return render_template("./user/index_user.html")

@app.route("/user/contatos")
def contatos():
    return render_template("./user/contatos.html")

@app.route("/user/extrato")
def extrato():
    return render_template("./user/extrato.html")

if __name__ == '__main__':
    app.run(debug=True)