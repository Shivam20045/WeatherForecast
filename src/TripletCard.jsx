import DetailCard from "./DetailCard";
import "./TripletCard.css";

export default function TripletCard() {
  return (
    <div className="Triplet">
      <DetailCard name={"Temperature"} image={"fa-solid fa-droplet"}/>
      <DetailCard name={"Humidity"} image={"fa-solid fa-wind"}/>
      <DetailCard name={"Tommorow"} image={"fa-solid fa-temperature-three-quarters"}/>
    </div>
  );
}
