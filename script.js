

// POST request 
document.getElementById("newtank").addEventListener("click", function(event) {
    event.preventDefault();

    let loc = document.getElementById("location").value;
    let lat = document.getElementById("latitude").value;
    let long = document.getElementById("longitude").value;
    let perc_full = document.getElementById("percentage_full").value;

    let Body = {
        location:loc,
        lat:lat,
        long:long,
        percentage_full:perc_full,
    }

    fetch("http://localhost:5000/data" , {
        method: "POST",
        body:JSON.stringify(Body),
        headers: {
            "Content-Type": "application/json",
        },
    })

        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            var info = document.getElementsByClassName("tanks")[0].childElementCount;
            console.log(info)
            document.getElementsByClassName("tanks")[0].appendChild(createTankCard(json, info));
        })
      
       

});


//GET request
var url = "http://localhost:3001/tank"
        window.onload = function() {
            var getOptions = {
                method: "GET"
            };
            
            fetch(url)
            .then((res) => res.json())
            .then((tanks) => {
                console.log(tanks);
                var body = document.querySelector("body");
                
                tanks.forEach((tank) => {
                    console.log(tank._id["$oid"]);
                    var tankCard = document.createElement("tank-card");
                    tankCard.setAttribute("tank_id", tank._id["$oid"]);
                    tankCard.setAttribute("latitude", tank.latitude);
                    tankCard.setAttribute("longitude", tank.longitude);
                    tankCard.setAttribute("percentage_full", tank.percentage_full);
                    tankCard.setAttribute("location", tank.location);
                    tankCard.setAttribute("image", "https://image.sciencenorway.no/1438480.jpg?imageId=1438480&width=1058&height=604");
                    body.appendChild(tankCard);
                });   // use data collected from database to create card

            });
            
        };
