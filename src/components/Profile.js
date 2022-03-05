import f1Image from "../assets/images/max-f1.jpg";

function Profile() {
  return (
    <div className="card" style={{ width: "580px"}}>
      <img src={f1Image} alt="maxf1" />
      <div className="card-body">
      <h5 className="card-title">Formula 1 is great!</h5> 
        <p className="card-text">Eu prefiro carros</p>
      </div>
    </div>
  );
}

export default Profile;
