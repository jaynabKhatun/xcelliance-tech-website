import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CheckOutForm from "../Dashboard/Admin/UseerTable/CheckOutForm/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51PMQnjP5uy87kv3GvuEDNg3PpOJw1qJWv2NHLpvE9GKqdzXXIzcOHjgO33qBntgkMzNW0GdtCaPeO3Qo83btJacT00akSSZfSf');


const Payment = () => {
    return (
        <div className="p-8">
            <div>
                <SectionTitle subHeading="Payment Your Pro" heading="PAYMENT"></SectionTitle>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>

            </Elements>

        </div>
    );
};

export default Payment;