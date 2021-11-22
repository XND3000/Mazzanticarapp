import { Satellite } from "@material-ui/icons"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Eventra Pura", "Eventra 711", "Eventra"]
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer