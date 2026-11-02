import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({title,value,icon,iconBg,change,comparison}){
    const Icon=icon;
    return(
        <Card sx={{height:"100%",borderRadius:3,boxShadow:2, transition:"transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover":{
                transform:"translateY(-3px)",
                boxShadow:4
            }
        }}>
            <CardContent sx={{padding:3}}>

              <div className="d-flex justify-content-between align-items-center mb-2">

                <Typography variant="body2" sx={{fontWeight: 500 }} >
                    {title}
                </Typography>
              

               <div className="d-flex align-items-center justify-content-center"
               style={{ width:"44px", height:"44px", borderRadius:"12px", backgroundColor:iconBg }} >
                 <Icon sx={{ fontSize:26 }}/>
               </div>
               </div>
               
                {/* <Typography variant="body2" sx={{marginBottom:1,fontWeight:500}}>
                    {title}
                </Typography> */}

                <Typography variant="h4" sx={{fontWeight:600,marginBottom:1}}>
                    {value}
                </Typography>

                <Typography variant="body2" sx={{fontWeight:500}}>
                    <span className="fw-semibold text-success">
                        &uarr; {change}
                    </span>

                    {" "}
                    
                     <span>{comparison}</span>
                </Typography>
            </CardContent>
        </Card>
    )
}