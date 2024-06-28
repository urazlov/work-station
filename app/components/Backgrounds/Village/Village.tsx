import "../Backgrounds.scss";

export const Village = () => {
  return (
    <div className="background">
      <div className="background-container">
        <video autoPlay muted loop id="villageVideo">
          <source src="/video/village.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
