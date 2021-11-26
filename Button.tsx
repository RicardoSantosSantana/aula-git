interface ButtonProps { label: string }

import style from '../styles/Home.module.css'

export default function Button({ label }: ButtonProps) {
    return (
        <button className={ style.myButton } type="button">
            {label}
        </button>
    )
}