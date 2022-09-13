
import bannerVideo1 from '/src/assets//images/desktop-new-york-t3-documentary-player.png';
import playButton from '/src/assets/images/thumb-play.39d893e6.svg';
import PlayLess from '/src/assets/images/play-lesson.dc20f722.svg';
import favItem from '/src/assets/images/fav-flag.fb632623.svg';

import style from '../styles/videoCardAluno.module.scss';

function VideoCardAluno() {
    return (
        <div className={style.video_card_items}>
            <div className={style.video_card_style}>
                <div className={style.thumb_video}>
                    <img id={style.banner_video} src={ bannerVideo1 } alt="banner_vieo" />
                    <div className={style.play_button}>
                        <img src={ playButton } alt=""/>
                    </div>

                    <div className={style.prev_video_items}>
                        <div className={style.prev_video}>
                            <p id={style.video_title_text}>Times Square</p>
                            <div className={style.video_progress}>
                                <div className={style.progress_bar}></div>
                            </div>
                            <span id={style.progress_count}>0%</span>
                        </div>

                        <div className={style.bottom_text}>
                            <span className={style.group_video_text}>
                                <img id={style.play_less} src={ PlayLess } alt="play_less"/>
                                Vídeo: Documentário
                            </span>
                        </div>

                        <div className={style.favotite_items}>
                            <img id={style.fav_icon} src={ favItem } alt="" />
                            <span id={style.fav_text}>Favoritos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCardAluno