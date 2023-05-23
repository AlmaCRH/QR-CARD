import "./App.css";
import qr from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="container mx-auto w-80 bg-white text-black p-5 rounded-lg shadow-xl">
      <img src={qr} className="mx-auto h-72 rounded-lg" />
      <h1 className="font-Outfit font-extrabold text-xl text-darkBlue my-5">
        Improve your front-end skills by building projects
      </h1>
      <p className=" text-grayishBlue">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
