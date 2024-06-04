import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaureProduct from "../FeaturedProduct/FeaureProduct";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Home || Xcelliance
        </title>
      </Helmet>

      <Banner></Banner>
      <FeaureProduct></FeaureProduct>

    </div>
  );
};

export default Home;