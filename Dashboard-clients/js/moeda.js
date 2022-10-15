var resultado;

function converter(){
    var valueEuro = resultado["EURBRL"]["bid"]
    var pctEuro = resultado["EURBRL"]["pctChange"]
    var valueDolar = resultado["USDBRL"]["bid"]
    var pctDolar = resultado["USDBRL"]["pctChange"]
    var valueBtcoin = resultado["BTCBRL"]["bid"]
    var pctBtcoin = resultado["BTCBRL"]["pctChange"]
}

function cotacao(){
    $.ajax({
        type: "GET",
        dataType: "JSON",
        url: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL",
        success: function (data) {
            resultado = data;
            console.log(resultado);
        //   $("#pct-dolar").val(resposta.valeuEuro);
        //   $("#value-dolar").val(resposta.pctEuro);
        //   $("#pct-euro").val(resposta.valueDolar);
        //   $("#value-euro").val(resposta.pctDolar);
        //   $("#pct-bitcoin").val(resposta.valueBtcoin);
        //   $("#value-bitcoin").val(resposta.pctBtcoin);
        },
    });
}

cotacao()
