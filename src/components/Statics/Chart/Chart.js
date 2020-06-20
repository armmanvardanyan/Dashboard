import React from 'react'
import {LineChart,YAxis,Line, Legend, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts'
import classes from './Chart.module.scss'

const Chart = () => {
    const data = [
        {
          "Clicks": 4000,
          "Page View": 2400,
          "Sign ups": 1200,
          "amt": 2400
        },
        {
          "Clicks": 3000,
          "Page View": 1398,
          "Sign ups": 1000,
          "amt": 2210
        },
        {
          "Clicks": 2000,
          "Page View": 9800,
          "Sign ups": 2000,
          "amt": 2290
        },
        {
          "Clicks": 2780,
          "Page View": 3908,
          "Sign ups": 800,
          "amt": 2000
        },
        {
          "Clicks": 1890,
          "Page View": 4800,
          "amt": 2181,
          "Sign ups": 1800,
        },
        {
          "Clicks": 2390,
          "Page View": 3800,
          "amt": 2500,
          "Sign ups": 1600,
        },
        {
          "Clicks": 3490,
          "Page View": 4300,
          "amt": 2100,
          "Sign ups": 1450,
        }
      ]
    return (
        <>
           <div className="row pt-2">
               <div className="col">Media Stats</div>
               <div className="col text-right">Last Week</div>
           </div>
           <ResponsiveContainer  height={270} width={'90%'}>
            <LineChart className={classes.Chart} data={data} >
                <YAxis/>
                <Legend iconType={'square'}/>
                <Tooltip/>
                <CartesianGrid vertical={false} strokeWidth={.5}/>
                <Line type="monotone" dataKey="Clicks" stroke="#fbcf71" />
                <Line type="monotone" dataKey="Page View" stroke="#1f7bb6" />
                <Line type="monotone" dataKey="Sign ups" stroke="#01aaaa" />
            </LineChart>
            </ResponsiveContainer>
        </>

    )
}

export default Chart
