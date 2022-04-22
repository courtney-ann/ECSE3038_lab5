

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
fetch ("http://localhost:5000/data")
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        var i;
        for (i = 0; i < json.length ; i++) {
            document.getElementsByClassName("tanks")[0].appendChild(createTankCard(json[i], i))
        }
    });
