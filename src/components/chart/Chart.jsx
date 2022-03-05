import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,data,dataK,grid}) => {
   
  return (

    
    <div className='chart'>
            <h3 className="charTitle"> {title} </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >

                <LineChart  data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                                <XAxis dataKey="name" stroke='teal' />
                                <Line type="monotone" dataKey={dataK} stroke='black' />
                                <Tooltip />
                            { grid &&  <CartesianGrid  stroke='lightgray' strokeDasharray="5 5" /> }
                                <Legend />

                </LineChart>



            </ResponsiveContainer >

    </div>
  )
}

export default Chart