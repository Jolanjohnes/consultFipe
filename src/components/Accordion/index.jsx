import './styles.css'
import { useState } from 'react'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'

import {Result} from './../Result'


import { Form } from '../Form'
export function Accordion({ icon, text, type }) {
    const [openForm, setOpenform] = useState(false)
    const [dataVehicle, setDataVehicle] = useState(null)


function handleAccodion(){
    setOpenform(state => !state)
    if(openForm==false){
        setDataVehicle(null)
    }
}
   

       return (
        <>
            <button className='accordionButton' onClick={() => handleAccodion()}>
                {icon} {text}
                {openForm ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </button>
            {openForm && <Form vehicle={type} setVehicle={setDataVehicle} />}
            {dataVehicle != null && openForm && <Result data={dataVehicle} /> } 
           
        </>
    )
}