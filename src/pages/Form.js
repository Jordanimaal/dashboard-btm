import React, { Component } from 'react'
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
        let url = "https://geo.api.gouv.fr/communes?codePostal="
        let cp = document.querySelector("#cp").value;
        url += cp;
        if (cp.length === 5) {
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
        const age = document.querySelector("#inputAge").value;
        const ville = document.querySelector("#inputVille").value
        const date = document.querySelector("#inputDate").value;
        const genre = document.querySelector("#inputGenre").value;
        const type = document.querySelector("#inputTypeAgressions").value;
        const requete = JSON.stringify({
            'city': ville.toString(),
            'country': "France",
            'time': date.toString(),
            'gender': genre.toString(),
            'age': parseInt(age),
            'type': type.toString()
        });
        fetch("https://balancetonmichel.herokuapp.com/violences/post", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": requete
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });

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