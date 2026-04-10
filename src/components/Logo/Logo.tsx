import logo from '../../assets/Img/logo.png'
import style from './Logo.module.scss'

export function Logo() {

    return(
        <>
        <img className={style.logo} src={logo} alt="" />
        </>
    )
}