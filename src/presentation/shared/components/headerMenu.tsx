import style from '../styles/headerMenu.module.scss';

function HeaderMenu() {
    return (
        <div className={style.header_styles}>
            <div className={style.header_logo}>
                <img id={style.header_logo_home} src="/src/assets/images/logo.svg" alt="header_logo"/>
            </div>
        </div>
    );
}

export default HeaderMenu