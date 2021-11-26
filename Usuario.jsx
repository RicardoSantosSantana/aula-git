import { useContext } from "react"
import { AppContext } from '../AppContext/Clientes'
import Painel from '../components/Painel'
import Form from '../components/Form'

export default function Usuario(){

    const { name, email } = useContext(AppContext).state
    const side = () => 
    {
        return (
                <div className="p-10">           
                    <p><strong>Nome:  </strong> { name ?? '' } </p>
                    <p><strong>EMail: </strong> { email ?? ''}  </p>
                </div> 
            )
    }    
    return (      
        <Painel side={side()}>
            <Form>teste</Form>
        </Painel>       
    )

}
