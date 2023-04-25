import { useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";
import TabDisplay from "./TabDisplay";
import DataTable from "./DataTable";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Grid container id='test' justifyContent='center' alignItems='flex-start' sx={{ height: '100vh', width: 'auto' }}>
            <Grid container sx={{ height: '100%', width: '50vw' }}>
                <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                    <ReportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <TabDisplay children={<DataTable />} selectedTab={selectedTab} index={0} />
                    <TabDisplay children={<DataTable />} selectedTab={selectedTab} index={1} />
                    <TabDisplay children={<DataTable />} selectedTab={selectedTab} index={2} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Reports;