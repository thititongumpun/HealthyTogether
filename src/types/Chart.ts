export interface ChartData {
  labels: string[];
  datasets: Datasets[];
  type: string;
}

export interface Datasets {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}