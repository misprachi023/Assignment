import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Image, Heading, Box } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Cards = ({ cards }) => {
	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			{cards.map((item) => {
				<SwiperSlide>
					<Box>
						<Image src={item.image} alt={item.title} />

						<Heading size="sm">{item.title}</Heading>
					</Box>
				</SwiperSlide>;
			})}
		</Swiper>
	);
};
