import SearchBox from "./SearchBox";
import "./MainCard.css";
import Temp from "./Temp";
import CityName from "./CityName";

export default function MainCard() {
  return (
    
    <div className="MainCard">
      <h3>Check Weather</h3>
      <p>Search any city to get real-time weather updates</p>
      <SearchBox />
      <CityName name={"Mumbai"}/>
      <i className="fa-solid fa-location-dot location">India</i>
      <Temp temp={55} />
    </div>
  );
}
