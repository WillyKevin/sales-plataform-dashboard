import style from '../styles/headerMenu.module.scss';

function HeaderMenu() {
    const headerList = [{
        headerTitle: 'Dashboard'
    }, {
        headerTitle: 'Guide'
    }, {
        headerTitle: 'Biblioteca'
    }, {
        headerTitle: 'Progresso'
    }]
    return (
        <div className={style.header_styles}>
            <div className={style.header_logo}>
                <img id={style.header_logo_home} src="/src/assets/images/logo.svg" alt="header_logo"/>
            </div>

            <div className={style.header_container_items}>
                <div className={style.header_container_styles}>
                    <ul className={style.header_items_list}>
                        {headerList.map((item, index) => (
                            <li className={style.header_item_list}>{ item.headerTitle }</li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default HeaderMenu