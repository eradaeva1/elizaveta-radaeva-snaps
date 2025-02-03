import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <p className="hero__title">Our mission:</p>
      <h2 className="hero__title-text">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,{" "}
        <span className="hero__title-text--special">
          expressed in their unique style.
        </span>
      </h2>
    </section>
  );
}

export default Hero;
