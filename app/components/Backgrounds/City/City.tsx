import "../Backgrounds.scss";

export const City = () => {
  return (
    <div className="background">
      <div className="background-container">
        <video autoPlay muted loop id="villageVideo">
          <source src="/video/city.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
