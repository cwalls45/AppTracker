import { Tab, Tabs } from "@mui/material"

interface IProps {
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const ReportTabs = ({ selectedTab, setSelectedTab }: IProps) => {

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
        setSelectedTab(newTab);
    };
    return (
        <Tabs value={selectedTab} onChange={handleChange} aria-label="Report Tabs" centered>
            <Tab label="All Applications Made" aria-label="All Applications Made Tab" />
            <Tab label="Pesticide Applications" aria-label="Pesticide Applications Tab" />
            <Tab label="Fertilizer Applications" aria-label="Fertilizer Applications Tab" />
        </Tabs>
    )
}

export default ReportTabs;