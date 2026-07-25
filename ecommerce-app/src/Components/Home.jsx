import ProductRating from "./Assignments/ProductRating";
import StopWatch from "./Assignments/StopWatch";
import Accordion from "./Assignments/Accordion";
import CountryState from "./Assignments/CountryState";
import AccordionMultiOpen from "./Assignments/AccordionMultiOpen";

function Home() {
  return (
    <>
      <CountryState></CountryState>
      <StopWatch></StopWatch>
      <ProductRating></ProductRating>
      <Accordion></Accordion>
      <AccordionMultiOpen></AccordionMultiOpen>
    </>
  );
}

export default Home;
