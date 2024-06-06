import Nav from "./components/Nav";

import Carousel from "./components/Carousel";
import CarouselItems from "./components/CarouselItems";

function App() {
  return (
    <div className="container">
      <Nav />

      <h1>Hello</h1>
      <div className="row">
        <div className="col">
          {" "}
          <Carousel>
            <CarouselItems />
          </Carousel>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
