

async function fetchCryptoPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
    const data = await response.json();
    return data;
}


async function updatePrices() {
    const prices = await fetchCryptoPrices();
    document.getElementById('bitcoin-price').textContent = `$${prices.bitcoin.usd}`;
    document.getElementById('ethereum-price').textContent = `$${prices.ethereum.usd}`;
    document.getElementById('dogecoin-price').textContent = `$${prices.dogecoin.usd}`;
}


window.onload = updatePrices;
