import { useState } from 'react'


function AdicionarTarefa() {
    const [visivel, invisivel] = useState(false)

    return (
        <div>
            <button onClick={() => invisivel(true)}>+</button>
            {visivel && <input type='text' placeholder='Qual sua tarefa ?'/>}
            {visivel && <input type='date'/>}
            {visivel && <button onClick={() => invisivel(false)}>adicionar</button>}
        </div>
    )
}

export default AdicionarTarefa