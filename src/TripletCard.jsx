import DetailCard from "./DetailCard";
import "./TripletCard.css";

export default function TripletCard() {
  return (
    <div className="Triplet">
      <DetailCard props={"Temperature"}/>
      <DetailCard props={"Humidity"}/>
      <DetailCard props={"Tommorow"}/>
    </div>
  );
}
