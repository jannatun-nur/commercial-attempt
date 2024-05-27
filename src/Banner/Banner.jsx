import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import banner from "../../public/banner.gif";

const Banner = () => {

  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');

      if (chartRef.current) {
          chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Shirts', 'Books', 'Laptop', 'Mobile', 'Shoes', 'T-Shirts' ,'Head-phone'],
              datasets: [{
                  label: 'Product Category',
                  data: [12, 19, 8, 9, 10, 14, 7],
                  borderWidth: 3,
                  backgroundColor: '#095da2',
                  
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                      
                  }
              }
          }
      });

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
          if (chartRef.current) {
              chartRef.current.destroy();
          }
      };
  }, []);
  return (
    <div>
      <div className="lg:flex lg:justify-between">
        {/* section 0011 */}
        <section className="lg:w-1/2 ">
          <div className="">
            <img
              src={banner}
              className="rounded-lg shadow-2xl w-ful lg:w-full md:w-full md:h-[350px] lg:h-full  h-[250px]"
            />
            <div className="text-center my-6 text-[#095da2] md:mt-24">
              <h1 className="text-2xl md:text-4xl font-bold">
                Buy More Coins , Get More Discount!!
              </h1>
              <p className="py-6 px-4 font-serif">
                We are here to give you latest news that by buying more coins in
                per month you will get attractive discount on your orders . So,
                what are you looking for. Let's buy coin .
              </p>
              <button
                className="
               px-4 py-1 lg:px-7 lg:py-4 bg-blue-800 text-white font-semibold font-serif rounded-lg my-2"
              >
                Buy Coins
              </button>
            </div>
          </div>
        </section>

        {/* section 00022 */}
        <section className="lg:w-1/2 w-full px-3 ">
        <canvas ref={canvasRef} id="myChart" className="lg:h-[300px] h-[2000px]"></canvas>
        </section>
        
      </div>
    </div>
  );
};

export default Banner;
