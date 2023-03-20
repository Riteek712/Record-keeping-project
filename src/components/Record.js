import React from 'react'
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const Record = ({name, email,index}) => {
  return (
    <div className='record'>
          <h5>{name}</h5>
          <h5>{email}</h5>
          {/* <h5>{index}</h5> */}
          <Button variant="contained" color='error'> 
            <RemoveCircleIcon/>
          </Button>
        </div>
  )
}

export default Record