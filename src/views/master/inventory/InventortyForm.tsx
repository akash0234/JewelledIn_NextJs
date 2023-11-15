// ** React Imports
import { SyntheticEvent, useState } from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { InputLabel, Select, OutlinedInput, MenuItem, Button, CardActions, CardContent, Divider, FormControl, Tab, TextField, SelectChangeEvent } from '@mui/material'

const InventoryForm = () => {

    // ** States
    const [value, setValue] = useState<string>('inventory-info')

    const [language, setLanguage] = useState<string[]>([])

    const handleTabsChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    // Handle Select
    const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
        setLanguage(event.target.value as string[])
    }

    return (
        <>
            <TabContext value={value}>
                <TabList
                    variant='scrollable'
                    scrollButtons={false}
                    onChange={handleTabsChange}
                    sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
                >
                    <Tab value='inventory-info' label='Inventory Info' />
                    <Tab value='additional-details' label='Addtional Details' />
                    <Tab value='stock-details' label='Stock Details' />
                </TabList>
                <form onSubmit={e => e.preventDefault()}>
                    <CardContent>
                        <TabPanel value='inventory-info'>
                            <Grid container spacing={5}>
                                <Grid item xs={12} >
                                    <TextField fullWidth label='Inventory Code' placeholder='Enter ' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Description' placeholder='Carter' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='form-layouts-tabs-select-label'>Country</InputLabel>
                                        <Select
                                            label='Country'
                                            defaultValue=''
                                            id='form-layouts-tabs-select'
                                            labelId='form-layouts-tabs-select-label'
                                        >
                                            <MenuItem value='UK'>UK</MenuItem>
                                            <MenuItem value='USA'>USA</MenuItem>
                                            <MenuItem value='Australia'>Australia</MenuItem>
                                            <MenuItem value='Germany'>Germany</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='form-layouts-tabs-multiple-select-label'>Language</InputLabel>
                                        <Select
                                            multiple
                                            value={language}
                                            onChange={handleSelectChange}
                                            id='form-layouts-tabs-multiple-select'
                                            labelId='form-layouts-tabs-multiple-select-label'
                                            input={<OutlinedInput label='Language' id='tabs-select-multiple-language' />}
                                        >
                                            <MenuItem value='English'>English</MenuItem>
                                            <MenuItem value='French'>French</MenuItem>
                                            <MenuItem value='Spanish'>Spanish</MenuItem>
                                            <MenuItem value='Portuguese'>Portuguese</MenuItem>
                                            <MenuItem value='Italian'>Italian</MenuItem>
                                            <MenuItem value='German'>German</MenuItem>
                                            <MenuItem value='Arabic'>Arabic</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value='additional-details'>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Username' placeholder='carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor='form-layouts-tabs-password'>Password</InputLabel>

                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor='form-layouts-tabs-password-2'>Confirm Password</InputLabel>

                                    </FormControl>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value='stock-details'>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Twitter' placeholder='https://twitter.com/carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Facebook' placeholder='https://facebook.com/carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Google+' placeholder='https://plus.google.com/carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='LinkedIn' placeholder='https://linkedin.com/carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Instagram' placeholder='https://instagram.com/carterLeonard' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label='Quora' placeholder='https://quora.com/carterLeonard' />
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </CardContent>
                    <Divider sx={{ m: '0 !important' }} />
                    <CardActions>
                        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Submit
                        </Button>
                        <Button type='reset' size='large' variant='outlined' color='secondary'>
                            Reset
                        </Button>
                    </CardActions>
                </form>
            </TabContext>
        </>
    )
}
export default InventoryForm