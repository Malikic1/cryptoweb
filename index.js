var menuButton = document.getElementById("menu_btn");
var nav = document.getElementById("nav");
var index = document.getElementById("header");
var hide = document.getElementById("hide");
var hid = document.getElementById("hid");
menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  index.classList.toggle("fixed");
  hide.classList.toggle("hidden");
  hid.classList.toggle("hidden");
});

fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cpolkadot%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2",
  { method: "GET" }
)
  .then((data) => {
    return data.json();
  })
  .then((datalist) => {
    console.log(datalist);
    let bitPrice = datalist.bitcoin.usd;
    let ethPrice = datalist.ethereum.usd;
    let litePrice = datalist.litecoin.usd;
    let polkPrice = datalist.polkadot.usd;
    let chainPrice = datalist.chainlink.usd;

    var bitcoinPrice = document.getElementById("bitprice");
    var ethereumPrice = document.getElementById("ethprice");
    var litecoinPrice = document.getElementById("liteprice");
    var polkadotPrice = document.getElementById("polkprice");
    var chainlinkPrice = document.getElementById("chainprice");
    var bitp = document.getElementById("bitp");
    bitp.innerHTML = "$" + bitPrice;
    bitcoinPrice.innerHTML = "$" + bitPrice;
    ethereumPrice.innerHTML = "$" + ethPrice;
    litecoinPrice.innerHTML = "$" + litePrice;
    polkadotPrice.innerHTML = "$" + polkPrice;
    chainlinkPrice.innerHTML = "$" + chainPrice;

    var bitcoinChange = document.getElementById("bit_change");
    var ethereumChange = document.getElementById("eth_change");
    var litecoinChange = document.getElementById("lite_change");
    var polkadotChange = document.getElementById("polk_change");
    var chainChange = document.getElementById("chain_change");

    bitcoinChange.innerHTML = roundTO(datalist.bitcoin.usd_24h_change, 2) + "%";
    ethereumChange.innerHTML =
      roundTO(datalist.ethereum.usd_24h_change, 2) + "%";
    litecoinChange.innerHTML =
      roundTO(datalist.litecoin.usd_24h_change, 2) + "%";
    polkadotChange.innerHTML =
      roundTO(datalist.polkadot.usd_24h_change, 2) + "%";
    chainChange.innerHTML = roundTO(datalist.chainlink.usd_24h_change, 2) + "%";

    if (datalist.bitcoin.usd_24h_change < 0) {
      bitcoinChange.style.color = "red";
      bitcoinPrice.style.color = "red";
    } else {
      bitcoinChange.style.color = "green";
      bitcoinPrice.style.color = "green";
    }

    if (datalist.ethereum.usd_24h_change < 0) {
      ethereumChange.style.color = "red";
      ethereumPrice.style.color = "red";
    } else {
      ethereumChange.style.color = "green";
      ethereumPrice.style.color = "green";
    }

    if (datalist.chainlink.usd_24h_change < 0) {
      chainChange.style.color = "red";
      chainlinkPrice.style.color = "red";
    } else {
      chainChange.style.color = "green";
      chainlinkPrice.style.color = "green";
    }

    if (datalist.polkadot.usd_24h_change < 0) {
      polkadotChange.style.color = "red";
      polkadotPrice.style.color = "red";
    } else {
      polkadotChange.style.color = "green";
      polkadotPrice.style.color = "green";
    }

    if (datalist.litecoin.usd_24h_change < 0) {
      litecoinChange.style.color = "red";
      litecoinPrice.style.color = "red";
    } else {
      litecoinChange.style.color = "green";
      litecoinPrice.style.color = "green";
    }

    function roundTO(n, place) {
      return +(Math.round(n + "e+" + place) + "e-" + place);
    }

    var bitcoinCap = document.getElementById("bitcap");
    var ethereumCap = document.getElementById("ethcap");
    var litecoinCap = document.getElementById("litecap");
    var polkadotCap = document.getElementById("polkcap");
    var chainCap = document.getElementById("chaincap");

    bitcoinCap.innerHTML = roundTO(datalist.bitcoin.usd_market_cap, 2);
    ethereumCap.innerHTML = roundTO(datalist.ethereum.usd_market_cap, 2);
    litecoinCap.innerHTML = roundTO(datalist.litecoin.usd_market_cap, 2);
    polkadotCap.innerHTML = roundTO(datalist.polkadot.usd_market_cap, 2);
    chainCap.innerHTML = roundTO(datalist.chainlink.usd_market_cap, 2);

    var exchange = document.getElementById("exchangeBtn");
    exchange.addEventListener("click", function () {
      var selector1 = document.getElementById("selector1").value;
      var inp2 = document.getElementById("input2").value;
      var inp1 = document.getElementById("input1");
      switch (selector1) {
        case "bit":
          var oneUSDTtoBTC = 1 / bitPrice;
          inp1.value = oneUSDTtoBTC * inp2;
          break;
        case "eth":
          var oneUSDTtoETH = 1 / ethPrice;
          inp1.value = oneUSDTtoETH * inp2;
          break;
        case "lite":
          var oneUSDTtoLITE = 1 / litePrice;
          inp1.value = oneUSDTtoLITE * inp2;
          break;
        case "polk":
          var oneUSDTtoPOLK = 1 / polkPrice;
          inp1.value = oneUSDTtoPOLK * inp2;
          break;
        case "chain":
          var oneUSDTtoChain = 1 / chainPrice;
          inp1.value = oneUSDTtoChain * inp2;
          break;
      }
    });
  });
