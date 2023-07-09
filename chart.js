fetch(
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily&precision=2"
)
  .then((data) => {
    return data.json();
  })
  .then((datalist) => {
    console.log(datalist);

    var xValues = [
      datalist.prices[0][0],
      datalist.prices[1][0],
      datalist.prices[2][0],
      datalist.prices[3][0],
      datalist.prices[4][0],
      datalist.prices[5][0],
      datalist.prices[6][0],
      datalist.prices[7][0],
      datalist.prices[8][0],
      datalist.prices[9][0],
      datalist.prices[10][0],
      datalist.prices[11][0],
      datalist.prices[12][0],
      datalist.prices[13][0],
      datalist.prices[14][0],
      datalist.prices[15][0],
      datalist.prices[16][0],
      datalist.prices[17][0],
      datalist.prices[18][0],
      datalist.prices[19][0],
      datalist.prices[20][0],
      datalist.prices[21][0],
      datalist.prices[22][0],
      datalist.prices[23][0],
      datalist.prices[24][0],
      datalist.prices[25][0],
      datalist.prices[26][0],
      datalist.prices[27][0],
      datalist.prices[28][0],
      datalist.prices[29][0],
    ];
    //pepsi product chart
    new Chart("chart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            data: [
              datalist.prices[0][1],
              datalist.prices[1][1],
              datalist.prices[2][1],
              datalist.prices[3][1],
              datalist.prices[4][1],
              datalist.prices[5][1],
              datalist.prices[6][1],
              datalist.prices[7][1],
              datalist.prices[8][1],
              datalist.prices[9][1],
              datalist.prices[10][1],
              datalist.prices[11][1],
              datalist.prices[12][1],
              datalist.prices[13][1],
              datalist.prices[14][1],
              datalist.prices[15][1],
              datalist.prices[16][1],
              datalist.prices[17][1],
              datalist.prices[18][1],
              datalist.prices[19][1],
              datalist.prices[20][1],
              datalist.prices[21][1],
              datalist.prices[22][1],
              datalist.prices[23][1],
              datalist.prices[24][1],
              datalist.prices[25][1],
              datalist.prices[26][1],
              datalist.prices[27][1],
              datalist.prices[28][1],
              datalist.prices[29][1],
            ],
            borderColor: "green",
            backgroundColor: " rgba(141, 196, 141, 0.39)",
            borderWidth: 1,
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            pointHitRadius: 1,
            fill: true,
            tension: 0.5,
            showLine: true,
          },
        ],
      },
      options: {
        responsive: true,
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { fontSize: 0 } }],
          xAxes: [{ ticks: { fontSize: 0 } }],
        },
        title: {
          display: true,
          text: "Bitcoin Last 30days",
        },
      },
    });
  });
