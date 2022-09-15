

// import banner1 from '/src/assets/images/bannerHomeBackground.png';
// import banner2 from '/src/assets/images/bannerHomeBackground2.png';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import style from '../styles/bannerHome.module.scss';

// import required modules
import { Navigation } from "swiper";

function BannerHome() {
    const cardBanner = [{
        bannerCard: '/src/assets/images/bannerHomeBackground.png',
        subBannerCard: '/src/assets/images/bannerHomeBackground2.png',
        cardTitle: '01 | Exclusivo para alunos WOL' 
    }]
    return (
        <>
        <div className={style.container_sweeper_items}>
            {cardBanner.map((item, index) => (
                <div className={style.container_sweeper_style}>
                <Swiper navigation={true} modules={[Navigation]} className={style.mySwiper}>
                    <SwiperSlide className={style.slide}>
                        <div className={style.banner_position}>
                            <img className={style.bannerImageCard} src={ item.bannerCard } alt="imageBanner"/>
                        </div>
                        <div className={style.subBanner_position}>
                            <img className={style.bannerImageCard2} src={ item.subBannerCard } alt="imageBanner2"/>
                        </div>
                        <div className={style.text_title_items}>
                            <div className={style.text_title_style}>
                                <p className={style.text_card_title}>{ item.cardTitle }</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Deixar os cards automaticos para criar igual nos videos */}
                    <SwiperSlide className={style.slide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 4</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 5</SwiperSlide>
                </Swiper>
            </div>
            ))}
            
        </div>
        
    </>
    );
}

export default BannerHome