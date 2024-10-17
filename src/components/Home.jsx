import Products from "./Products";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src="assets/images/bgi.webp"
            className="card-img"
            alt="background"
            height="550px"
          />
        </div>
      </div>
      <Products />
    </>
  );
}
