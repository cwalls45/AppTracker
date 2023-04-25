import { DataGrid, GridColDef } from "@mui/x-data-grid"

const DataTable = () => {

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];

    return (
        <DataGrid columns={columns} rows={[]} />
    );
}

export default DataTable;