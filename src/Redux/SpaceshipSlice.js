import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basePrice: 1000,
    color: { name: "", price: 0 },
    power: { level: '100 MW', price: 0 },
    warpDrive: { enabled: false, price: 0 },
    optionPackage: { name: 'Basic', price: 0 },
    total: 0,
}

const spaceshipSlice = createSlice({
    name: 'spaceship',
    initialState,
    reducers: {
        setColor: (state, action) => {
            return {
                ...state,
                color: action.payload,
                total: state.basePrice + action.payload.price + state.power.price + state.warpDrive.price + state.optionPackage.price
            }
        },
        setPower: (state, action) => {
            return {
                ...state,
                power: action.payload,
                total: state.basePrice + state.color.price + action.payload.price + state.warpDrive.price + state.optionPackage.price
            }
        },
        setWarpDrive: (state, action) => {
            return {
                ...state,
                warpDrive: action.payload,
                total: state.basePrice + state.color.price + state.power.price + action.payload.price + state.optionPackage.price
            }
        },
        setOptionPackage: (state, action) => {
            return {
                ...state,
                optionPackage: action.payload,
                total: state.basePrice + state.color.price + state.power.price + state.warpDrive.price + action.payload.price
            }
        }
    },
})

export const { setColor, setPower, setWarpDrive, setOptionPackage } = spaceshipSlice.actions
export default spaceshipSlice.reducer
