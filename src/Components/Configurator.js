
// import React, { useState } from 'react';
// import './Configurator.css';

// const Configurator = () => {
//     const basePrice = 1000;

//     // State to track selected options and their prices
//     const [color, setColor] = useState({ name: 'Snow', price: 0 });
//     const [power, setPower] = useState({ level: '150 MW', price: 200 });
//     const [warpDrive, setWarpDrive] = useState({ enabled: false, price: 0 });
//     const [optionPackage, setOptionPackage] = useState({ name: 'Basic', price: 0 });
//     const [total, setTotal] = useState(basePrice + power.price);

//     // Function to update selection and recalculate the total
//     const updateTotal = (newColor, newPower, newWarpDrive, newOptionPackage) => {
//         const newTotal = basePrice + newColor.price + newPower.price + newWarpDrive.price + newOptionPackage.price;
//         setTotal(newTotal);
//     };

//     const handleColorSelection = (name, price) => {
//         const newColor = { name, price };
//         setColor(newColor);
//         updateTotal(newColor, power, warpDrive, optionPackage);
//     };

//     const handlePowerSelection = (level, price) => {
//         const newPower = { level, price };
//         setPower(newPower);
//         updateTotal(color, newPower, warpDrive, optionPackage);
//     };

//     const handleWarpDriveSelection = (enabled, price) => {
//         const newWarpDrive = { enabled, price };
//         setWarpDrive(newWarpDrive);
//         updateTotal(color, power, newWarpDrive, optionPackage);
//     };

//     const handlePackageSelection = (name, price) => {
//         const newOptionPackage = { name, price };
//         setOptionPackage(newOptionPackage);
//         updateTotal(color, power, warpDrive, newOptionPackage);
//     };

//     return (
//         <div className="configurator-container">
//             <h1>Spaceship configurator</h1>
//             <div className="configurator">
//                 {/* Color selection */}
//                 <div className="section">
//                     <h3>Select color:</h3>
//                     <div className="options">
//                         <button className="color-option snow" onClick={() => handleColorSelection('Snow', 0)}>Snow <span>+0€</span></button>
//                         <button className="color-option volcano" onClick={() => handleColorSelection('Volcano', 100)}>Volcano <span>+100€</span></button>
//                         <button className="color-option sky" onClick={() => handleColorSelection('Sky', 100)}>Sky <span>+100€</span></button>
//                     </div>
//                 </div>

//                 {/* Power selection */}
//                 <div className="section">
//                     <h3>Select power:</h3>
//                     <div className="options">
//                         <button className="power-option" onClick={() => handlePowerSelection('100 MW', 0)}>100 MW <br /><span>+0€</span></button>
//                         <button className="power-option selected" onClick={() => handlePowerSelection('150 MW', 200)}>150 MW <br /><span>+200€</span></button>
//                         <button className="power-option" onClick={() => handlePowerSelection('200 MW', 500)}>200 MW <br /><span>+500€</span></button>
//                     </div>
//                 </div>

//                 {/* Warp drive selection */}
//                 <div className="section">
//                     <h3>Warp drive:</h3>
//                     <div className="options">
//                         <button className="warp-option selected" onClick={() => handleWarpDriveSelection(false, 0)}>NO <span>+0€</span></button>
//                         <button className="warp-option" onClick={() => handleWarpDriveSelection(true, 1000)}>YES <span>+1000€</span></button>
//                     </div>
//                 </div>

//                 {/* Option package selection */}
//                 <div className="section">
//                     <h3>Select option package:</h3>
//                     <div className="options">
//                         <button className="package-option basic" onClick={() => handlePackageSelection('Basic', 0)}>Basic <span>+0€</span></button>
//                         <button className="package-option sport" onClick={() => handlePackageSelection('Sport', 100)}>Sport <span>+100€</span></button>
//                         <button className="package-option lux" onClick={() => handlePackageSelection('Lux', 500)}>Lux <span>+500€</span></button>
//                     </div>
//                 </div>

//                 {/* Pricing panel */}
//                 <div className="price-panel">
//                     <p>Base price: {basePrice}€</p>
//                     <p>Color: {color.name} +{color.price}€</p>
//                     <p>Power: {power.level} +{power.price}€</p>
//                     <p>Warp drive: {warpDrive.enabled ? 'YES' : 'NO'} +{warpDrive.price}€</p>
//                     <p>Option package: {optionPackage.name} +{optionPackage.price}€</p>
//                     <p>Total: {total}€</p>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Configurator;



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setColor, setPower, setWarpDrive, setOptionPackage } from './spaceshipSlice';
import { setColor,setPower,setWarpDrive,setOptionPackage } from '../Redux/SpaceshipSlice';
import './Configurator.css';

const Configurator = () => {
    const dispatch = useDispatch();
    
    // Retrieve the spaceship configuration state from the Redux store
    const { basePrice, color, power, warpDrive, optionPackage, total } = useSelector((state) => state.spaceship);

    return (
        <div className="configurator-container">
            <h1>Spaceship configurator</h1>
            <div className="configurator">
                {/* Color selection */}
                <div className="section">
                    <h3>Select color:</h3>
                    <div className="options">
                        <button className="color-option snow" onClick={() => dispatch(setColor({ name: 'Snow', price: 0 }))}>Snow <span>+0€</span></button>
                        <button className="color-option volcano" onClick={() => dispatch(setColor({ name: 'Volcano', price: 100 }))}>Volcano <span>+100€</span></button>
                        <button className="color-option sky" onClick={() => dispatch(setColor({ name: 'Sky', price: 100 }))}>Sky <span>+100€</span></button>
                    </div>
                </div>

                {/* Power selection */}
                <div className="section">
                    <h3>Select power:</h3>
                    <div className="options">
                        <button className="power-option" onClick={() => dispatch(setPower({ level: '100 MW', price: 0 }))}>100 MW <br /><span>+0€</span></button>
                        <button className="power-option selected" onClick={() => dispatch(setPower({ level: '150 MW', price: 200 }))}>150 MW <br /><span>+200€</span></button>
                        <button className="power-option" onClick={() => dispatch(setPower({ level: '200 MW', price: 500 }))}>200 MW <br /><span>+500€</span></button>
                    </div>
                </div>

                {/* Warp drive selection */}
                <div className="section">
                    <h3>Warp drive:</h3>
                    <div className="options">
                        <button className="warp-option selected" onClick={() => dispatch(setWarpDrive({ enabled: false, price: 0 }))}>NO <span>+0€</span></button>
                        <button className="warp-option" onClick={() => dispatch(setWarpDrive({ enabled: true, price: 1000 }))}>YES <span>+1000€</span></button>
                    </div>
                </div>

                {/* Option package selection */}
                <div className="section">
                    <h3>Select option package:</h3>
                    <div className="options">
                        <button className="package-option basic" onClick={() => dispatch(setOptionPackage({ name: 'Basic', price: 0 }))}>Basic <span>+0€</span></button>
                        <button className="package-option sport" onClick={() => dispatch(setOptionPackage({ name: 'Sport', price: 100 }))}>Sport <span>+100€</span></button>
                        <button className="package-option lux" onClick={() => dispatch(setOptionPackage({ name: 'Lux', price: 500 }))}>Lux <span>+500€</span></button>
                    </div>
                </div>

                {/* Pricing panel */}
                <div className="price-panel">
                    <p>Base price: {basePrice}€</p>
                    <p>Color: {color.name} +{color.price}€</p>
                    <p>Power: {power.level} +{power.price}€</p>
                    <p>Warp drive: {warpDrive.enabled ? 'YES' : 'NO'} +{warpDrive.price}€</p>
                    <p>Option package: {optionPackage.name} +{optionPackage.price}€</p>
                    <p>Total: {total}€</p>
                </div>

            </div>
        </div>
    );
};

export default Configurator;
