// ** React Imports
// ** MUI Imports
import 'react-loading-skeleton/dist/skeleton.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
// ** Icon Imports

// ** Actions Imports

import { IconButton, Typography, useMediaQuery } from '@mui/material'

import InventoryList from 'src/views/master/inventory/InventoryList'
import InventoryForm from 'src/views/master/inventory/InventortyForm';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Inventory = () => {

  const [isDropDownOpen, setDroDown] = useState<boolean>(false);

  const handleDropDown = () => {
    setDroDown(!isDropDownOpen)
  }
  const isSmallScreen = useMediaQuery('(max-width:899px)');


  return (

    <>
      <Grid container spacing={4}>

        <Grid item md={4} lg={3} xs={12} >
          <div style={{ position: 'relative' }}>
            <Typography variant='subtitle2' sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#787EFF", padding: '10px 20px', color: 'white' }}>
              Inventory List

            </Typography>
            <IconButton edge='end' sx={{ display: `${isSmallScreen ? 'block' : 'none'}`, position: 'absolute', right: '10px', top: '3px' }} onClick={handleDropDown}>
              <Icon icon='mdi:keyboard-arrow-down' color='#fff' fontSize={20} />
            </IconButton>

          </div>

          <Box sx={{
            '--Grid-borderWidth': '1px',

            border: 'var(--Grid-borderWidth) solid',
            borderColor: '#ccc',
            overflow: 'scroll',
            maxHeight: 'Calc(100vh - 180px)',
            '&::-webkit-scrollbar': {
              width: '0.4em'
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              outline: '1px solid slategrey'
            },
            height: isSmallScreen ? (isDropDownOpen ? 'auto' : '0px') : 'auto',
            marginBottom: `${isDropDownOpen ? '0px' : '10px'}`,
            transition: `${isDropDownOpen ? 'max-height 0.5s ease-out, opacity 0.5s ease-out' : 'min-height 0.5s ease-in, opacity 0.5s ease-in'}`


          }} >
            <InventoryList />

          </Box>

        </Grid>
        <Grid item md={8} lg={9}>
          <Box sx={{
            '--Grid-borderWidth': '1px',

            border: 'var(--Grid-borderWidth) solid',
            borderColor: '#ccc',
            overflow: 'scroll',
            maxHeight: 'Calc(100vh - 180px)',
            '&::-webkit-scrollbar': {
              width: '0.4em'
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              outline: '1px solid slategrey'
            }
          }}>

            <InventoryForm />

          </Box>

        </Grid>
      </Grid>

    </>

  )
}

export default Inventory