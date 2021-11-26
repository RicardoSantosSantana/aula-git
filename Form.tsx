import Input from './Input'
import Botao from './Button'
import { useContext } from 'react'
import {AppContext} from '../AppContext/Clientes'


export default function Form(props) {

    const {state, dispatch} = useContext(AppContext)
   
    function changeName(e){
        dispatch({type:'changeName',payload:e})
    }
    function changeEmail(e){
        dispatch({type:'changeEmail',payload:e})
    }
    
    return (

        <form className="flex flex-col max-w-sm">
            <Input changeValue={changeName} value={state.name} label="Nome" type="text"></Input>
            <Input changeValue={changeEmail} value={state.email} label="E-Mail"  type="email"></Input>
            <div className="flex items-center justify-center ">
                <Botao label="Enviar nome"></Botao>
            </div>
           
        </form>
    )
}