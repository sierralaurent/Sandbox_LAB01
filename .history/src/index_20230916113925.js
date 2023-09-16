
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


// import App from "./App";
import "./styles.css";


function App() {
return (
<div className="layout">
<h1>My News Feed</h1>
<div className="articles">
<div className="articleOne">
  <img src="https://picsum.photos/seed/picsum/200/200" alt=" " />
    <div className="info">
    <NewsArticle
      name="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
      tagline="By: Steve Hanley"
      description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year." />
    </div>
  </div>
<div className="articleOne">
  <img src="https://picsum.photos/id/237/200/200" alt=" " />
    <div className="info">
    <NewsArticle
    name="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
    tagline="By: Milenio Digital"
    description="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de ..."
    />
    </div>
</div>
<div className="articleOne">
  <img src="https://picsum.photos/seed/picsum/200/200" alt=" " />
  <div className="info">
    <NewsArticle
    name="Tesla recall for heater and defroster systems issued by Transport Canada"
    tagline="By: Maria Merano"
    description="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles. Transport Canada reported that a little over ..."
    />
  </div>
</div>
<div className="articleOne">
  <img src="https://picsum.photos/id/237/200/200" alt=" " />
  <div className="info">
    <NewsArticle
    name="China representó la mitad de las ventas globales de coches eléctricos en 2021"
    tagline="By: Newsroom Infobae"
    description="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos ..." />
  </div>
</div>
</div>
</div>
);
}


function NewsArticle(props) {
return (
<div>
<h2>{props.name}</h2>
<h3 className="profile-tagline">{props.tagline}</h3>
<p>{props.description}</p>
</div>
);
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
<StrictMode>
<App />
</StrictMode>
);


