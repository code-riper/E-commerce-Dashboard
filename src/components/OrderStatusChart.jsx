import { PieChart } from "@mui/x-charts/PieChart";

export default function OrderStatusChart({data}){

     console.log("Order Status Data:", data);
  console.log("Is Array:", Array.isArray(data));
  
    return(
        <>
        <PieChart
         series={[
            {
                data:data.map((item,index)=>({
                    id:index,
                    value:item.value,
                    label:item.status,
                })),
            },
         ]}
        //  width={400}
         height={300}
        />
        </>
    );
}