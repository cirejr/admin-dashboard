import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from './index'
import { cartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {

	const { setIsClicked, currentColor }= useStateContext()


  return (
	<div className="bg-half-transparent w-screen fixed nav-item right-0 top-0">
		<div className="bg-white dark:bg-secondary-dark dark:text-white h-screen float-right">
			<div className="flex justify-between items-center gap-2 p-4 text-gray-400 text-2xl">
				<p className="font-semibold text-black">Shopping Cart</p>
				<button
					type='button'
					className="cursor-pointer hover:drop-shadow-xl hover:bg-light-gray"
					onClick={() => setIsClicked(false)}
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
								className="w-20 rounded-xl"	
							/>
							<div>
								<p className='font-semibold'>{item.name}</p>
								<p>{item.category}</p>
								<p>{item.price}</p>
							</div>
						</div>)
					})} 
			</div>
			<div className='p-5 flex flex-col gap-2'>
				<div className="flex justify-between items-center">
					<p className="text-gray-400">Sub total</p>
					<p className="font-semibold">$890</p>
				</div>
				<div className="flex justify-between items-center mb-2">
					<p className="text-gray-400">Total</p>
					<p className="font-semibold">$890</p>
				</div>
				<Button
					bgColor={currentColor}
					color="white"
					size="lg"
					borderRadius="10px"
					text="Place Order"
				/>
			</div>
		</div>
	</div>
  )
}

export default Cart