import Chart from 'react-apexcharts';

const BarChart = () => { //expressão lâmbida, (um outro jeito de referenciar uma função) uma função que não tem nome, que estou atribuindo ao NavBar
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const mockData = {
    labels: {
      categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };
  return (
    <Chart 
      options = {{...options, xaxis: mockData.labels}}
      series = {mockData.series}
      type="bar" //tipo do grafico é "bar", que é o gráfico de barras
      height="240"
    />
  );
}

export default BarChart;