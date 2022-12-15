import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {  useSelector } from 'react-redux';

import s from './Filter.module.css';

export default function Filter({setBovine, setDevice, filtro}) {
    const { allBovines } = useSelector((state) => state.bovinesReducer);
    const [ selectPotrero, setSelectPotrero ] = React.useState('Filtrar por potrero');
    const [ selectDevice, setSelectDevice ] = React.useState('Filtrar por dispositivo');
    const devices = ["COLLAR", "CARAVANA"];

    const handlePotrero = (e) => {
        e.preventDefault();
        if(e.target.attributes[0].nodeValue === 'Filtrar por potrero'
        ) {
            setBovine('')
            setDevice('')
        } else {
            setBovine(e.target.attributes[0].nodeValue)
            setDevice('')
        }
        setSelectPotrero(e.target.attributes[0].nodeValue)
    };

    const handleDevice = (e) => {
        e.preventDefault();
        if(e.target.attributes[0].nodeValue === 'Filtrar por dispositivo'
        ) {
            setBovine('')
            setDevice('')
        } else {
            setDevice(e.target.attributes[0].nodeValue)
            setBovine('')
        }
        setSelectDevice(e.target.attributes[0].nodeValue)
    };


  return (
    <div>
        {
            filtro === 'Filtrar por potrero' ?
            <DropdownButton className={s.filter_select}
            id="dropdown-basic-button"
            title={ selectPotrero }
            variant="secondary"
            >
                <Dropdown.Item
                value={filtro}
                onClick={(e) => handlePotrero(e)}
                >
                    {filtro}
                </Dropdown.Item>
                { allBovines[0]?.names?.length > 0 && allBovines[0]?.names.map((potrero, index) => {
                    return (
                    <Dropdown.Item 
                        key={index} 
                        value={potrero} 
                        onClick={(e) => handlePotrero(e)}> { potrero }</Dropdown.Item>)
                })}
        
            </DropdownButton>:
            <DropdownButton
            className={s.filter_select}
            id="dropdown-basic-button"
            title={ selectDevice }
            variant="secondary"
            >
                <Dropdown.Item
                value={filtro}
                onClick={(e) => handleDevice(e)}
                >
                    {filtro}
                </Dropdown.Item>
                { devices?.length > 0 && devices?.map((device, index) => {
                    return (
                    <Dropdown.Item 
                        key={index} 
                        value={device} 
                        onClick={(e) => handleDevice(e)}> { device }</Dropdown.Item>)
                })}
        
            </DropdownButton>
        }
    </div>
  );
}
