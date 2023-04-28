import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";
import TabDisplay from "./TabDisplay";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State, applicationsActionCreators } from "../../redux";
import { IApplicationAndChemical } from "../../entities/chemicalApplicationFormDefaultValues";
import { getApplications } from "../../utils/applicationRequests";
import { GridColDef } from "@mui/x-data-grid";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [year, setYear] = useState('2023');
    const [chemicalsApplied, setChemicalsApplied] = useState<IApplicationAndChemical[]>([]);
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ]

    const dispatch = useDispatch();
    const { setAllApplications: getAllApplications } = bindActionCreators(applicationsActionCreators, dispatch);
    const { applications } = useSelector((state: State) => state);

    useEffect(() => {
        //TODO: create dropdown for year
        getApplications(year).then((apps) => {
            getAllApplications(apps);
        });
    }, []);

    useEffect(() => {
        const chemicals: IApplicationAndChemical[] = applications.map((app) => {
            return app.chemicals.map((chemical) => ({
                dateOfApplication: app.dateOfApplication,
                areaOfApplication: app.areaOfApplication,
                totalAreaOfApp: app.totalAreaOfApp,
                totalAreaOfAppUnit: app.totalAreaOfAppUnit,
                targetPests: app.targetPests,
                ...chemical
            }))
        }).flat();

        setChemicalsApplied(chemicals);
    }, [applications]);

    return (
        <Grid container id='test' justifyContent='center' alignItems='flex-start' sx={{ height: '100vh', width: 'auto' }}>
            <Grid container sx={{ height: '100%', width: '50vw' }}>
                <Grid container item xs={12} justifyContent='center' rowSpacing={3}>
                    <ReportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <TabDisplay children={<DataTable columns={columns} rows={[]} />} selectedTab={selectedTab} index={0} />
                    <TabDisplay children={<DataTable columns={columns} rows={[]} />} selectedTab={selectedTab} index={1} />
                    <TabDisplay children={<DataTable columns={columns} rows={[]} />} selectedTab={selectedTab} index={2} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Reports;