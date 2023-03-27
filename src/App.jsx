
import './App.css'


//Components
import { Accordion } from './components/Accordion'


//icons
import { AiFillCar } from 'react-icons/ai'
import { FaTruck, FaMotorcycle } from 'react-icons/fa'


function App() {
  const dataNow = new Date().toLocaleDateString('pt-br')

  return (
    <div className="App">
      <h1>Consulta de Tabela Fipe</h1>
      <p>Aqui você consegue saber o valor do seu veículo atualizada na data de {dataNow}</p>
      <div className="container">
        <Accordion icon={<AiFillCar />} text={'Consulta de carros e útilitarios pequenos'} type={'carros'} />
        <Accordion icon={<FaTruck />} text={'Consulta de Caminhões e Micro-Onibus'} type={'caminhoes'} />
        <Accordion icon={<FaMotorcycle />} text={'Consulta de Motos'} type={'motos'} />
      </div>


    </div>
  )
}

export default App
