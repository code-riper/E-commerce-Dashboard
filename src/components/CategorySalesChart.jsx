import { BarChart } from "@mui/x-charts/BarChart";

export default function CategorySalesChart({data}){
    return(
        <>
         <BarChart
          dataset={data}
          xAxis={[
            {
                dataKey:"category",
                scaleType:"band",
            },
          ]}
          series={[
            {
                dataKey:"sales",
                label:"Sales",
            },
          ]}
        //   width={600}
          height={300}
         />
        </>
    )
}