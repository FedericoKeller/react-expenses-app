import { FC } from "react";
import { ChartProps } from "../../models/Chart";
import './Chart.css';
import ChartBar from "./ChartBar/ChartBar";

const Chart: FC<ChartProps> = (props) => {
    const totalMax = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))
    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => (
                    <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMax}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    );
} 

export default Chart;