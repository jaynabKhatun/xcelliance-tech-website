import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaureProduct from "../FeaturedProduct/FeaureProduct";
import TrendingProductPages from "../TrendingProducts/TrendingProductPages";
import TechNews from "../../TechNews/TechNews";


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
      <TrendingProductPages></TrendingProductPages>
      <TechNews></TechNews>
    </div>
  );
};

export default Home;