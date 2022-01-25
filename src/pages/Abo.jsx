import React from 'react'
import './abo.css'
import free_img from './img/free.png'
import premium_img from './img/premium.png'
import pro_img from './img/pro.png'

const aboImg = {
    image : free_img 
}

const premiumImg = {
    image : premium_img 
}

const proImg = {
    image : pro_img 
}

const Abo = () => {
    return (
        <div className="row" style={{paddingLeft: '30px'}}>
            <div className="card" id="divCard" style={{width: '400px', height: '600px', textAlign: 'center' }}>
            <h3 style={{textAlign: 'center'}}>Formule Freemium</h3>
            <img src={aboImg.image} alt="" style={{height: '150px'}}/> 
                <ul>
                    <li>•Accès aux données gratuites</li>
                    <li>•Exportation des graphiques sous format JPG*</li>
                </ul>
                <h2 style={{paddingTop: '250px'}}>Gratuit</h2>
            </div>
            <div style={{width: '60px'}}></div>
            <div className="card" id="divCard" style={{width: '400px', height: '600px', textAlign: 'center'}}>
            <h3 style={{textAlign: 'center'}}>Formule Premium</h3>
            <img src={premiumImg.image} alt="" style={{height: '150px'}}/> 
                <ul>
                    <li>•Accès aux données gratuites et premium</li>
                    <li>•Exportation des graphiques JPG, PNG, SVG, CSV</li>
                    <li>•Accès à la visualisation avancée des données</li>
                    <li>•Possibilite d'avoir certains graphiques sur mesure*</li>
                </ul>
                <h2 style={{paddingTop: '130px'}}>99.99€/Mois</h2>
            </div>
                <div style={{width: '60px'}}></div>
            <div className="card" id="divCard" style={{width: '400px', height: '600px', textAlign: 'center' }}>
            <h3 style={{textAlign: 'center'}}>Formule Pro</h3>
            <img src={proImg.image} alt="" style={{height: '150px'}}/> 
                <ul>
                    <li>•Accès à l'ensemble des données</li>
                    <li>•Exportation des graphiques sous toutes les formes</li>
                    <li>•Accès à la visualisation avancée des données</li>
                    <li>•Possibilite d'avoir tous les graphiques sur mesure</li>
                    <li>•Accès à l'API</li>
                    <li>•Accès à des données privées, coucou 2</li>
                </ul>
                <h2 style={{paddingTop: '110px'}}>199.99€/Mois</h2>
            </div>
       </div>
    )
}

export default Abo
