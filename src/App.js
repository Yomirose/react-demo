import logo from "../src/assets/Starter.svg";
import pic1 from "../src/assets/startup1.jpg";
import pic2 from "../src/assets/startup2.jpg";
import pic3 from "../src/assets/startup3.jpg";
import card1 from "../src/assets/card 1.jpg";
import card2 from "../src/assets/card 2.jpg";
import card3 from "../src/assets/card 3.png";
import "./App.css";
import Subscribe from "./Subscribe";

const cards =[
  {
    img: pic1,
    title: "Lorem ipsum dolor",
    date: "April 24, 2022 - 5 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    contact: "Subscribe to my "
  },
  {
    img: pic2,
    title: "Lorem ipsum dolor",
    date: "April 03, 2022 - 4 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  },
  {
    img: pic3,
    title: "Lorem ipsum dolor",
    date: "March 12, 2022 - 6 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  }
];

const startUps =[
  {
    img: card1,
    title: "Lorem ipsum dolor",
    date: "April 24, 2022 - 5 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  },
  {
    img: card2,
    title: "Lorem ipsum dolor",
    date: "March 12, 2022 - 6 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  },
  {
    img: card3,
    title: "Lorem ipsum dolor",
    date: "March 12, 2022 - 6 min read",
    page: "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
  },
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="navbar" alt="" width="10%" />
        <div className="App-link">
        <a className="nav_link" href="blog" >Blog</a>
        <a className="nav_link" href="blog" >Newsletter</a>
        <a className="nav_link" href="blog" >Twitter</a>
        </div>
      </header>

      <div className="hero-section">
        <h1>Posts Examples</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
      </div>
      
      <div className="card-section">
      {cards.map((card, i)=>{
        return <div key={i} className="card">
        <img src={card.img} className="card-img" alt="" />
        <h1 className="title">{card.title}</h1>
        <p className="date">{card.date}</p>
        <p className="page">{card.page}</p>
      </div>
      })};
      </div>

      <div className="startUp-section">
        {startUps.map((startUp, i)=>{
        return <div key={i} className="starUp">
          <img src={startUp.img} className="startUp-img" alt="" />
          <h1 className="startUp_title">{startUp.title}</h1>
          <p className="startUp-date">{startUp.date}</p>
          <h2 className="start-page">{startUp.page}</h2>
        </div>
      })};
      </div>
      <div className="sub">
        <Subscribe newSub={cards} />
      </div>
    </div>
  );
}

export default App;
