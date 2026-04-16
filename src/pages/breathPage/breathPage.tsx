import style from './breathPage.module.scss'
import { Nav } from '../../components/Nav/Nav'

export function BreathPage() {

    return (
        <>
            <div className={style.dotContainer}>
                <div className={style.backgroundGradient}></div>
                <p className={style.test}></p>
                <div className={style.dot}></div>
            </div>
            <div className={style.breathing}>
                <h4>Breathing exercises</h4>
                <p>Follow the dot, and get you're breathing under controle</p>
            </div>
            <Nav></Nav>
        </>
    )
}