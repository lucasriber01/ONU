import Chart from 'react-apexcharts';

const BarChart =() => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%'

            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Erradicar Pobreza', 'Igualdade de Genero', 'Agua Potavel', 'Fome Zero', 'Sustentabilidade']
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
        //options={{...options , xaxis:mockData.labels}}

               options={{...options , xaxis:mockData.labels}}
               series={mockData.series}
               type="bar"
               height="340"
        />
    );
  }
  
  export default BarChart;
  