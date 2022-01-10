type Label = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export interface ChartDataPoint {
    label: Label;
    value: number;
}

export interface ChartProps {
    dataPoints: ChartDataPoint[];
}

export interface ChartBarProps {
    value: number;
    maxValue: number | null;
    label: Label;
}