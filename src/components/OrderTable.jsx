import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function OrderTable(){
    const orders = [
  {
    id: 1001,
    customer: "Rahul",
    amount: "₹2,500",
    status: "Completed",
  },
  {
    id: 1002,
    customer: "Aman",
    amount: "₹1,200",
    status: "Pending",
  },
  {
    id: 1003,
    customer: "Sara",
    amount: "₹3,400",
    status: "Completed",
  },
];
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                {
                    orders.map((order)=>{
                        return   <TableRow key={order.id}>
                                     <TableCell>#{order.id}</TableCell>
                                     <TableCell>{order.customer}</TableCell>
                                     <TableCell>{order.amount}</TableCell>
                                     <TableCell>
                                    <Chip 
                                        label={order.status}
                                        color={order.status==="Completed"?"success":"warning"}
                                        size="small"
                                    />
                                     </TableCell>
                                 </TableRow>
                    })
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable;