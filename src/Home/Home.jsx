import Banner from "../Banner/Banner";
import DailyIncome from "../DailyIncome/DailyIncome";
import Ratio from "../Ratio/Ratio";

const Home = () => {
    return (
        <div className="px-5 md:px-7 lg:px-10">
            <Banner/>
           <Ratio/>
         <DailyIncome/>
            
           
        </div>
    );
};

export default Home;