import { ListedItem } from '@/lib/schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ListingSliceState {
    listedItems: ListedItem[],
    isEditMode: boolean


}

const initialState: ListingSliceState =  {
   listedItems: [],
    isEditMode: false


}

const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {
        setListedItems: (state, action: PayloadAction<ListedItem[]>) => {
            state.listedItems = action.payload;
        },

        setEditMode: (state, action: PayloadAction<boolean>) => {
            state.isEditMode = action.payload;
        }

    },
})  

export const 
{ 
    setListedItems,
    setEditMode

} = listingSlice.actions

export default listingSlice.reducer