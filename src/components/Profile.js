import f1Image from "../assets/images/max-f1.jpg";

function Profile() {
  return (
    <div className="card">
      <img src={f1Image} alt="maxf1" />
      <div className="card-body">
        <p className="card-text">Eu prefiro carros</p>
      </div>
    </div>
  );
}

export default Profile;
