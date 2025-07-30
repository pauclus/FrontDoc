import Buscador from '../../general/components/Buscador';

export const Detalles = ()=>{
    return (
        <div style={{flex: '1'}}>
            <span style={{flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                <h1>Detalles</h1>
            </span>
            <div style={{height:'80%', border: '1px solid black', width:'100%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-around'}}>
                <Buscador titulo='Perro' />
            </div>
        </div>
    )
}