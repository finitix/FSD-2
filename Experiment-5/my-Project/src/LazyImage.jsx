function LazyImage() {
  return (
    <img
      src="https://picsum.photos/400/300"
      alt="User"
      loading="lazy"
      style={{ width: "300px", marginTop: "20px" }}
    />
  );
}

export default LazyImage;
