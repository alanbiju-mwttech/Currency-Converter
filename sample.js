import currency_symbols from "./currency.js";
const submit = document.getElementById("submit")

const getRate = async (country) => {
    try{
        const response = await fetch(`https://open.er-api.com/v6/latest/${country}`)
        .then(response => response.json())
        return response
    }
    catch (err){
        console.error(err)
        return null
    }
}

const convert = (from,to,amount) =>{
    getRate(from).then(data =>{
        const money = document.getElementById("money")
        const rate = data.rates[to]
        amount = rate * amount
        money.innerText = currency_symbols[to] +' '+ amount
    });
    
}

const main = () => {
    submit.addEventListener("click", function(){
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value
        convert(from, to, amount)
    })
}

main()