
import {  useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { IoLogoBitcoin } from "react-icons/io5";


const DailyIncome = () => {

    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'],
                datasets: [{
                    label: 'Progress',
                    data: [5,9,6,7,15,7,20,9,7,9,15,19],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
        <div className='min-h-screen bg-white'>
                  <section className='lg:flex lg:justify-between lg:mx-3 lg:mt-9 mt-7'>

               <div className='lg:w-1/2 lg:h-[200px]'>
               <div className="chart-container">
                    <canvas ref={canvasRef} id="myChart"
                    className="lg:h-[300px] h-[280px]"></canvas>

                    </div>
               </div>

               <section className="md:flex md:justify-between  lg:flex lg:justify-between lg:gap-3 lg:w-1/2 rounded-lg text-white text-center my-5">
            
                     {/* daily progress */}
                    <div className='lg:w-1/2 md:w-1/2 lg:h-[300px] bg-[#09a25b] rounded-lg mx-4 p-2' >
                    <p className='lg:pt-5 ml-20 lg:ml-24 md:ml-32 text-6xl text-amber-400'><IoLogoBitcoin /></p>
                    <p className='font-bold py-2 lg:text-xl'>Daily progress</p>
                    <p className='font-semibold py-1 lg:text-xl'>$1,965</p>
                    <p className='font-semibold py-1 lg:text-xl'>Saturday</p>
                    <p className='font-semibold py-1 lg:text-xl'> 02.08.2024</p>
                  
                    </div>

                    {/* daily previwe */}
                    <div className='lg:w-1/2 md:w-1/2 lg:h-[300px] bg-[#a2090e] rounded-lg mx-4 mt-2 md:mt-0 lg:mt-0 p-2'>
                    <p className='lg:pt-5 ml-20 lg:ml-24 md:ml-32 text-6xl text-amber-400'><IoLogoBitcoin /></p>
                    <p className='font-bold py-2 lg:text-xl'>Weekly progress</p>
                    <p className='font-semibold py-1 lg:text-xl'>$8,965</p>
                    <p className='font-semibold py-1 lg:text-xl'>Saturday-Friday</p>
                    <p className='font-semibold py-1 lg:text-xl'>2024</p>
                  
                    </div>
            </section >
                  </section>
        </div>
    );
};

export default DailyIncome;