import style from './menu.module.css'


export const menu = (props) => {
    return(
        <>
        <nav className={style.navbar}>
            <p><a href="#s1">{props.option01}</a></p>
            <p><a href="#s2">{props.option02}</a></p>
            <p><a href="#s3">{props.option03}</a></p>
            <p><a href="../Contact.jsx">{props.option04}</a></p>
        </nav>
        </>
    )
}
