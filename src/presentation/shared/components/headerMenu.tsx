import style from '../styles/headerMenu.module.scss';

function HeaderMenu() {
    const headerList = [{
        headerTitle: 'Dashboard',
        icon: '/src/assets/images/dashboard.svg'
    }, {
        headerTitle: 'Guide',
        icon: '/src/assets/images/guide.svg'
    }, {
        headerTitle: 'Biblioteca',
        icon: '/src/assets/images/biblioteca.svg'
    }, {
        headerTitle: 'Progresso',
        icon: '/src/assets/images/progresso.svg'
    }]
    return (
        <div className={style.bg_items_header}>
            <div className={style.header_styles}>
            <div className={style.header_logo}>
                <img id={style.header_logo_home} src="/src/assets/images/logo.svg" alt="header_logo"/>
            </div>

            <div className={style.header_container_items}>
                <div className={style.header_container_styles}>
                    <ul className={style.header_items_list}>
                        {headerList.map((item, index) => (
                            <><img id={style.home_icon} src={ item.icon } alt="" /><li className={style.header_item_list}>{item.headerTitle}</li></>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default HeaderMenu