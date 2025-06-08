import BecomePartner from "./become-partner/page";
import ClearPlans from "./clear-plans/page";
import Deals from "./deals/page";
import GetStarted from "./get-started/page";
import StoreSection from "./StoreService/page";
import SubscribeSection from "./subscribe/page";
import ServiceSection from "./UserService/page";

export default function Home() {
  return (
    <>
      <div className="  ">
        <ServiceSection />
        <StoreSection />
        <GetStarted />
        <Deals />
        <ClearPlans />
        <BecomePartner />
        <SubscribeSection />
        {/* <Contact /> */}
      </div>
    </>
  );
}
