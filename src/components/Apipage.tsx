import * as React from "react";
import {useState, useEffect} from "react"
import {IPosts} from './IPosts'
import { PostService } from "./Postservice";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



interface Posts {
    Id: string
   loading: boolean
   posts: IPosts[]
   errorMsg: string
  }

 

  const Posts: React.FC=()=>{
    const[state , setState] = useState<Posts>({
        Id: '',
        loading:false,
        posts:[] as IPosts[],
        errorMsg: ''

    })

    //network requests
    useEffect(() => {
        setState({...state})
        PostService.getAllPosts().then(res =>setState({
            ...state , loading: false , posts: res.data
        }) ).catch(err => setState({
            ...state, loading: false , errorMsg: err.message
        }))
    },[])

    const columns = [
        { field: 'id', headerName: 'Id', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
            editable: true,
          },
          {
            field: 'body',
            headerName: 'Body',
            width: 350,
            editable: true,
          }
      ]     
  
     const {posts} = state
    return(
        <>
        <h1>Posts Section</h1>
        <Box sx={{ height: 500, width: 750 }}>
      <DataGrid
        {...state}
                columns={columns} rows={[...posts]} 
                rowHeight={38}
                checkboxSelection                
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }} 
                   />
    </Box>
        </>
    )
  }

  export default Posts