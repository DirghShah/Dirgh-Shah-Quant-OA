import React from 'react'
import MetaData from './meta.json'
import QuoteData from './quote.json'
import RefData from './ref_data.json'
import Plot from 'react-plotly.js';


function JsonDataDisplay(){
	const DisplayMData=MetaData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.symbol}</td>
					<td>{info.currency}</td>
					<td>{info.regularMarketPrice}</td>
					<td>{info.regularMarketPrice - info.chartPreviousClose}{"("}{parseFloat(100*(info.regularMarketPrice - info.chartPreviousClose)/info.regularMarketPrice).toFixed(2)}{"%)"}</td>
				</tr>
			)
		}
	)

	const DisplayQData=QuoteData.map(
		(info)=>{
			return(
				<tr>

					<td>{parseFloat(info.high.sort().reverse()[0]).toFixed(2)}</td>
					<td>{parseFloat(info.low.sort()[0]).toFixed(2)}</td>
					<td>{parseFloat(info.open[0]).toFixed(2)}</td>
					<td>{parseFloat(info.close[0]).toFixed(2)}</td>
				</tr>
			)
		}
	)

	// const DisplayRData=RefData.map(
	// 	(info)=>{
	// 		return(
	// 			yval = info.timestamp
	// 	    )
	//     }
    // )

	

	return(
		<div>
			<table class="table1" align="center" border = "1px" cellpadding = "10%">
				<thead>
					<tr>
					<th>Symbol</th>
					<th>Currency</th>
					<th>Market Price</th>
					<th>Change in Price</th>
					</tr>
				</thead>
				<tbody>
					{DisplayMData}		
				</tbody>
			</table>
			<br></br>
			<br></br>
			<table class="table2" align="center" border = "1px" cellpadding = "10%">
				<thead>
					<tr>
					<th>Market High</th>
					<th>Market Low</th>
					<th>Market Open</th>
					<th>Market Close</th>
					</tr>
				</thead>
				<tbody>
					{DisplayQData}		
				</tbody>
			</table>
			<br></br>
			<br></br>
		
		
			{/* <Plot
				data={[
					{
						x: xval,
						y: yval,
						type: 'scatter',
						mode: 'lines+markers',
						marker: {color: 'red'},
					}
				]}
				layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
			/> */}
		</div>
	)
}

export default JsonDataDisplay;
