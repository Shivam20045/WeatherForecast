import MainCard from "./MainCard";

import "./Card.css"
import DetailCard from "./DetailCard";
import TripletCard from "./TripletCard";
export default function Card() {
  return (
    <div className="Card">
      <MainCard />
      <TripletCard/>
      
    </div>
  );
}
