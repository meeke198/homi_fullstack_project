import React from 'react'


const Messages = [
  {
    imageUrl:
      "https://i.etsystatic.com/6862623/r/il/ae2960/2094794887/il_1588xN.2094794887_2sdq.jpg",
    title: "Gift for her",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/6862623/r/il/ae2960/2094794887/il_1588xN.2094794887_2sdq.jpg",
    title: "Gift for him",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/6862623/r/il/ae2960/2094794887/il_1588xN.2094794887_2sdq.jpg",
    title: "Gift for kids",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/6862623/r/il/ae2960/2094794887/il_1588xN.2094794887_2sdq.jpg",
    title: "Gift for Christmas",
  },
];
const MessageItem = props => {
return (
  <div>
    <img
      src={props.imgUrl}
      alt=""
    />
    <p>{props.title}</p>
  </div>
);
}
const Message = () => {
return (
  <div>
    Bring on the holidays! Discover meaningful finds!
    {/* {messages.map((message, idx) => <MessageItem key={idx} title={message.title} imageUrl={message.imageUrl}/>)} */}
  </div>
);
}
export default Message;