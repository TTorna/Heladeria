import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { IceCreamCard } from './IceCreamCard';
import { ViewAllCard } from './ViewAllCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface IceCreamCarouselProps {
  flavors: Array<{
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    tags: string[];
    isNew?: boolean;
    isRecommended?: boolean;
    isTacc?: boolean;
  }>;
}

export function IceCreamCarousel({ flavors }: IceCreamCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="pb-12 pt-3"
      >
        {flavors.map((flavor, index) => (
          <SwiperSlide key={index}>
            <IceCreamCard {...flavor} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <ViewAllCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}