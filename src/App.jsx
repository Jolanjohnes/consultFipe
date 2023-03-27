
import './App.css'

//Components
import { Header } from './components/Header'

//icons
import { AiFillCar } from 'react-icons/ai'
import { FaTruck, FaMotorcycle } from 'react-icons/fa'


function App() {

  return (
    <div className="App">
      <div className="container">
        <Header icon={<AiFillCar />} text={'Consulta de carros e útilitarios pequenos'} type={'carros'}/>
        <Header  icon={<FaTruck />} text={'Consulta de Caminhões e Micro-Onibus'} type={'caminhoes'}/>
        <Header  icon={<FaMotorcycle />} text={'Consulta de Motos'} type={'motos'}/>   
      </div>
    </div>
  )
}

export default App
