
import style from '../styles/bannerHome.module.scss';
import banner1 from '/src/assets/images/bannerHomeBackground.png';
import banner2 from '/src/assets/images/bannerHomeBackground2.png';

function BannerHome() {
    return (
        <div className={style.bannerHome_items}>
            <div className={style.bannerHome_style1}>
                <img id={style.bannerHome_item} src={ banner1 } alt="banner1_Home"/>
                <div className={style.anuncied_items_banner}>
                    <div className='anuncied_items_style'>
                        <p id={style.text_banner_home}>01 | Exclusivos para alunos WOL</p>
                    </div>
                </div>
            </div>

            <div className={style.bannerHome_style2}>
                <img id={style.bannerSecondaryHome_item} src={ banner2 } alt="banner2_home"/>
            </div>

            
        </div>
    );
}

export default BannerHome