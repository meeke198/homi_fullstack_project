import React from "react";
import { Link } from 'react-router-dom';

const Messages = [
  {
    imageUrl:
      "https://i.etsystatic.com/6862623/r/il/ae2960/2094794887/il_1588xN.2094794887_2sdq.jpg",
    title: "Gifts for her",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/8503074/r/il/d13a07/1170026953/il_1588xN.1170026953_elf8.jpg",
    title: "Personalized gifts",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/24220780/r/il/ac6c72/3328695205/il_1588xN.3328695205_gifr.jpg",
    title: "Gifts for kids",
  },
  {
    imageUrl: "https://i.etsystatic.com/31748115/r/il/f7543b/3305096856/il_1588xN.3305096856_g15r.jpg",
    title: "Seasonal Shopping"
  },
  {
    imageUrl:
      "https://i.etsystatic.com/7131834/r/il/0f8ecc/3359499994/il_1588xN.3359499994_gqsc.jpg",
    title: "On Sale",
  },
];
const MessageItem = (props) => {
  return (
    <div className="message-sub-container">
      <div className="message-block">
        <img className="message-img" src={props.imageUrl} alt="" />
        <Link to="/products/categories/sofas" className="message-title">{props.title}</Link>
      </div>
    </div>
  );
};
const Message = () => {
  return (
    <div
      style={{ paddingTop: 40, backgroundColor: "#FDEBD2", width: "100wv" }}
    >
      <h3 className="message-text" style={{ textAlign: "center", marginBottom: 30 }}>
        Bring on the holidays! Discover meaningful finds!
      </h3>
      <div className="message-container">
          {Messages.map((message, idx) => (
            <MessageItem
              key={idx}
              title={message.title}
              imageUrl={message.imageUrl}
            />
          ))}
        </div>
      </div>
    // </div>
  );
};
export default Message;
