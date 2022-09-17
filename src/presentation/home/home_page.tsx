import { useNavigate } from 'react-router-dom'; // importa a função responsável por navegar para outra página

import BannerHome from '../shared/components/bannerHome';
import HeaderMenu from '../shared/components/headerMenu';
import CardClass from './../shared/components/cardClass';

export const HomeComponent: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className='bg_img_home'>
            <div className='home_container_items'>
                <HeaderMenu />
                {/* Transformar o banner em um carrosel e fazer o width responsivo igual no projeto do destiny 2 */}
                <BannerHome />
                {/* Cards Aqui */}
                <CardClass />
                <CardClass />
                {/* Footer Aqui */}
                <div className='footer_container_items'></div>
            </div>
        </div>
    );
}