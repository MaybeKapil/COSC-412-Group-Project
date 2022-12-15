async function getExchangeRate() {
    const access_key = 'cZG4AWhV0577FCvDaOpSbT43MGpaqHLL';
    const from = document.getElementById("currencyFrom").value;
    const to = document.getElementById("currencyTo").value;
    const amount = document.getElementById("currencyAmount").value;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "cZG4AWhV0577FCvDaOpSbT43MGpaqHLL");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    const data =  await response.json();
    document.getElementById("convertedAmount").value = data.result;
    document.getElementById("exchangeRate").value = data.info.rate;

}