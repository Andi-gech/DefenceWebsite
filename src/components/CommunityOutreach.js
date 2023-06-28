import React, { useState } from "react";
import CommunityCard from "./CommunityCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import banner from "../Assets/banner.jpg";

function CommunityOutreach({ news }) {
  const [currentCard, setCurrentCard] = useState(0);

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % news.length);
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + news.length) % news.length);
  };

  return (
    <div className="CommunityOutreach">
      <div className="CommunityOutreachheads">CommunityOutreach</div>
      <div className="Communitycardsout">
        <FaArrowCircleLeft onClick={goToPrevCard} size={30} color="gray" />
        <div className="Communitycards">
          <CommunityCard
            name={news[currentCard].Title}
            banner={news[currentCard].image}
          />
        </div>
        <FaArrowCircleRight onClick={goToNextCard} size={30} color="gray" />
      </div>
    </div>
  );
}

export default CommunityOutreach;
