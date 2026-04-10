import type React from 'react'
import style from './Button.module.scss'


type ButtonProps = {
    as?: React.ElementType
    children?: React.ReactNode
} & React.ComponentPropsWithoutRef<any>

export function Button({as: Component = 'button', children, ...props}: ButtonProps) {

    return (
        <>
           <Component className= {style.btn ?? ''} {...props}>
            {children} 
           </Component>
        </>
    )
}