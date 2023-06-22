import React, { useState } from "react";
import CommunityCard from "./CommunityCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import banner from "../Assets/banner.jpg";
import banner2 from "../Assets/defenceLogo.png";
import banner3 from "../Assets/photo_2023-06-16_22-33-56.jpg";
function CommunityOutreach() {
  const cards = [
    {
      id: 1,
      title: "Defence University community news title 1 ",
      description: "defence unversity community discription 1",
      image: banner,
    },
    {
      id: 2,
      title: "Defence University community news title 2",
      description: "Defence University community discription 2",
      image: banner2,
    },
    {
      id: 3,
      title: "Defence University community news title 3",
      description: "This is the description for Card 3.",
      image: banner3,
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className="CommunityOutreach">
      <div className="CommunityOutreachheads">CommunityOutreach</div>
      <div className="Communitycardsout">
        <FaArrowCircleLeft onClick={goToPrevCard} size={30} color="gray" />
        <div className="Communitycards">
          <CommunityCard
            name={cards[currentCard].title}
            des={cards[currentCard].description}
            banner={cards[currentCard].image}
          />
        </div>
        <FaArrowCircleRight onClick={goToNextCard} size={30} color="gray" />
      </div>
    </div>
  );
}

export default CommunityOutreach;
