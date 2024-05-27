import silver from '../../public/silver.png'
import gold from '../../public/gold.png'
import diamond from '../../public/dia.png'

const Ratio = () => {
    return (
        <div className='lg:flex lg:justify-between columns-1 mx-2 md:mt-16'>

           {/* PART 000000111111 */}
           
           <div className='lg:flex lg:justify-between grid grid-cols-2 gap-3  lg:w-7/12 '>

            {/* section 01 */}
            <section className="p-3 w-full  px-4 lg:mx-auto mt-2 lg:w-3/12 lg:h-[180px]  bg-[#095da2] rounded-lg text-white text-center">
                
                <img className='lg:w-20 lg:h-20 md:ml-24 lg:ml-8' src={silver} alt="" />
                <p className='font-semibold font-serif'>Silver</p>
                <p className='font-serif'>$3465</p>

            </section>
            {/* section 02 */}
            <section className="p-3 w-full  mx-auto mt-2 lg:w-3/12 lg:h-[180px] lg:h-3/12 bg-[#a20990] rounded-lg text-white text-center">
            
            <img className='lg:w-20 lg:h-20 md:ml-28 lg:ml-10 ml-1' src={gold} alt="" />
                <p className='font-semibold font-serif'>Gold</p>
                <p className='font-serif'>$5342</p>

            </section >
            {/* section 03 */}
            <section className="p-3 w-9/12 mx-auto mt-2 lg:w-3/12 lg:h-[180px] bg-[#09a27e] rounded-lg text-white text-center hidden lg:block">
            
            <img className='lg:w-20 lg:h-20  lg:ml-10 ml-6' src={diamond} alt="" />
                <p className='font-semibold font-serif'>Diamond</p>
                <p className='font-serif'>$7453</p>

            </section>
           </div>

           <section className="p-3 w-6/12 mx-auto mt-2 lg:w-3/12 lg:h-[180px] bg-[#09a27e] rounded-lg text-white text-center lg:hidden">
            
            <img className='lg:w-20 lg:h-20 lg:ml-10 md:ml-24' src={diamond} alt="" />
                <p className='font-semibold font-serif'>Diamond</p>
                <p className='font-serif'>$7453</p>

            </section>


            {/* PART 02222 */}
            <div className='lg:w-4/12 bg-blue-200 rounded-lg mt-3 lg:mt-0'>
                

                {/* TAAABBBBEEEEEELLLLL */}
                <section>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 ">
	<h2 className="mb-4 text-2xl font-semibold leading-tight font-serif text-[#a20953]">Market Overview</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Category</th>
					<th className="p-3">Total</th>
					<th className="p-3">Sold</th>
					<th className="p-3">Buy</th>
					<th className="p-3">Amount</th>
					
				</tr>
			</thead>
			<tbody>

            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='font-semibold'>Silver</p>
					</td>
					<td className="p-3">
						<p>22,00</p>
					</td>
					<td className="p-3">
						<p>12,40</p>
						
					</td>
					<td className="p-3">
						<p>4,554</p>
						
					</td>
					<td className="p-3 text-right">
						<p>$18,792</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='font-semibold'>Gold</p>
					</td>
					<td className="p-3">
						<p>32,00</p>
					</td>
					<td className="p-3">
						<p>1,450</p>
						
					</td>
					<td className="p-3">
						<p>2,654</p>
						
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='font-semibold'>Diamond</p>
					</td>
					<td className="p-3">
						<p>25,84</p>
					</td>
					<td className="p-3">
						<p>12,00</p>
						
					</td>
					<td className="p-3">
						<p>8,965</p>
						
					</td>
					<td className="p-3 text-right">
						<p>$21,750</p>
					</td>
					
				</tr>
			
			</tbody>
		</table>
	</div>
</div>
                </section>

            </div>
            
        </div>
    );
};

export default Ratio;