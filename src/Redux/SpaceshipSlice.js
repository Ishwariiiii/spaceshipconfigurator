import { createSlice } from '@reduxjs/toolkit';

// Initial state for the spaceship configuration
const initialState = {
    basePrice: 1000,
    color: { name: 'Snow', price: 0 },
    power: { level: '150 MW', price: 200 },
    warpDrive: { enabled: false, price: 0 },
    optionPackage: { name: 'Basic', price: 0 },
    total: 1200, // basePrice + default power price
};

const spaceshipSlice = createSlice({
    name: 'spaceship',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
            state.total = state.basePrice + state.color.price + state.power.price + state.warpDrive.price + state.optionPackage.price;
        },
        setPower: (state, action) => {
            state.power = action.payload;
            state.total = state.basePrice + state.color.price + state.power.price + state.warpDrive.price + state.optionPackage.price;
        },
        setWarpDrive: (state, action) => {
            state.warpDrive = action.payload;
            state.total = state.basePrice + state.color.price + state.power.price + state.warpDrive.price + state.optionPackage.price;
        },
        setOptionPackage: (state, action) => {
            state.optionPackage = action.payload;
            state.total = state.basePrice + state.color.price + state.power.price + state.warpDrive.price + state.optionPackage.price;
        }
    },
});

// Export actions
export const { setColor, setPower, setWarpDrive, setOptionPackage } = spaceshipSlice.actions;

// Export the reducer to be included in the store
export default spaceshipSlice.reducer;
