import Deals from "./deals/page";
import GetStarted from "./get-started/page";
import StoreSection from "./StoreService/page";
import ServiceSection from "./UserService/page";

export default function Home() {
  return (
    <>
      <div className="  ">
        <ServiceSection />
        <StoreSection />
        <GetStarted />
        <Deals />
        {/* <Contact /> */}
      </div>
    </>
  );
}
