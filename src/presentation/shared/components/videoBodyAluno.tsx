
import icon1 from '/src/assets/images/prancheta.bd02f980.svg';

import style from '../styles/videoBodyAluno.module.scss';

function VideoBodyAluno() {
    return (
        <div className={style.body_items_video}>
            <div className={style.body_items_style}>
                <div className={style.body_description_items}>
                    <div className={style.kBoKDO}>
                        <div className={style.content_items}>
                            <img id={style.prancheta_icon} src={ icon1 } alt="prancheta_icon" />
                            <p id={style.header_text}>Respostas Corretas</p>
                            <span id={style.style_score}>0/10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoBodyAluno