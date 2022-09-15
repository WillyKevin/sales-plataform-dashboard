
import style from '../styles/buttonFinishForm.module.scss';

function ButtonForm() {
    const buttonText = [{
        buttonDescription: 'Concluir Step'
    }]
    return(
        <div className={style.button_form_items}>
            {buttonText.map((item, index) => (
                <button className={style.button_form_style}>
                    { item.buttonDescription }
                </button>
            ))}
        </div>
    );
}

export default ButtonForm