import "../Backgrounds.scss";

export const Waterfall = () => {
  return (
    <div className="background">
      <div className="background-container">
        <video autoPlay muted loop id="villageVideo">
          <source src="/video/waterfall.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
