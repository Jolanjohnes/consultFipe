import './styles.css'
import { useEffect, useState } from 'react'
import { fipeFetch } from '../../axios/config'
export function Form({ vehicle, setVehicle }) {
    const [marks, setMarks] = useState([])
    const [models, setModels] = useState([])
    const [years, setYears] = useState([])
    const [selectedMark, setSelectedMark] = useState(0)
    const [selectedModel, setSelectedModel] = useState(0)
    const [selectYear, setSelectedYear] = useState(0)



    async function getMarks() {
        await fipeFetch.get(`/${vehicle}/marcas`)
            .then((response) => {
                setMarks(response.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    async function getModels(value) {
        await fipeFetch.get(`/${vehicle}/marcas/${value}/modelos`)
            .then((response) => {
                setModels(response.data.modelos)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    async function getYears(value) {
        await fipeFetch.get(`/${vehicle}/marcas/${selectedMark}/modelos/${value}/anos`)
            .then((response) => {
                setYears(response.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    async function getVehicle(e) {

        e.preventDefault()



        await fipeFetch.get(`/${vehicle}/marcas/${selectedMark}/modelos/${selectedModel}/anos/${selectYear}`)
            .then((response) => {
                setVehicle(response.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    async function handleSelectedMark(e) {
        const value = e.target.value
        if (value != 0) {
            await getModels(value)
            setSelectedMark(value)
        }
    }

    async function handleSelectedModel(e) {
        const value = e.target.value
        if (value != 0) {
            await getYears(value)
            setSelectedModel(value)
        }
    }

    function handleSelectedYear(e) {
        const value = e.target.value
        if (value != 0) {
            setSelectedYear(value)
        }
    }




    useEffect(() => {
        getMarks()
    }, [])


    return (

        <form onSubmit={(e) => { getVehicle(e) }}>
            <div className='input'>
                <label htmlFor="marca">Selecione sua marca</label>
                <select name="" id="" onChange={(e) => handleSelectedMark(e)}>
                    <option value={0}>Selecione</option>
                    {
                        marks.map((mark) => {
                            return (
                                <option key={mark.codigo} value={mark.codigo}>{mark.nome}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='input'>
                <label htmlFor="modelo">Selecione seu Modelo</label>
                <select name="" id="" onChange={(e) => handleSelectedModel(e)}>
                    <option value={0}>Selecione</option>
                    {
                        models.map((model) => {
                            return (
                                <option value={model.codigo} key={model.codigo}>{model.nome}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='input'>
                <label htmlFor="ano">Selecione o ano do Veículo</label>
                <select name="" id="" onChange={(e) => { handleSelectedYear(e) }}>
                    <option value="">Selecione</option>
                    {
                        years.map((year) => {
                            return (
                                <option key={year.codigo} value={year.codigo}>{year.nome}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='btn'>
                <button type='submit'>Pesquisar</button>
            </div>
        </form>

    )
}