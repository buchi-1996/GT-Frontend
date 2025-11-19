import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface SidebarSliceState {
    sidebarOpen: boolean;
    sidebarCollapsed: boolean;
    overlay: boolean

}

const initialState: SidebarSliceState = {
    sidebarOpen: false,
    sidebarCollapsed: false,
    overlay: false
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.sidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.sidebarOpen = false;
        },

        collapseSidebar: (state, action: PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
        },

        showOverlay: (state, action: PayloadAction<boolean>) => {
            state.overlay = action.payload;
        }

    },
})

export const {openSidebar, closeSidebar, collapseSidebar, showOverlay} = sidebarSlice.actions

export default sidebarSlice.reducer