import { useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Grid container justifyContent='center' sx={{ height: '100%', width: 'auto' }}>
            <ReportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </Grid>
    )
};

export default Reports;