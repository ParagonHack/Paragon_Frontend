import Header from "../components/header";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen ">
      <Header />
      <Carousel />
    </div>
  );
}
