import { LineChart } from "@mui/x-charts";

export default function LineChartComponent({data,xKey,yKey,label}){
    return(
        <>
        <div>
            <LineChart
             dataset={data}
             xAxis={[
                {
                    dataKey:xKey,
                    scaleType:"band",
                },
             ]}
             series={[
                {
                    dataKey:yKey,
                    label:label
                },
             ]}
             height={300}
            />
        </div>
        </>
    )
}