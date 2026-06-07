import "./DetailCard.css";

export default function DetailCard({ name, image }) {
  return (
    <div className="DetailCard">
      <div className="icon">
        <i className={`${image} icondetail`}></i>
      </div>
      <h4>{name}</h4>
      {console.log(name)}
      {console.log(image)}
    </div>
  );
}
