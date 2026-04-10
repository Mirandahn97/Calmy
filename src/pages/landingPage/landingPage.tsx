import style from './landingPage.module.scss'
import landingpage from '../../assets/Img/landingpage.png'
import {Button} from '../../components/Button/Button'
import { useNavigate } from 'react-router'


export function LandingPage() {
    const navigate = useNavigate()

    return(
        <>
        <section className={style.landingSite}>
        <img src={landingpage} alt="" />
        <div>
        <Button onClick={() => navigate("/startpage")}>Begin your journey here</Button>
        </div>
        </section>
        </>
    )
}