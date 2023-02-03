import React from 'react'
import { ChartComponent,SeriesCollectionDirective, SeriesDirective, Legend, Inject, BarSeries, Category, DataLabel, Highlight, ColumnSeries} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis  } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
	const { currentMode }= useStateContext();
  return (
	<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark rounded-3xl'>
		<Header category="Bar" title="Inflation Rate in Percentage"/>
		<ChartComponent
			id="bar-chart"
			height="420px"
			primaryXAxis={barPrimaryXAxis}
			primaryYAxis={barPrimaryYAxis}
			chartArea={{ border:{ width: 0 }}}
			tooltip={{ enable: true}}
			background={ currentMode === 'Dark' ? '#0c1148' : '#fff'}
		>
			<Inject services={[BarSeries, Legend,Category, DataLabel, Highlight, ColumnSeries]}/>
			<SeriesCollectionDirective>
				{barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
			</SeriesCollectionDirective>
		</ChartComponent>
	</div>
  )
}

export default Bar