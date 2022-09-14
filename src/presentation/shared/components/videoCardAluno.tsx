
import bannerVideo1 from '/src/assets//images/desktop-new-york-t3-documentary-player.png';
import playButton from '/src/assets/images/thumb-play.39d893e6.svg';
import PlayLess from '/src/assets/images/play-lesson.dc20f722.svg';
import favItem from '/src/assets/images/fav-flag.fb632623.svg';

import style from '../styles/videoCardAluno.module.scss';

function VideoCardAluno() {
    return (
        <div className={style.video_card_items}>
            <div className={style.video_card_style}>
                    <img id={style.banner_video_style} src={ bannerVideo1 } alt="banner_video" />
                    <div className={style.video_card_style_gradient}>
                        <div className='button_play_style'>
                            <img id={style.button_play_video} src={ playButton } alt="play_button"/>
                        </div>
                    </div>  

                    <div className={style.time_video_style}>
                        <div className={style.time_video_informations}>
                            <div className={style.description_video_text}>
                                <p id={style.video_text}>Times Square</p>
                            </div>

                            <div className={style.progress_bar_items}>
                                <div className={style.video_progress_bar}></div>
                                <span className={style.video_porcentage}>0%</span>
                            </div> 

                            <div className={style.description_video_style}>
                                <div className={style.descriptions_items}>
                                    <img id={style.play_less_video} src={ PlayLess } alt="seta_next"/>
                                    <p className={style.description_video_bottom}>Video: Documentário</p>
                                </div>

                                <div className={style.items_fav}>
                                    <div className={style.items_fav_video}>
                                        <img id={style.fav_item} src={ favItem } alt="FavItem"/>
                                        <p id={style.text_fav}>Favoritos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       
            </div>
        </div>
    );
}

export default VideoCardAluno