import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const TransactionChart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div>
      <div>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default TransactionChart;
