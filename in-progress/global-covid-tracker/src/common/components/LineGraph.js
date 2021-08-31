import React, { useState, useEffect } from 'react'
// import { Line } from 'react-chartjs-2'

function LineGraph() {
    // const = [data, setData] = useState({})



    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    })

    const buildChartData = data => {
        const chartData =[]
        let lastDataPoint

        data.cases.forEach(date => {
            if(lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data['cases'][date] - lastDataPoint
                }
            }
        })
    }

    
    return (
        <div>
            <h1>I'm a graph</h1>
            {/* <Line 
                data
                options
            /> */}
        </div>
    )
}

export default LineGraph
