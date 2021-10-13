import React from 'react'
import Table from '../components/table/Table'
import signalementList from '../assets/JsonData/signalements-list.json'

const reportTableHead = [
    '',
    'ville',
    'date',
    'plainte',
    'lieu',
    'status'
]

const renderHead = (item, index)  => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.ville}</td>
        <td>{item.date}</td>
        <td>{item.plainte}</td>
        <td>{item.lieu}</td>
        <td>{item.status}</td>
    </tr>
)

const Signalements = () => {
    return (
        <div style={{paddingLeft: '30px'}}>
            <h2 className="page-header">
                Signalements
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='10'
                                headData={reportTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={signalementList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signalements
