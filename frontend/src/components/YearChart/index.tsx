import Chart from 'react-apexcharts';

const YearChart =() => {

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
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1, 43.6, 67.1, 67.7, 45.6, 71.1, 43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
    
        <Chart
        //options={{...options , xaxis:mockData.labels}}

               options={{...options , xaxis:mockData.labels}}
               series={mockData.series}
               type="line"
               height="240"
        />
    );
  }
  
  export default YearChart;
  