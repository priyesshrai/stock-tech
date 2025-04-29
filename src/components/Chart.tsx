import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export const Charts = ({ investedAmount, totalValue, interestEarned }: any) => {

  const data = {
    labels: ['Invested Amount', 'Interest Earned'],
    datasets: [
      {
        label: 'Amount ₹',
        data: [investedAmount, interestEarned],
        backgroundColor: [
          '#F57328',
          '#5D74DD'
        ],
        borderColor: [
          '#ffffff',
          '#ffffff'
        ],
        borderWidth: 1,
      },
    ],

  };

  const options = {
    cutout: '50%',
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div >
      <Doughnut data={data} options={options} width={400} height={400}/>
    </div>
  );
};

