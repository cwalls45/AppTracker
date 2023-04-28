import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";
import TabDisplay from "./TabDisplay";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State, applicationsActionCreators } from "../../redux";
import { IApplication } from "../../entities/chemicalApplicationFormDefaultValues";
import { getApplications } from "../../utils/applicationRequests";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [year, setYear] = useState('2023');
    const [chemicalsApplied, setChemicalsApplied] = useState<IApplication[]>([]);

    const dispatch = useDispatch();
    const { setAllApplications: getAllApplications } = bindActionCreators(applicationsActionCreators, dispatch);
    const { applications } = useSelector((state: State) => state);

    useEffect(() => {
        console.log(1)
        //TODO: create dropdown for year
        getApplications(year).then((apps) => {
            getAllApplications(apps);
            console.log(2)
        });
        console.log(3)
    }, []);

    useEffect(() => {
        const chemicals = applications.map((app) => {
            return app.chemicals.map((chemical) => chemical)
        }).flat();
        console.log(chemicals)

        // setChemicalsApplied(chemicals);
    }, [applications]);

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