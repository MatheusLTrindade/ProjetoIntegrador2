import datetime

import pandas as pd
from utils.data import user
from config import App
import json
from utils.chart import chart_user
import plotly
import plotly.express as px
from plotly.graph_objs import *
db = App().get_db()
# engine = db.create_engine("mysql://root:root123@localhost/jm_banco")

def get_chart_user_historico_movimentacoes(cpf):
    engine =  db.get_engine()
    conta = user.get_conta(cpf)

    valor = {}
    data = {}

    df = pd.read_sql_query(f"select * from extrato where conta_id = {conta.conta_id}", con=engine)
    df = df[['extrato_data', 'valor']]
    df = df.groupby("extrato_data", group_keys=True, as_index=False).sum()

    if not df.empty:
        valor = df['valor'].to_list()
        data = df['extrato_data'].to_list()

    # montando grafico
    
    # grafico_saldo_atual, grafico_data = valor, data
    # y = grafico_saldo_atual
    # x = grafico_data

    #layout

    df = pd.DataFrame(dict(
        x = data,
        y = valor
    ))

    fig = px.line(df, y=valor or [0] ,  x=data or [0] , title="Volume de Movimentações", template='plotly', color_discrete_sequence=px.colors.qualitative.Dark2)

    fig.layout = layout

    graphJSON: str = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

    # for extrato in extrato_registros:
    #     saldo_atual.append(extrato.saldo_atual)
    #     data.append(extrato.extrato_data)
    
    return graphJSON

    
def get_grafico_movimentacoes(cpf):
    engine = db.get_engine()
    conta = user.get_conta(cpf)

    valor = {}
    data = {}

    query = f'call saldo_historico({conta.conta_id})'
    df = pd.read_sql_query(query, con=engine)

    grafico_sets = df.to_json(orient='records')

    return grafico_sets

def get_grafico_despesas(cpf: str):

    engine = db.get_engine()
    conta = user.get_conta(cpf)
    id = conta.conta_id

    query = f'''select
    categoria, sum(abs(valor))
    valor
    from extrato  where
    conta_id = {conta.conta_id} and valor < 0
    group
    by
    categoria'''

    df = pd.read_sql_query(query, con=engine)

    grafico_sets = df.to_json(orient='records')

    return grafico_sets

def get_grafico_movimentacoes_por_usuario(conta_id:int):
    engine = db.get_engine()
    query = f'call volume_transacoes_p_pessoa({conta_id});'

    df = pd.read_sql_query(query, con=engine)
    grafico_sets = df.to_json(orient='records')

    return grafico_sets