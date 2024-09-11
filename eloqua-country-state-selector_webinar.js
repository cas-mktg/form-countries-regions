<script> 
  console.log("Country-state selector script loaded");

document.addEventListener('DOMContentLoaded', function() {
  (function() {
    "use strict";
    
    // Embed your JSON data directly in the script
    const countriesData = {
      "United States": ["Alabama", "Alaska", "Arizona", /* ... other states ... */],
      "Canada": ["Alberta", "British Columbia", "Manitoba", /* ... other provinces ... */],
      // ... other countries and their states/provinces ...
    };

    function initializeSelects() {
      const countrySelect = document.getElementById("fe6098");
      const stateSelect = document.getElementById("fe6099");
      
      // Populate country select
      Object.keys(countriesData).forEach(country => {
        const option = new Option(country, country);
        countrySelect.add(option);
      });

      // Handle country selection change
      countrySelect.addEventListener('change', function() {
        const selectedCountry = this.value;
        const states = countriesData[selectedCountry] || [];

        // Clear and populate state select
        stateSelect.innerHTML = '<option value="">Select State/Province</option>';
        states.forEach(state => {
          const option = new Option(state, state);
          stateSelect.add(option);
        });

        // Show/hide state select based on whether states exist
        stateSelect.style.display = states.length ? '' : 'none';
      });
    }

    initializeSelects();
  })();
});
  </script>
