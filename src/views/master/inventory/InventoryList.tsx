// ** Icon Imports
import Icon from 'src/@core/components/icon'
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "src/store"
import { Prdmst } from "src/types/inventory/InventoryListType"
import { fetchData } from 'src/store/masters/inventory'

const InventoryList = () => {
    // ** State
    const [selectedIndex, setSelectedIndex] = useState<number>(1)

    const handleListItemClick = (index: number) => {
        console.log(index)
        setSelectedIndex(index)
    }


    // ** Hooks
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.inventory)

    useEffect(() => {
        dispatch(
            fetchData()
        )

    }, [dispatch])



    return (
        <>
            {store.status == "loading" &&
                <Typography variant='subtitle2' sx={{ lineHeight: 1.5, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', padding: '10px 5px', color: 'white' }}>
                    <Skeleton height={40} count={20} />
                </Typography>
            }
            <List disablePadding sx={{

            }}>
                {store.data.map((item: Prdmst, index: number) => (
                    <ListItem disablePadding key={index} >
                        <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(index)} sx={{
                            '&:after': {
                                height: '1px', content: '""', width: 'Calc(100% - 30px)', position: 'absolute', bottom: 0, bgcolor: '#cccccc73'
                            }
                        }}>

                            <ListItemText primary={item.descr1 + "(" + item.invcod + ")"} />
                            <ListItemSecondaryAction>
                                <IconButton edge='end'>
                                    <Icon icon='mdi:edit' fontSize={20} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                    </ListItem>
                ))}



            </List>
        </>
    )

}
export default InventoryList