
import style from '../styles/cardClass.module.scss';

function CardClass() {
    return (
        <div className={style.bg_items}>
            <div className={style.cards_title_home_container}>
                <div className={style.cards_title_home_style}>
                    <h2 className={style.title_class}>Cities</h2>
                    <span>Escolha um módulo que deseja estudar</span>
                </div>
            </div>
            <div className={style.cards_class_all}>
                <div className={style.cards_class_style}>
                    <div className={'title_card_class'}>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CardClass