import { GridColDef } from '@mui/x-data-grid'
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import { useState } from 'react'
import Add from '../../components/add/Add'
import { userRows } from '../../data'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, minWidth: 50 },
  {
    field: 'img',
    headerName: 'Avatar',
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt='' />
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
  },
]

const Users = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />

      {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users
