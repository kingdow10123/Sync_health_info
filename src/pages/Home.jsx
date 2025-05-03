import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const cards = [
    { img: "https://i.imgur.com/ydrr4PT.png", text: "與心衰共處", link: "/page1" },
    { img: "https://i.imgur.com/CIiOviK.png", text: "什麼是心臟衰竭", link: "/page2" },
    { img: "https://i.imgur.com/v2VKMHG.png", text: "心臟衰竭運動指南", link: "/page3" },
    { img: "https://i.imgur.com/D0A3PWl.png", text: "心臟衰竭飲食原則", link: "/page4" },
    { img: "https://i.imgur.com/iN5w2zX.png", text: "心臟衰竭常見藥物", link: "/page5" }
  ];

  return (
    <div className="container">
      <h1>衛教資訊</h1>
      {cards.map((card, index) => (
        <div className="info-card" key={index} onClick={() => navigate(card.link)}>
          <div className="card-image">
            <img src={card.img} alt={card.text} />
          </div>
          <div className="card-text">{card.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
