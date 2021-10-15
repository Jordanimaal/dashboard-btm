import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../redux/actions/ThemeAction'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Badge from '../components/badge/Badge'
import Table from '../components/table/Table'

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
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topHarassment = {
    head: [
        'Ville',
        'Signalements',
        'Moyenne'

    ],
    body: [
        {
            "Ville": "Paris",
            "Mois": "1300",
            "Moyenne": "15"
        },
        {
            "Ville": "Marseille",
            "Mois": "1200",
            "Moyenne": "14"
        },
        {
            "Ville": "Lille",
            "Mois": "1150",
            "Moyenne": "13"
        },
        {
            "Ville": "Lyon",
            "Mois": "1100",
            "Moyenne": "12"
        },
        {
            "Ville": "Nîmes",
            "Mois": "1000",
            "Moyenne": "11"
        }
    ]
}

const renderHarrasmentHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderHarrasmentBody = (item, index) => (
    <tr key={index}>
        <td>{item.Ville}</td>
        <td>{item.Mois}</td>
        <td>{item.Moyenne}</td>
    </tr>
)

const lastHarrasment = {
    header: [
        "Ville",
        "Date",
        "Plainte",
        "Type",
        "Statut"
    ],
    body: [
        {
            ville: "Lille",
            date: "13 Oct 2021",
            plainte: "Oui",
            lieu: "Rue",
            status: "Sexuel"
        },
        {
            ville: "Paris", 
            date: "13 Oct 2021",
            plainte: "Non",
            lieu: "Transport",
            status: "Sexuel"
        },
        {
            ville: "Lille",
            date: "12 Oct 2021",
            plainte: "Non",
            lieu: "Transport",
            status: "Travail"
        },
        {

            ville: "Metz",
            date: "10 Oct 2021",
            plainte: "Oui",
            lieu: "Travail",
            status: "Harcèlement"
        },
        {
            ville: "Lorient",
            date: "10 Oct 2021",
            plainte: "Oui",
            lieu: "Lieu d'étude",
            status: "Cyber"
        }
    ]
}

const harrasmentType = {
    "Travail": "travail",
    "Sexuel": "sexuel",
    "Harcèlement": "harcelement",
    "Cyber": "cyber"
}

const renderLastHarHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderLastHarBody = (item, index) => (
    <tr key={index}>
        <td>{item.ville}</td>
        <td>{item.date}</td>
        <td>{item.plainte}</td>
        <td>{item.lieu}</td>
        <td>
            <Badge type={harrasmentType[item.status]} content={item.status} />
        </td>
    </tr>
)


const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)


    return (
        <div style={{paddingLeft: '30px'}}>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                    {
                        statusCards.map((item, index) =>(
                            <div className="col-6" key={index}>
                            <StatusCard 
                                icon={item.icon}
                                count={item.count}
                                title={item.title}
                            />
                            </div>
                        ))       
                    }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <h3 style={{textAlign: 'center', paddingBottom: '10px'}}>Signalements mensuels</h3>
                        {/* chart */}
                        <Chart 
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: {mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='bar'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <h3>Villes comptant le plus d'agression</h3>
                        <div className="card__body">
                        <Table 
                            headData={topHarassment.head}
                            renderHead={(item, index) => renderHarrasmentHead(item, index)}
                            bodyData={topHarassment.body}
                            renderBody={(item, index) => renderHarrasmentBody(item, index)}
                        />
                    </div>
                    <div className="card__footer">
                        <Link to="/graph">Plus d'infos</Link>
                    </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Derniers signalements</h3>
                        </div>
                        <div className="card__body">
                            <Table 
                                headData={lastHarrasment.header}
                                renderHead={(item, index) => renderLastHarHead(item, index)}
                                bodyData={lastHarrasment.body}
                                renderBody={(item, index) => renderLastHarBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/signalements">Tout voir</Link>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Dashboard
