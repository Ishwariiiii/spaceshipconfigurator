import { configureStore } from '@reduxjs/toolkit';
// import spaceshipReducer from './spaceshipSlice';
import spaceshipReducer from '../Redux/SpaceshipSlice'

const store = configureStore({
    reducer: {
        spaceship: spaceshipReducer,
    },
});

export default store;
