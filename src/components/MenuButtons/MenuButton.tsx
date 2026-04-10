import type React from 'react'
import style from './MenuButton.module.scss'


type ButtonProps = {
    as?: React.ElementType
    children?: React.ReactNode
} & React.ComponentPropsWithoutRef<any>

export function MenuButton({as: Component = 'button', children, ...props}: ButtonProps) {

    return (
        <>
           <Component className= {style.menuBtn ?? ''} {...props}>
            {children}
           </Component>
        </>
    )
}