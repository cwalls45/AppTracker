import { Grid } from "@mui/material";

interface IProps {
    children: JSX.Element
    selectedTab: number;
    index: number;
};

const TabDisplay = ({ children, selectedTab, index }: IProps) => {
    return (
        <>
            {selectedTab === index &&
                (<Grid sx={{ height: '100%', width: '100%' }}>
                    {children}
                </Grid >)
            }
        </>
    );
}

export default TabDisplay;