const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const proxyUrl2 = 'https://api.allorigins.win/raw?url=';
const apiUrl = 'https://api.zagaz.com/prix-moyen.php';

function displayPrices(data) {
    var pricesDiv = document.getElementById("prices");
    pricesDiv.innerHTML = "<h2>Prix moyens des carburants</h2>";

    var prixMoyenElement = data.getElementsByTagName("prix_moyen")[0];
    var carburantElements = prixMoyenElement.children;

    for (var i = 0; i < carburantElements.length; i++) {
        var carburantElement = carburantElements[i];
        var carburant = carburantElement.tagName;
        var price = parseFloat(carburantElement.textContent).toFixed(2);
        var priceElement = document.createElement("p");
        priceElement.innerHTML = `${carburant}: ${price} €/L`;
        pricesDiv.appendChild(priceElement);
    }
}
fetch(proxyUrl2 + apiUrl)
    .then(response => response.text())
    .then(data => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "application/xml");
        displayPrices(xmlDoc);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite:', error);
    });

    

document.getElementById("search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var locationInput = document.getElementById("location-input").value;
    getCoordinates(locationInput);
});

function getCoordinates(location) {
    var apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var latitude = parseFloat(data[0].lat);
                var longitude = parseFloat(data[0].lon);
                var coordinates = { latitude: latitude, longitude: longitude };
                console.log (coordinates);
                searchPrices(coordinates);
            } else {
                console.error('Impossible de trouver les coordonnées pour cette ville.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des coordonnées:', error);
        });
}

function searchPrices(location) {
    const apiUrl = `https://api.zagaz.com/list-station.php?api_key=template_milieu&latitude=${location.latitude}&longitude=${location.longitude}&rayon=5&limit=30`;

    fetch(proxyUrl + apiUrl)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/xml");
            displayResults(xmlDoc);
            console.log(xmlDoc);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
        });
}

function displayResults(data) {
    var stations = data.getElementsByTagName("station");

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Résultats de recherche :</h2>";

    for (var i = 0; i < stations.length; i++) {
        var station = stations[i];

        var stationId = station.getAttribute("id");
        var nom = station.getElementsByTagName("nom")[0].textContent;
        var adresse = station.getElementsByTagName("adresse")[0].textContent;
        var cp = station.getElementsByTagName("cp")[0].textContent;
        var ville = station.getElementsByTagName("ville")[0].textContent;

        var produits = station.getElementsByTagName("produit");
        var prixHTML = "";

        for (var j = 0; j < produits.length; j++) {
            var produit = produits[j];
            var type = produit.getElementsByTagName("type")[0].textContent;
            var prix = parseFloat(produit.getElementsByTagName("prix")[0].textContent).toFixed(3);

            prixHTML += `<p>${type}: ${prix} €/L</p>`;
        }

        var stationHTML = `<div>
                                <h3>${nom}</h3>
                                <p>${adresse}, ${cp} ${ville}</p>
                                ${prixHTML}
                            </div>`;

        resultsDiv.innerHTML += stationHTML;
    }
}
    
