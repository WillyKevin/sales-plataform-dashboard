import { useNavigate } from 'react-router-dom'; // importa a função responsável por navegar para outra página
import VideoCardAluno from '../../shared/components/videoCardAluno';
import HeaderMenu from './../../shared/components/headerMenu';
import VideoBodyAluno from './../../shared/components/videoBodyAluno';

export const CardVideoComponent: React.FC = () => {
    return (
        <div className='body_items_all'>
            <div className='body_items'>
                {/* <HeaderMenu /> */}
                <VideoCardAluno />
                <VideoBodyAluno />
            </div>
        </div>
    );
}