let rowData = document.getElementById("rowData");
let datacontainer = document.getElementById("cont");
var data = [];

getdata();
function getdata() {
  fetch(
    `https://premast.com/wp-json/pmst/v1/products?orderby=date&order=DESC&category_slug=presentation&status=any`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      rowData.innerHTML = data.data;
      displaydata();
    })
    .catch((err) => console.log(err));
}

function displaydata() {
  var cols = ``;
  for (i = 0; i < data.length; i++) {
    cols += `
    <div class = "col-md-3">
    <div class = "container" >
    <img class="w-100" src="${data[i].image}" alt="" />
    </div>
    </div>

 

    `;
  }

  // console.log("cols : " + JSON.stringify({ cols }));
  console.log("cols : ", { cols });

  document.getElementById("rowData").innerHTML = cols;
}

getdatacontainer();

function getdatacontainer() {
  fetch(`https://premast.com/wp-json/pmst/v1/category?id=884`)
    .then((res) => res.json())
    .then((container) => {
      console.log(container);
      datacontainer.innerHTML = container.heading;
    })
    .catch((err) => console.log(err));
}
