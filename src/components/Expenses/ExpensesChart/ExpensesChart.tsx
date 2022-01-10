import { FC } from "react";
import { ExpensesProps } from "../../../models/Props";
import ChartDataPointsService from "../../../services/ChartDataPointsService";
import Chart from "../../Chart/Chart";

const ExpensesChart: FC<ExpensesProps> = (props) => {
    const dataPoints = ChartDataPointsService.getChartDataPoints(props.expenses);
    return <Chart dataPoints={dataPoints}/>;
}

export default ExpensesChart;