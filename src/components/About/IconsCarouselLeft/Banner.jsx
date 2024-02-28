const Banner = ({ images, speed = 5000, iconSize = 68 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image: Icon }) => (
            <div
              className="image"
              key={id}
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <Icon size={iconSize} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image: Icon }) => (
            <div
              className="image"
              key={id}
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <Icon size={iconSize} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
