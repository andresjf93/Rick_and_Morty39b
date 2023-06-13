import Card from "./Card";
import "./Cards.css"

export default function Cards({ characters }) {
  return (
    <div className="cards_container">
        {characters &&
          characters.map((Element, index) => {
            return (
              <Card
                key={index}
                id={Element.id}
                name={Element.name}
                status={Element.status}
                species={Element.species}
                gender={Element.gender}
                origin={Element.origin.name}
                image={Element.image}
                onClose={() => window.alert("Emulamos que se cierra la card")}
              ></Card>
            );
          })}
    </div>
  );
}
