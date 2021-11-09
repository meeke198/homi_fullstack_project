import React from "react";

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
    imageUrl:
      "https://i.etsystatic.com/7131834/r/il/0f8ecc/3359499994/il_1588xN.3359499994_gqsc.jpg",
    title: "On Sale",
  },
];
const MessageItem = (props) => {
  return (
    <div>
      <div className="message-block">
        <img className="message-img" src={props.imageUrl} alt="" />
        <p className="message-title">{props.title}</p>
      </div>
    </div>
  );
};
const Message = () => {
  return (
    <div style={{padding: '40px 20px', backgroundColor: '#FFDFAF'}}>
      <h3 className="message-text" style={{textAlign: 'center'}}>Bring on the holidays! Discover meaningful finds!</h3>
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
  );
};
export default Message;
