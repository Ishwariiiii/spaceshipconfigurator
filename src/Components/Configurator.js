import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setOptionPackage, setPower, setWarpDrive } from '../Redux/SpaceshipSlice';
import './Configurator.css';

const Configurator = () => {
    const dispatch = useDispatch()
    const { basePrice, color, power, warpDrive, optionPackage, total } = useSelector((state) => state.spaceship);

    const [selectedColor, setSelectedColor] = useState(
        { name: null, price: 0 })
    const [selectedPower, setSelectedPower] = useState(
        { level: null, price: 0 })
    const [selectedWarpDrive, setSelectedWarpDrive] = useState(
        { enabled: null, price: 0 })
    const [selectedOptionPackage, setSelectedOptionPackage] = useState(
        { name: null, price: 0 })

    const handleColorSelect = (name, price) => {
        const colorObj = { name, price }
        dispatch(setColor(colorObj))
        setSelectedColor(colorObj)
    }

    const handlePowerSelect = (level, price) => {
        const powerObj = { level, price }
        dispatch(setPower(powerObj))
        setSelectedPower(powerObj)
    }

    const handleWarpDriveSelect = (enabled, price) => {
        const warpDriveObj = { enabled, price }
        dispatch(setWarpDrive(warpDriveObj))
        setSelectedWarpDrive(warpDriveObj)
    }

    const handleOptionPackageSelect = (name, price) => {
        const optionPackageObj = { name, price }
        dispatch(setOptionPackage(optionPackageObj))
        setSelectedOptionPackage(optionPackageObj)
    }

    return (
        <div className="configurator-container">
            <h1 className='heading-1'>Spaceship configurator</h1>
            <div className="configurator">
                <div className="section">
                    <h3 className='heading-2'>Select color:</h3>
                    <div className="all box">
                        <div className={`container ${selectedColor.name === "snow" ? "selected" : ""}`}
                            onClick={() => handleColorSelect("snow", 0)}>
                            <div className="white-box"></div>
                            <div className="price">+0€</div>
                            <div className="title">Snow</div>
                        </div>
                        <div className={`container ${selectedColor.name === "Volcano" ? "selected" : ""}`}
                            onClick={() => handleColorSelect("Volcano", 100)}>
                            <div className="orange-box"></div>
                            <div className="price">+100€</div>
                            <div className="title">Volcano</div>
                        </div>
                        <div className={`container ${selectedColor.name === "Sky" ? "selected" : ""}`}
                            onClick={() => handleColorSelect("Sky", 100)}>
                            <div className="sky-box"></div>
                            <div className="price">+100€</div>
                            <div className="title">Sky</div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h3 className='heading-3'>Select power:</h3>
                    <div className="options">
                        <button className={`power-option ${selectedPower.level === "100 MW" ? "selected" : ""}`}
                            onClick={() => handlePowerSelect('100 MW', 0)}>100 MW <br /><span>+0€</span></button>
                        <button className={`power-option ${selectedPower.level === "150 MW" ? "selected" : ""}`}
                            onClick={() => handlePowerSelect('150 MW', 200)}>150 MW <br /><span>+200€</span></button>
                        <button className={`power-option ${selectedPower.level === "200 MW" ? "selected" : ""}`}
                            onClick={() => handlePowerSelect('200 MW', 500)}>200 MW <br /><span>+500€</span></button>
                    </div>
                </div>
                <div className="section">
                    <h3 className='heading-4'>Warp drive:</h3>
                    <div className="options">
                        <button className={`warp-option ${selectedWarpDrive.enabled === false ? "selected" : ""}`}
                            onClick={() => handleWarpDriveSelect(false, 0)}>NO <br /><span>+0€</span></button>
                        <button className={`warp-option ${selectedWarpDrive.enabled === true ? "selected" : ""}`}
                            onClick={() => handleWarpDriveSelect(true, 1000)}>YES <br /><span>+1000€</span></button>
                    </div>
                </div>
                <div className="section">
                    <h3 className='heading-5'>Select option package:</h3>
                    <div className="options">
                        <button className={`package-option ${selectedOptionPackage.name === "basic" ? "selected" : ""}`}
                            onClick={() => handleOptionPackageSelect('basic', 0)}>
                            <span>Basic</span><br />
                            <div className='lines'>
                                <span>Air conditioning</span><br />
                                <span>Cloth seats</span><br />
                                <span>Fm radio</span><br />
                            </div>
                        </button>
                        <button className={`package-option ${selectedOptionPackage.name === "Sport" ? "selected" : ""}`}
                            onClick={() => handleOptionPackageSelect('Sport', 100)}>
                            <span>Sport</span><br />
                            <span>+100€</span><br />
                            <div className='lines'>
                                <span>Air conditioning</span><br />
                                <span>Cloth seats</span><br />
                                <span>Fm radio</span><br />
                                <span>Personal tech support</span><br />
                            </div>
                        </button>
                        <button className={`package-option ${selectedOptionPackage.name === "lux" ? "selected" : ""}`}
                            onClick={() => handleOptionPackageSelect('lux', 500)}>
                            <span>Lux</span><br />
                            <span>+500€</span><br />
                            <div className='lines'>
                                <span>Air conditioning</span><br />
                                <span>Luxury seats</span><br />
                                <span>Fm radio</span><br />
                                <span>Chrome wheels</span><br />
                                <span>Window tint</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="price-panel">
                    <p>Base price: {basePrice}€</p>
                    <p>Color: {selectedColor.price}€</p>
                    <p>Power: {selectedPower.price}€</p>
                    <p>Warp drive: {selectedWarpDrive.price}€</p>
                    <p>Option package: {selectedOptionPackage.price}€</p>
                    <p className='total'>Total: {total}€</p>
                </div>
            </div>
        </div>
    );
};

export default Configurator;
