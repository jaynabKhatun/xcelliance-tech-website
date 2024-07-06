import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeaureProduct from "../FeaturedProduct/FeaureProduct";
import TrendingProductPages from "../TrendingProducts/TrendingProductPages";
import TechNews from "../../TechNews/TechNews";

import Slider from "../Cupon/Slider";


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
      <Slider></Slider>
      <TechNews></TechNews>
    </div>
  );
};

export default Home;