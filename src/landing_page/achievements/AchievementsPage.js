import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AchievementsPage.css";

const achievements = [
  {
    title: "Program Representative 2022-23",
    desc: "Awarded for serving as Program Representative of Computer Science with Bioinformatics branch for the academic session 22-23",
    image: "images/vit.jpg",
    link: "docs/pr23.pdf",
  },
  {
    title: "Merit Scholarship 2023",
    desc: "Awarded merit scholarship for securing first rank in the branch during the academic session 2022-23",
    image: "images/vit.jpg",
    link: "docs/scholarship23.pdf",
  },
  {
    title: "Merit Scholarship 2022",
    desc: "Awarded merit scholarship for securing first rank in the branch during the academic session 2021-22",
    image: "images/vit.jpg",
    link: "docs/scholarship22.pdf",
  },
  {
    title: "Program Representative 2021-22",
    desc: "Awarded for serving as Program Representative of Computer Science with Bioinformatics branch for the academic session 21-22",
    image: "images/vit.jpg",
    link: "docs/pr22.pdf",
  },
  {
    title: "VinHack 2022",
    desc: "Participated in VinHack 2022, hackathon organized by vinnovateIT, VIT",
    image: "images/vinnovateIT.jpg",
    link: "docs/vinhack22.pdf",
  },
  {
    title: "Smart India Hackathon 2022",
    desc: "Represented VIT in Smart India Hackathon 2022, hackathon by GoI at regional level",
    image: "images/sih.jpg",
    link: "docs/sih22.pdf",
  },
  {
    title: "KPMG Ideation Challenge 2022",
    desc: "Participated in KPMG Ideation Challenge 2022, ideathon organized by KPMG International",
    image: "images/kpmg.jpg",
    link: "docs/kic22.pdf",
  },
  {
    title: "Mimamsa 2022",
    desc: "Participated in the prelims of Mimamsa 2022, Science quiz organized by IISER Pune",
    image: "images/iiserPune.jpg",
    link: "docs/mimamsa.pdf",
  },
  {
    title: "Pharma Challenge 2022",
    desc: "Secured 2nd position in Pharma challenge 2022, ideation challenge organized by IIT Madras",
    image: "images/iitm.jpg",
    link: "docs/pharma.pdf",
  },
  {
    title: "Bhoomi: A Hack for Earth",
    desc: "Secured 1st position in Bhoomi: A Hack for Earth, hackathon organized by Alpha Bio Club, VIT",
    image: "images/abc.jpg",
    link: "docs/bhoomi.pdf",
  },
  {
    title: "Other Awards",
    desc: "Awarded for outstanding academics, leadership, and commendable extracurricular accomplishments during school life",
    image: "images/sts.png",
    link: "docs/otherawards.pdf",
  },
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
