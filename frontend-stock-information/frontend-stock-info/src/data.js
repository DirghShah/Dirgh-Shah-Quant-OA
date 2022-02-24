import React from 'react'
import JsonData from './meta.json'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
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

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Symbol</th>
					<th>Currency</th>
					<th>Market Price</th>
					<th>Change in Price</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
