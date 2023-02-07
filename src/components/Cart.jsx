import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';

import { cartData } from '../data/dummy'

const Cart = () => {
  return (
	<div className="bg-half-transparent w-screen fixed nav-item right-0 top-0">
		<div className="bg-white dark:bg-secondary-dark dark:text-white h-screen float-right">
			<div className="flex justify-between items-center gap-2 p-4 text-gray-400 text-2xl">
				<p className="font-semibold text-black">Shopping Cart</p>
				<button
					type='button'
					className="cursor-pointer hover:drop-shadow-xl hover:bg-light-gray"
					onClick={()=>{}}
				>
					<MdOutlineCancel />
				</button>
			</div>
			<div className="mt-2">
					{cartData.map((item, index) => {
						return (<div 
							key={index} 
							className="flex gap-4 p-4 border-b-1 border-gray-200 w-full mx-4"
						>
							<img 
								src={item.image} 
								alt={item.name}
								className="w-16 rounded-xl"	
							/>
							<div>
								<p className='font-semibold'>{item.name}</p>
								<p>{item.category}</p>
								<p>{item.price}</p>
							</div>
						</div>)
					})}
			</div>
		</div>
	</div>
  )
}

export default Cart