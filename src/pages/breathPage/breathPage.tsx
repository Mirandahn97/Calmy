import style from './breathPage.module.scss'

export function BreathPage() {

    return (
        <>
            <div className={style.dotContainer}>
                <div className={style.backgroundGradient}></div>
                <p className={style.test}>Breath</p>
                <div className={style.dot}></div>
            </div>

        </>
    )
}