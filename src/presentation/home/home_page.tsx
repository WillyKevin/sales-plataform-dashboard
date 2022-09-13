import { useNavigate } from 'react-router-dom'; // importa a função responsável por navegar para outra página
import BannerCarrosel from '../shared/components/bannerCarrosel';
import BannerHome from '../shared/components/bannerHome';
import HeaderMenu from '../shared/components/headerMenu';

export const HomeComponent: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className='bg_img_home'>
            <div className='home_container_items'>
                <HeaderMenu />
                {/* Transformar o banner em um carrosel e fazer o width responsivo igual no projeto do destiny 2 */}
                <BannerHome />
                {/* <BannerCarrosel /> */}
                {/* Cards Aqui */}
                <div className='cards_container_items'></div>
                {/* Footer Aqui */}
                <div className='footer_container_items'></div>
            </div>
        </div>
    );
}