<script>

console.log("Country-state selector script loaded");

document.addEventListener('DOMContentLoaded', function() { 
  (function () {
    "use strict";

    let countriesData;

    function fetchData() {
        const url = "https://raw.githubusercontent.com/cas-mktg/form-countries-regions"
        + "/main/countries_regions.json";
        fetch(url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
            mode: "cors"
        }).then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            return response.json();
        }).then(function (data) {
            countriesData = data;
            localStorage.setItem("countriesRegionsData", JSON.stringify(data));
            initializeSelects();
        }).catch(function (error) {
            console.error("Error loading the JSON file:", error);
        });
    }

    function populateCountries() {
        const countrySelect = document.getElementById("fe6098");
        const fragment = document.createDocumentFragment();
        Object.keys(countriesData).forEach(function (country) {
            fragment.appendChild(new Option(country, country));
        });
        countrySelect.appendChild(fragment);
    }

    function updateStates() {
        const stateSelect = document.getElementById("fe6099");
        const stateContainer = document.querySelector(
            ".state-select-container"
        );
        const selectedCountry = document.getElementById("fe6098").value;
        const states = countriesData[selectedCountry] || [];

        stateSelect.innerHTML = (
            states.length
            ? "<option>Select a state/province</option>"
            : ""
        );
        stateContainer.style.display = (
            states.length
            ? ""
            : "none"
        );

        if (states.length) {
            const fragment = document.createDocumentFragment();
            states.forEach(function (state) {
                fragment.appendChild(new Option(state, state));
            });
            stateSelect.appendChild(fragment);
        }
    }

    function initializeSelects() {
        populateCountries();
        document.getElementById("fe6098").addEventListener(
            "change",
            updateStates
        );
    }

    function init() {
        const countrySelect = document.getElementById("fe6098");
        const stateSelect = document.getElementById("fe6099");
        const stateContainer = document.querySelector(
            ".state-select-container"
        );

        if (!countrySelect || !stateSelect || !stateContainer) {
            console.error("Required elements not found");
            return;
        }

        stateContainer.style.display = "none";

        const cachedData = localStorage.getItem("countriesRegionsData");
        if (cachedData) {
            countriesData = JSON.parse(cachedData);
            initializeSelects();
        } else {
            fetchData();
        }
    }

    document.addEventListener("DOMContentLoaded", init);
})();
});
  </script>
