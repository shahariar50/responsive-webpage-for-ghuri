const HomeBanner = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url('/statics/img/heroImg1.jpg')" }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            <h2>Your Title Here</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-light text-secondary">
              request a demo
            </button>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
