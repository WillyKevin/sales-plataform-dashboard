

import banner1 from '/src/assets/images/bannerHomeBackground.png';
import banner2 from '/src/assets/images/bannerHomeBackground2.png';

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
    return (
        <>
        <div className={style.container_sweeper_items}>
            <div className={style.container_sweeper_style}>
                <Swiper navigation={true} modules={[Navigation]} className={style.mySwiper}>
                    <SwiperSlide className={style.slide}>
                        <div className={style.banner_position}>
                            <img className={style.bannerImageCard} src={banner1} alt="imageBanner"/>
                        </div>
                        <div className={style.subBanner_position}>
                            <img className={style.bannerImageCard2} src={banner2} alt="imageBanner2"/>
                        </div>
                        <div className={style.text_title_items}>
                            <div className={style.text_title_style}>
                                <p className={style.text_card_title}>01 | Exclusivo para alunos WOL</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 4</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 5</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 6</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 7</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 8</SwiperSlide>
                    <SwiperSlide className={style.slide}>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
        
    </>
    );
}

export default BannerHome