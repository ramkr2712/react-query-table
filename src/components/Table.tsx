import { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Header from './Header';
import { useProducts } from '../hooks/useProducts'; 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Product-ID', width: 150, type: 'number' },
  { field: 'description', headerName: 'Product Description', width: 250 },
  { field: 'category', headerName: 'Product Type/Category', width: 200 },
  { field: 'cost', headerName: 'Product Cost', width: 150, type: 'number' },
  { field: 'count', headerName: 'Product Count', width: 150, type: 'number' },
  { field: 'total', headerName: 'Product Total', width: 150, type: 'number' }
];

export default function Table() {
  const { data: products = [], isLoading, error } = useProducts();
  const [searchText, setSearchText] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredRows = (products || []).filter((product: any) =>
    Object.values(product).some((value: any) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const rows: GridRowsProp = filteredRows.map((item: any) => ({
    id: item.id,
    description: item.description,
    category: item.category,
    cost: item.cost,
    count: item.count,
    total: item.total
  }));

  return (
    <div style={{ height: 600, width: '100%', backgroundColor: '#f0f0f0' }}>
      <Header onSearch={handleSearch} /> {/* Pass the onSearch prop */}
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        paginationModel={{ page: 0, pageSize: 10 }}
        disableRowSelectionOnClick
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#333',
            color: '#0396d2'
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold'
          },
          '& .MuiDataGrid-sortIcon': {
            color: 'Black'
          },
          '& .MuiDataGrid-iconSeparator': {
            color: '#0396d2'
          }
        }}
      />
    </div>
  );
}
