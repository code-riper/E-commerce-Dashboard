import { LineChart } from "@mui/x-charts";

export default function RevenueChart({data}){
    return(
        <>
         <LineChart
          dataset={data}
          xAxis={[{
            dataKey:"month",
            scaleType:"band",
          }
        ]}

        series={[
            {
            dataKey:"revenue",
            label:"Revenue",    
            }
        ]}

        // width={600}
        height={300}
         />
        </>
    )
}