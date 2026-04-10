import style from './Nav.module.scss'
import house from '../../assets/Img/house.svg'
import cloud from '../../assets/Img/cloud.svg'
import pen from '../../assets/Img/pen.svg'
import smily from '../../assets/Img/smily.svg'
import music from '../../assets/Img/music.svg'

import { NavLink } from 'react-router'

export function Nav() {

    return (
        <nav className={style.navStyle}>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img className={style.navImg} src={house} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <img className={style.navImg} src={cloud} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <img className={style.navImg} src={pen} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <img className={style.navImg} src={smily} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <img className={style.navImg} src={music} alt="" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}