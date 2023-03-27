import './styles.css'

export function Result(data){

    const vehicle = data.data

    


    return (
        <div className='result'>
            <table>
                <thead>
                    <tr><td colSpan={2}>Resultado</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Mês referência</th>
                        <td>{vehicle.MesReferencia}</td>
                    </tr>
                    <tr>
                        <th>Código Fipe</th>
                        <td>{vehicle.CodigoFipe}</td>
                    </tr>
                    <tr>
                        <th>Marca</th>
                        <td>{vehicle.Marca}</td>
                    </tr>
                    <tr>
                        <th>Modelo</th>
                        <td>{vehicle.Modelo}</td>
                    </tr>
                    <tr>
                        <th>Ano modelo</th>
                        <td>{vehicle.AnoModelo}</td>
                    </tr>
                    <tr>
                        <th>Valor</th>
                        <td>{vehicle.Valor}</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}