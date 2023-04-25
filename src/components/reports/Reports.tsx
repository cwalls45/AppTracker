import { useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";
import TabDisplay from "./TabDisplay";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Grid container justifyContent='center' sx={{ height: '100%', width: 'auto' }}>
            <ReportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <TabDisplay children={<p>test1</p>} selectedTab={selectedTab} index={0} />
            <TabDisplay children={<p>test2</p>} selectedTab={selectedTab} index={1} />
            <TabDisplay children={<p>test3</p>} selectedTab={selectedTab} index={2} />
        </Grid>
    )
};

export default Reports;