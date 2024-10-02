/*Adress som servern kommer att vara aktiv på*/
const url = "";

// Ladda in data för kunna ha upp det på webben.
function loadData() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // Berättar om något är fel eller inte
        throw new Error(`HTTP error, Status = ${response.status}`);
      }
      // Gör om JSON till javascript objekt och returnerar ett promise
      return response.json();
    })
    .then((data) => {
      // Om datan ska ut på hemsidan görs det här.
    });
  // Eventuell felhantering ska finnas här nedan-
  // [...]
}
