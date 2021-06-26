import Chart from 'react-apexcharts';

const DonutChart = () => { //expressão lâmbida, (um outro jeito de referenciar uma função) uma função que não tem nome, que estou atribuindo ao NavBar
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}
  return (
    <Chart 
      options = {{...options, labels: mockData.labels}}
      series = {mockData.series}
      type="donut" //tipo do grafico é "donut", que é o gráfico de rosca
      height="240"
    />
  );
}

export default DonutChart;