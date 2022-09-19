
import icon1 from '/src/assets/images/prancheta.bd02f980.svg';
import icon2 from '/src/assets/images/play_preview.svg';

import style from '../styles/videoBodyAluno.module.scss';
import ButtonForm from './buttonFinishForm';

function VideoBodyAluno() {
    const cardQuestions = [{
        numberQuestion: '01.',
        questionText: 'Marque a opção que indica uma parte do dia.',
        question1: 'place',
        question2: 'square',
        question3: 'evening'

    }, {
        numberQuestion: '02.',
        questionText: 'Marque a opção que pode ser traduzida como “enorme”.',
        question1: 'screens',
        question2: 'brilliant',
        question3: 'huge'
    }, {
        numberQuestion: '03.',
        questionText: 'Marque a opção que significa ”ano”.',
        question1: 'year',
        question2: 'month',
        question3: 'day'
    }, {
        numberQuestion: '04.',
        questionText: 'Marque a opção que pode ser traduzida como ”um”.',
        question1: 'the',
        question2: 'of',
        question3: 'a'
    }]
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
                    {/* Questions Cards */}
                </div>
                <div className={style.container_questions}>
                        {cardQuestions.map((item, index) => (
                        <div className={style.container_questions_style}>
                            <div className={style.question_title_items}>
                                <p className={style.question_number}>{item.numberQuestion}</p>
                                <span className={style.question_text}>{item.questionText}</span>
                            </div>

                            <div className={style.subtitle_preview_items}>
                                <button id={style.play_preview_item}>
                                    <div className={style.button_play_icon}>
                                        <img id={style.button_preview_play} src={ icon2 } alt="button_preview_play" />
                                    </div>
                                </button>
                                <span className={style.subtext_video_preview}>Times <strong>Square</strong> is the <strong>place</strong> to go in the <strong>evening</strong>.</span>
                            </div>
                            
                            <div className={style.video_preview_items}>
                                <div className={style.video_preview_style}>
                                    <p id={style.question_response}>{ item.question1 }</p>
                                    <span className={style.check_icon}></span>
                                </div>
                            </div>
                            <div className={style.video_preview_items}>
                                <div className={style.video_preview_style}>
                                    <p id={style.question_response}>{ item.question2 }</p>
                                </div>
                            </div>
                            <div className={style.video_preview_items}>
                                <div className={style.video_preview_style}>
                                    <p id={style.question_response}>{ item.question3 }</p>
                                </div>
                            </div> 
                        </div>
                        ))}
                        
                    </div>
                    {/* Botão de concluir teste */}
                    <ButtonForm />
            </div>
        </div>
    );
}

export default VideoBodyAluno