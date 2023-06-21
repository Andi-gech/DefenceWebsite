import React from "react";
import newssvg from "../Assets/photo_2023-06-16_22-33-56.jpg";
import { FaCalendar, FaCalendarWeek } from "react-icons/fa";

function Newscardcomponent() {
  return (
    <div className="Newscard">
      <img src={newssvg} />
      <div className="NewsText">
        <p id="NewsTitle">
          የክልል ጊዜያት አባል የሎጣልንም መጠን፣ የሥራ ባለሙያን የክልል ምክር ቤት አቅምን አግኝተዋል የክልል ጊዜያት
          አባል የሎጣልንም መጠን፣ የሥራ
        </p>
        <p id="newsdescription">
          ክልል ምስል የስራ ባለሙያ ሲሆን አስራ ሁሉም ክልል ምክር ቤት በአጠቃቀም የሚደረግላቸውን ንብረት የሚያጣልቅ
          የሆነው ለሥራ ባለሙያን የክልል ምክር ቤት ምክር ቤት ትልቅ ጊዜያት እንዲሆኑ ከተሻሻለው የክልል ምክር ቤት
          ውስጥ የሚገኙ የተጠቀሱ አድማጮች እንዲሁም ጥራት የሚሰጥ ውጤቶችን ለመምርት በግልጽ ማዕቀብ እንደሚያስቀምጥ
          ምክርና በሰዓት በኩል በአጠቃቀም አስራ ሁሉም ሀይል ዓላማ እንዲሰጥ ማድረ
        </p>
        <p id="date">
          {" "}
          <FaCalendar size={12} color="rgb(8, 8, 54)" /> 25 jan-2015
        </p>
      </div>
    </div>
  );
}

export default Newscardcomponent;
