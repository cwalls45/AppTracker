import { DataGrid, GridColDef } from "@mui/x-data-grid";


interface IProps {
    columns: GridColDef[];
    rows: any[]
}

const DataTable = ({ columns, rows }: IProps) => {

    return (
        <DataGrid columns={columns} rows={[]} />
    );
}

export default DataTable;