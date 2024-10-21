import Products from "./Products";
import bgi from "../imgs/bgi.webp"
export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src={bgi}
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
