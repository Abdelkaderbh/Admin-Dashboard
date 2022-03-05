import React from 'react'
import './users.css'
import { DataGrid } from '@material-ui/data-grid' 
import {DeleteOutline,EditOutlined} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import {UserRows} from "../../ChartData.js"
import { useState } from 'react';



  


const Users = () => {
  const [data,setData] = useState(UserRows);
const deleteUser = (id) => {
  setData(data.filter(item=>item.id !== id));
};


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200,renderCell:(params)=> {
      return (
          <div className='userList'>
              <img className='userImg' src={params.row.avatar} alt="" />
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
  },

  {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
          return(
                  <>
                  <Link to={"/user/"+params.row.id} >
                  <EditOutlined className="userEdit" />
                  </Link>
                  <DeleteOutline  className="userDelete" onClick = {()=> deleteUser(params.row.id)} />
                  </>
          )
      }
    },


];
  return (
    <div className='usersList'>
                    <DataGrid
                                disableSelectionOnClick
                                rows={data}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                     />
    </div>
  )
}

export default Users