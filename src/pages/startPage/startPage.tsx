import { useNavigate } from "react-router"
import { Logo } from "../../components/Logo/Logo"
import { MenuButton } from "../../components/MenuButtons/MenuButton"
import style from './startpage.module.scss'
import { QuoteFetch } from "../../components/QuoteFetch/QuoteFetch"

export function StartPage() {
    const navigate = useNavigate()

    return (
        <>
        <section className={style.startStyle}>
        <Logo></Logo>
        <QuoteFetch />
        <div className={style.menuDiv}>
            <MenuButton onClick={() => navigate("/breathpage")}>Breath</MenuButton>
            <MenuButton onClick={() => navigate("/moodpage")}>Mood</MenuButton>
            <MenuButton onClick={() => navigate("/diarypage")}>Diary</MenuButton>
            <MenuButton onClick={() => navigate("/soundpage")}>Sounds</MenuButton>
        </div>
        </section>
        </>
    )
}