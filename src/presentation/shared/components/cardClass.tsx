
import setaRightIcon from '/src/assets/next-seta.svg';
import badgeIcon from '/src/assets/images/off-4.svg';

import style from '../styles/cardClass.module.scss';

function CardClass() {
    const cardClassItem =[{
        imageCardClass: '/src/assets/images/new-york-button.jpg',
        numberCards: '/src/assets/images/1.5f8804e9.svg',
        titleVideoCard: 'Nova York'
    }, {
        imageCardClass: '/src/assets/images/san-francisco-button.jpg',
        numberCards: '/src/assets/images/2.891acd32.svg',
        titleVideoCard: 'Nova York' 
    }, {
        imageCardClass: '/src/assets/images/miami-button.jpg',
        numberCards: '/src/assets/images/3.a93b361c.svg',
        titleVideoCard: 'Nova York'
    }, {
        imageCardClass: '/src/assets/images/philadelphia-button.jpg',
        numberCards: '/src/assets/images/4.2849d0de.svg',
        titleVideoCard: 'Nova York'
    }]
    return (
        <div className={style.bg_items}>
            <div className={style.cards_title_home_container}>
                <div className={style.cards_title_home_style}>
                    <h2 className={style.title_class}>Cities</h2>
                    <div className={style.moreItemClass}>
                        <a id={style.itemClassLink} href="#">
                            <span className={style.textClassLink}>Ver Todos</span>
                        </a>
                        <div className={style.seta_right_class}>
                            <img id={style.seta_class_icon} src={ setaRightIcon } alt="seta_link_class"/>
                        </div>
                    </div>
                    <div className={style.subTextCardClassItem}>
                        <span className={style.subTextCardClass}>Escolha um módulo que deseja estudar</span>
                    </div>
                </div>
            </div>
            <div className={style.cards_class_all}>
                <div className={style.cards_class_style}>
                    {cardClassItem.map((item, index) => (
                        <div className={style.card_class_home_items}>
                        <div className={style.card_class_home_container}>
                            <img id={style.banner_card_class_home} src={ item.imageCardClass } alt="image_card_class"/>
                            <div className={style.number_card_class}>
                                <img src={ item.numberCards } alt="number_card_class"/>
                            </div>
                            <div className={style.text_card_class_title}>
                                <div className={style.title_video_class_banner}>
                                    <p className={style.tile_video_class}>{ item.titleVideoCard }</p>
                                </div>
                                <div className={style.card_progress_class_items}>
                                    <div className={style.card_progress_class_styles}>
                                        <div className={style.progress_bar_class}></div>
                                        <div className={style.bagde_card_class_items}>
                                            <div className={style.bagde_class_styles}>
                                                <div className={style.count_bagde_container}>
                                                    <p id={style.count_badge_class}>0/5</p>
                                                </div>
                                                <div className={style.bagde_icon_container}>
                                                    <img id={style.badge_icon_class} src={ badgeIcon } alt="badge_icon_class"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}    
                </div>
            </div>
        </div>
        
    );
}

export default CardClass