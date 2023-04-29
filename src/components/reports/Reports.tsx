import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ReportTabs from "./ReportTabs";
import TabDisplay from "./TabDisplay";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State, applicationsActionCreators } from "../../redux";
import { ApplicationProperty, ChemicalProperties, IApplicationAndChemical } from "../../entities/chemicalApplicationFormDefaultValues";
import { getApplications } from "../../utils/applicationRequests";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import YearSelector from "./YearSelector";

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [year, setYear] = useState(dayjs().year());
    const [chemicalsApplied, setChemicalsApplied] = useState<IApplicationAndChemical[]>([]);
    const columns: GridColDef[] = [
        { field: ApplicationProperty.DATE_OF_APPLICATION, headerName: 'Date of Application', minWidth: 200, flex: 1 },
        { field: ApplicationProperty.AREA_OF_APPLICATION, headerName: 'Area(s) of Application', minWidth: 200, flex: 1 },
        { field: ApplicationProperty.TOTAL_AREA_OF_APP, headerName: 'Total Area of Application', minWidth: 200, flex: 1 },
        { field: ApplicationProperty.TOTAL_AREA_OF_APP_UNIT, headerName: 'Units', minWidth: 100, flex: 1 },
        { field: ApplicationProperty.TARGET_PESTS, headerName: 'Target Pests', minWidth: 150, flex: 1 },
        { field: ChemicalProperties.CHEMICAL_COMPANY, headerName: 'Company Name', minWidth: 150, flex: 1 },
        { field: ChemicalProperties.CHEMICAL_NAME, headerName: 'Chemical Name', minWidth: 150, flex: 1 },
        { field: ChemicalProperties.AMOUNT, headerName: 'Amount Applied', minWidth: 150, flex: 1 },
        { field: ChemicalProperties.UNITS, headerName: 'Units', minWidth: 100, flex: 1 },
    ];

    const dispatch = useDispatch();
    const { setAllApplications: getAllApplications } = bindActionCreators(applicationsActionCreators, dispatch);
    const { applications } = useSelector((state: State) => state);

    const displayAllChemicals = (chemicals: IApplicationAndChemical[]) => chemicals;
    const displayFertilizersOnly = (chemicals: IApplicationAndChemical[]) => [];
    const displayPesticidesOnly = (chemicals: IApplicationAndChemical[]) => [];

    useEffect(() => {
        getApplications(year.toString()).then((apps) => {
            getAllApplications(apps);
        });
    }, [year]);

    useEffect(() => {
        const chemicals: IApplicationAndChemical[] = applications.map((app) => {
            return app.chemicals.map((chemical) => ({
                [ApplicationProperty.ID]: uuidv4(),
                [ApplicationProperty.DATE_OF_APPLICATION]: app.dateOfApplication,
                [ApplicationProperty.AREA_OF_APPLICATION]: app.areaOfApplication,
                [ApplicationProperty.TOTAL_AREA_OF_APP]: app.totalAreaOfApp,
                [ApplicationProperty.TOTAL_AREA_OF_APP_UNIT]: app.totalAreaOfAppUnit,
                [ApplicationProperty.TARGET_PESTS]: app.targetPests,
                ...chemical
            }))
        }).flat();

        setChemicalsApplied(chemicals);
    }, [applications]);

    return (
        <Grid container justifyContent='center' alignItems='flex-start' xs={12}>
            <Grid container alignContent='flex-start' sx={{ height: '100%', width: '100vw' }}>
                <Grid container item xs={12} justifyContent='center' rowSpacing={3} >
                    <ReportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <YearSelector year={year} handleChangeYear={setYear} />
                    <TabDisplay children={<DataTable columns={columns} formatRowDataFunc={displayAllChemicals} rowData={chemicalsApplied} />} selectedTab={selectedTab} index={0} />
                    <TabDisplay children={<DataTable columns={columns} formatRowDataFunc={displayPesticidesOnly} rowData={chemicalsApplied} />} selectedTab={selectedTab} index={1} />
                    <TabDisplay children={<DataTable columns={columns} formatRowDataFunc={displayFertilizersOnly} rowData={chemicalsApplied} />} selectedTab={selectedTab} index={2} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Reports;