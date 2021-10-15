import React, { Component, useState, useEffect } from 'react'
import listePays from '../assets/JsonData/pays.js'
import '../components/topnav/topnav.css'
import '../components/form/form.css'
export class Form extends Component {

    constructor() {
        super();
        this.state = { cities: [], isLoaded: false }
    }

    getVille = async (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ isLoaded: true, cities: data })
            });
    }



    checkCodePostal = () => {
        let champErreur = document.querySelector("#champErreur");
        champErreur.innerHTML = "";
        champErreur.id = "champErreur";
        const erreur = document.querySelector("#codePostal");
        let returnedValue = []
        let url = "https://geo.api.gouv.fr/communes?codePostal="
        let cp = document.querySelector("#cp").value;
        url += cp;
        if (cp.length == 5) {
            let valChampErreur = "";
            champErreur.innerHTML = null;
            champErreur.className="scale-out-top";
            this.getVille(url);
        }
        else {
            champErreur.className="scale-in-top";
            champErreur.innerHTML = "Vérifiez la saisie de votre code postal";

        }
    }

    generateList() {
        const { isLoaded, cities } = this.state;
        if (isLoaded) {
            return (
                <ul id="listeVille">
                    {cities.map(city => {
                        return <li key={`city-${city.code}`} className="listeSuggestion scale-in-top" onClick={(e) => this.completerVille(e)}>{city.nom}</li>
                    })}
                </ul>
            )
        }
    }
    completerVille(nom) {
        const listeVille = document.querySelector("#listeVille");
        const inputVille = document.querySelector("#inputVille");
        inputVille.value = nom.target.innerHTML;
        listeVille.remove();

    }
    verifAge() {
        console.log('here');
        let inputAge = document.querySelector('#inputAge');
        let age = parseInt(inputAge.value);
        let champErreur = document.querySelector("#champErreur");
        if (age <= 0 || age > 120) {
            
            champErreur.innerHTML = "Veuillez vérifier la saisie de l'âge.";
            champErreur.className="scale-in-top";
        }
        else {
            champErreur.className="scale-out-top";
            
        }
    }

    envoyerDonnees() {
        let age = document.querySelector("#inputAge").value;
        let ville = document.querySelector("#inputVille").value
        let date = document.querySelector("#inputDate").value;
        let genre = document.querySelector("#inputGenre").value;
        let type = document.querySelector("#inputTypeAgressions").value;
        let pays = document.querySelector("#inputPays").value;
        console.log("Ville:", ville, "Date:", date, "age:", age, "Genre:", genre, "Type:", type, "Pays:", pays);
        let requete = {
            "location": ville,
            "country": pays,
            "time": date,
            "gender": genre,
            "age": age,
            "type": type
        }
        console.log(requete);

    }

    render() {
        const PaysOptions = () =>
            listePays.map(pays =>
                <option id="inputPays" value={pays.name}>
                    {pays.name}
                </option>);
        return (
            
            <div className="card">
                <p id="champErreur"></p>
                <div className="topbar">
                    <div className="card box" >
                        <h1>Lieu</h1>
                        
                        <label>Pays : </label>
                        <select id="selectPays" name="Pays" className="topnav__search">
                            <PaysOptions />
                        </select><br />
                        <div id="codePostal" >
                            <label>Code Postal: </label>
                            <input type='number' id='cp' onBlur={this.checkCodePostal} className="topnav__search" />
                            <div id="suggestionCP"></div>
                            {this.generateList()}
                            <label name="ville">Ville : </label>
                            <input type="text" id="inputVille" className="topnav__search"></input>
                        </div>
                    </div>
                    <div className="card box"  >
                        <h1>Victime</h1>
                        <label>Type : </label>
                        <select id="inputTypeAgressions" name="TypeAgressions" className='topnav__search'>
                            <option name="harcelement" value="Harcèlement">Harcèlement</option>
                            <option name="viol" value="Viol">Viol</option>
                            <option name="agression" value="Agression">Agression</option>
                        </select>
                        <div id="genre" >
                            <label>Genre : </label>
                            <select id="inputGenre" className="topnav__search">
                                <option value="Femme" name="femme">Femme</option>
                                <option value="Homme" name="Homme">Homme</option>
                                <option value="inconnu" name="nepasrepondre">Préfère ne pas répondre</option>
                            </select>
                        </div>

                        <div id="age">
                            <label>Âge de la victime : </label>
                            <input type='number' id='inputAge' onBlur={this.verifAge} className="topnav__search"></input>
                        </div>
                    </div>
                </div>
                <div id='date' className="card">
                    <label>Date de l'agression : </label>
                    <input type="date" id="inputDate" className="topnav__search" />
                </div>

                <input type="button" id="boutonSubmit"  value="Envoyer le rapport" onClick={this.envoyerDonnees} className="" />
            </div>
        )
    };

}

