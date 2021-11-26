interface painelProps{
    children?:any
    side?:any 
}

import style from '../styles/Home.module.css'

export default function Painel(props: painelProps) {
    return (
        <>
            <div className={style.painelteste} aria-hidden="true">                
                <div className='p-10'>
                        {props.children}
                </div>
            </div>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <div className="relative w-screen max-w-md">
       
                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                        <div className="px-4 sm:px-6">
                            <h2 className="text-lg font-medium  " id="slide-over-title">
                                contextAPI / useReducer
                            </h2>
                        </div>
                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        
                            <div className="absolute inset-0 px-4 sm:px-6">
                                <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                                {props.side}  
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
       </>
    
    )
}