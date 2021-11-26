interface inputProps {
    type?: 'text' | 'email' | 'number'
    label:string
    value:any 
    changeValue?: (value:any) => void    
}
export default function input(props: inputProps) {
 
    return (
    <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
            <label className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                {props.label}
            </label>
        </div>
        <div className="md:w-2/3 text-white">
            <input onChange={e => props.changeValue?.(e.target.value)} type={props.type} value={props.value}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </div>
    </div>
    )
}