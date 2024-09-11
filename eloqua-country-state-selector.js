<script>
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/ploogo/form-country-state/main/countries_regions.json")
      .then(e => e.json())
      .then(e => {
        var t = document.getElementById("fe6098"),
          n = document.getElementById("fe6099"),
          o = document.querySelector(".state-select-container");
        o.style.display = "none";
        Object.keys(e).forEach(e => {
          var n = document.createElement("option");
          n.value = e;
          n.textContent = e;
          t.appendChild(n);
        });
        t.onchange = function() {
          var t = e[this.value] || [];
          if (n.innerHTML = "", t.length > 0) {
            o.style.display = "";
            var a = document.createElement("option");
            a.textContent = "Select a state/province";
            n.appendChild(a);
            t.forEach(function(e) {
              var t = document.createElement("option");
              t.value = e;
              t.textContent = e;
              n.appendChild(t);
            });
          } else o.style.display = "none";
        };
      })
      .catch(e => {
        console.error("Error loading the JSON file:", e);
      });
  });
})();
</script>
