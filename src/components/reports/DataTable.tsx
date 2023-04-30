import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";


interface IProps<T> {
    columns: GridColDef[];
    rowData: T[];
    formatRowDataFunc: (rowData: T[]) => T[];
}

function DataTable<T>({ columns, rowData, formatRowDataFunc }: IProps<T>) {

    const [rows, setRows] = useState<T[]>([]);

    useEffect(() => {
        const dataToDisplayInRow = formatRowDataFunc(rowData);
        setRows(dataToDisplayInRow);
    }, [rowData]);

    return (
        <DataGrid autoHeight columns={columns} rows={rows} />
    );
}

export default DataTable;