import './styles.css'
import { useState } from 'react'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'


import { Form } from '../Form'
import { Result } from '../Result'
export function Header({ icon, text, type }) {
    const [openForm, setOpenform] = useState(false)
    const [dataVehicle, setDataVehicle] = useState(null)
   

       return (
        <div className='containerHeader'>
            <div className='headerCard' onClick={() => setOpenform(state => !state)}>
                <h3> {icon} {text}</h3>
                {openForm ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </div>
            {openForm && <Form vehicle={type} setVehicle={setDataVehicle} />}
            {dataVehicle != null && openForm && <Result data={dataVehicle} /> } 
        </div>
    )
}