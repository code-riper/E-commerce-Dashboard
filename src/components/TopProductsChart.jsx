import { BarChart } from "@mui/x-charts";

export default function TopProductsChart({data}){
    return(
        <>
        <BarChart
        dataset={data}
        yAxis={[
            {
                dataKey:"product",
                scaleType:"band"
            },
        ]}

        series={[
            {
                dataKey:"sales",
                label:"Sales",
            }
        ]}
        layout="horizontal"
        // width={}
        height={300}
        />
        </>
    )
}