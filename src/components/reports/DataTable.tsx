import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";


interface IProps {
    columns: GridColDef[];
    rowData: any[];
    formatRowDataFunc: (rowData: any[]) => any[];
}

const DataTable = ({ columns, rowData, formatRowDataFunc }: IProps) => {

    const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        const dataToDisplayInRow = formatRowDataFunc(rowData);
        setRows(dataToDisplayInRow);
    }, [rowData]);

    return (
        <DataGrid columns={columns} rows={rows} />
    );
}

export default DataTable;