import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'
import Button from './Button';

const Chat = () => {
	const { setIsClicked, currentColor }= useStateContext();

  return (
	<div className='rounded-3xl'>
		<DialogComponent 
			width="350px"
			height="500px"
			isModal={true}
			header="messages"
			showCloseIcon={true}
			close={() => setIsClicked(false)}
			className="rounded-3xl absolute right-8 bottom-4 flex flex-col gap-2 m-auto"
		>
			{chatData.map((chat, index) => {
				return(
					<div 
						key={index}
						className='flex items-center gap-2 border-b-1 border-gray-200 p-3 mb-3 cursor-pointer'
					>
						<img src={chat.image}
							className="rounded-full w-10"
						/>
						<div>
							<p className='font-semibold mb-1'>{chat.desc}</p>
							<p className='text-gray-400'>{chat.message}</p>
							<p className='text-gray-400'>{chat.time}</p>
						</div>
					</div>)
			})}
			<div className='flex justify-center w-full'>
				<Button
					className="flex justify-center"
					bgColor={currentColor}
					color="white"
					size="lg"
					borderRadius="10px"
					text="See all messages"
				/>
			</div>
		</DialogComponent>
	</div>
  )
}

export default Chat