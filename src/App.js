import "./App.css";
import "./style.css"
import Card from "./components/Card";
import cardContent from "./components/CardData";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    let card = cardContent.map((cardItem)=>{
        console.log(cardItem);
        return(
            
            <Card key={cardItem.id} cardContents={{
                id:cardItem.id,
                imgSrc: cardItem.imgSrc,
                name: cardItem.name,
                description:cardItem.description
 
            }} /> 
        );
    })
    
  return (
    <div >
          <Header/>
          <Home/>
          <div className="dest-container">
            <h2>Destinations</h2>
            <div className="cardbox">{card}</div> 
          </div>
    </div>
    
  );
}

export default App;
 