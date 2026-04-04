import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AchievementsPage.css";

const achievements = [
  {
    title: "Program Representative 2024-25",
    desc: "Awarded for serving as Program Representative of Software Engineering branch for the academic session 22-23",
    image: "images/vit.jpg",
    link: "https://drive.google.com/file/d/1KW3km6yKEAjAfChl3gih8njD9GpdPpKG/view?usp=sharing",
  },
  {
    title: "Merit Scholarship 2024-25",
    desc: "Awarded merit scholarship for securing Eighth rank in the branch during the academic session 2022-23",
    image: "images/vit.jpg",
    link: "https://drive.google.com/file/d/1KcT-WoIkMKNKpAIhgMSPj6iS6jSuVDLo/view?usp=sharing",
  },
  {
    title: "Merit Scholarship 2023-24",
    desc: "Awarded merit scholarship for securing first rank in the branch during the academic session 2023-24",
    image: "images/vit.jpg",
    link: "https://drive.google.com/file/d/1f5dLg9OnJqCOSdtiMqpaVI_HXQvN1HUR/view?usp=sharing",
  },
  {
    title: "Ecovision Hackathon, VIT Vellore",
    desc: "Secured 2nd position at EcoVision Hackathon 2023 (5th Pillar, VIT)",
    image: "images/vit.jpg",
    link: "https://drive.google.com/file/d/1-5RcUS9Gx_zYzCANkZWqbSAL_lIBEjzB/view?usp=sharingf",
  }
];

function AchievementsPage() {
  return (
    <div className="achievements-container" id="achievements">
      <h2 className="section-title">My Achievements</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {achievements.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="achievement-card">
              <img src={item.image} alt={item.title} className="achievement-img" />
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a
                  href={item.link}
                  className="learn-more-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AchievementsPage;
