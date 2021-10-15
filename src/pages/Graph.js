import React, {Component,  useState }from 'react'
import Chart from 'react-apexcharts'
import Dashboard from './Dashboard'
import Theme from '../components/themes/Theme'

const Graph = () => {

    const chartOptions = {
        series: [{
            name: 'Signalements Lille',
            data: [40,70,20,90,36,80,30,91,60, 98]
        }, 
        {
            name: 'Signalements Marseille',
            data: [46,51,31,76,39,100,39,85,62, 29]
        },
        {
            name: 'Signalements Paris',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
        }],
        options: {
            color: ['#6ab04c', '#2980b9', '#3498db'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            legend: {
                position: 'bottom'
            },
            grid: {
                show: false
            }
        }
    }

    const [optionsType, setMyObject] = useState ({
        color: ['white'],
        chart: {
            color: ['white'],
            id: 'apexchart-exemple'
        },
        xaxis: {
            color: ['white'],
            categories: ['Sexuel', 'Cyber', 'Travail', 'Harcelement']
        }
    })

    const [seriesType, setMySeries] = useState([{
        name: 'Type du signalement',
        data: [1009, 700, 950, 810, 598, 600]
    }])

    const placeOptions = {
        series: [{
            name: 'Rue',
            data: [1100]
        }, 
        {
            name: 'Travail',
            data: [765]
        },
        {
            name: "Lieu d'étude",
            data: [340]
        },
        {
            name: 'Transports',
            data: [1009]
        }],
        options: {
            color: ['#c0392b', '#8e44ad', '#f1c40f'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Rue', 'Travail', 'Etudes', 'Transports']
            },
            legend: {
                position: 'bottom'
            },
            grid: {
                show: false
            }
        }
    }


    const [options, setObject] = useState ({
        color: ['white'],
        chart: {
            color: ['white'],
            id: 'apexchart-exemple'
        },
        xaxis: {
            color: ['white'],
            categories: ['Lille', 'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
        }
    })

    const [series, setSeries] = useState([{
        name: 'Villes comptant le plus de signalements',
        data: [9800, 12000, 12300, 8100, 5000, 6000]
    }])
    return (
        <div className="row" style={{paddingLeft: '30px'}}>
            <div className="card" style={{width: '600px' }}>
            <h3 style={{textAlign: 'center'}}>Villes comptant le plus de signalements</h3>
                <Chart options={options} series={series} type='bar' width={500} height={300}  />
            </div>
                <div style={{width: '60px'}}></div>
            <div className="card" style={{width: '600px', paddingLeft: '30px' }}>
            <h3 style={{textAlign: 'center'}}>Historique des signalements journaliers</h3>
                <Chart options={chartOptions.options} series={chartOptions.series} type='line' width={500} height={300}  />
            </div>
            <div className="row" style={{paddingLeft: '20px'}}>
            <div className="card" style={{width: '600px' }}>
            <h3 style={{textAlign: 'center'}}>Type de signalement</h3>
                <Chart options={optionsType} series={seriesType} type='bar' width={500} height={300}  />
            </div>
                <div style={{width: '60px'}}></div>
            <div className="card" style={{width: '600px', paddingLeft: '30px' }}>
                <h3 style={{textAlign: 'center'}}>Lieux</h3>
                <Chart options={placeOptions.options} series={placeOptions.series} type='bar' width={500} height={300}  />
            </div>
            </div>
       </div>
       
       
    )
}

export default Graph
