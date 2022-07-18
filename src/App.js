import { Landing } from "./pages";
import { Navbar, Slider, Featured, CarouselComponent } from "./components";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Navbar />
        {/* <CarouselComponent /> */}
        <Slider />
        <Featured />
        <Landing />
      </div>
    </div>
  );
}

export default App;
