import React, { Component, useState, useEffect } from 'react'
import '../components/topnav/topnav.css'
import logo_enigma from '../assets/images/logoENIGMA.png'

const logoImg = {
    image: logo_enigma 
}
export class About extends Component {




render() {
        return(
        
        <div className="card" style={{textAlign: 'center'}}>
            <h1 >Projet étudiant </h1>
            <p>réalisé par Jordan CORAILLER, Benjamin CATOUILLARD et Alan DECOURTRAY dans le cadre du cours de Design et de JavaScript avancé dispensé à Enigma-School</p><br/>
            <p>Si vous êtes victimes, n'hésitez pas à consulter des spécialistes pouvant vous aider. </p>
        <img src={logoImg.image} alt="#ntmepitech"/> </div>)
    };
}