import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, ThemeSettings, Sidebar} from './components';
import {Dashboard, Calendar, ColorMapping, ColorPicker, Customers, Editor, Employees, Kanban, Orders, Area, Pie, Stacked, Financial, Bar, Pyramid, Line} from './pages';
import './App.css'
import {useStateContext} from './contexts/ContextProvider'

const App = () => {
	const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();


  return (
	<div className={currentMode === 'Dark' ? 'dark' : ''}>
		<BrowserRouter>
			<div className="flex relative dark:bg-main-dark">
				<div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
					<TooltipComponent content="paramètres" position='Top'>
						<button 
							type='button' 
							className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray hover:rounded-md text-white "
							style={{ background :currentColor, borderRadius : '50%'}}
							onClick={() => setThemeSettings(true)}
						>
							<FiSettings />
						</button>	
					</TooltipComponent>
				</div>
				{activeMenu ? (
					<div className="w-72 fixed dark:bg-secondary-dark bg-white sidebar">
						<Sidebar />
					</div>
							) : (
					<div className="w-0 dark:bg-secondary-dark">
						<Sidebar />
					</div>
				)}
				<div className={
					`dark:bg-main-dark bg-main min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
				}>
					<div className="fixed md:static bg-main dark:bg-main-dark navbar w-full ">
						<Navbar />
					</div>

					<div>
						{themeSettings && <ThemeSettings />}

						<Routes>
							{/* Dashboard */}
							<Route path='/' element={<Dashboard />} />
							<Route path='/dashboard' element={<Dashboard />} />

							{/* Pages */}
							<Route path='/orders' element={<Orders />} />
							<Route path='/employees' element={<Employees />} />
							<Route path='/customers' element={<Customers />} />

							{/* Apps */}
							<Route path='/kanban' element={<Kanban />} />
							<Route path='/editor' element={<Editor />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/color-picker' element={<ColorPicker />} />

							{/* charts */}
							<Route path='/line' element={<Line />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/financial' element={<Financial />} />
							<Route path='/color-mapping' element={<ColorMapping />} />
							<Route path='/pyramid' element={<Pyramid />} />
							<Route path='/stacked' element={<Stacked />} />

						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	</div>
  )
}

export default App