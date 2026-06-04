const ConvertButton = document.querySelector(".convert-button")
const SelectInput = document.querySelector(".select-input")
const SelectOutput = document.querySelector(".select-output")

function ConverterValor() {
    const EntradaValorUsuario = document.querySelector(".Valor-Usuario")
    const MoedaConversao = document.querySelector(".valor-primario")
    const MoedaConvertida = document.querySelector(".valor-secundario")

    const dolarToday = 5.2
    const EuroToday = 6.2
    const YuanToday= 0.75

    const valor = parseFloat(
        EntradaValorUsuario.value
            .replace(/[^\d,]/g, "")
            .replace(",", ".")
    )

    if (SelectOutput.value == "dolar") {
        MoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(valor / dolarToday)
    }

    if (SelectOutput.value == "euro") {
        MoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(valor / EuroToday)
    }

    if (SelectOutput.value == "real") {
        MoedaConvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(valor)
    }

     if (SelectOutput.value == "yuan") {
        MoedaConvertida.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency", currency: "CNY"
        }).format(valor / YuanToday)
    }

    MoedaConversao.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(valor)
}

function ChangeSelectOutput() {
    const CurrencyName = document.getElementById("Currency-name")
    const CurrencyImg = document.querySelector(".bandeira-convertida")
    if (SelectOutput.value == "dolar") {
        CurrencyName.innerHTML = "Dólar americano"
        CurrencyImg.src = "./assets/dolar.png"

    }

    if (SelectOutput.value == "euro") {
        CurrencyName.innerHTML = "Euro"
        CurrencyImg.src = "./assets/euro.png"
    }

    if (SelectOutput.value == "yuan") {
        CurrencyName.innerHTML = "Yuan"
        CurrencyImg.src = "./assets/yuan.png"
    }

    if (SelectOutput.value == "real") {
        CurrencyName.innerHTML = "Real"
        CurrencyImg.src = "./assets/brasil.png"
    }
}


SelectOutput.addEventListener("change", ChangeSelectOutput)
ConvertButton.addEventListener("click", ConverterValor)