$(() => {   
    $("#btn").on("click", () => {
        console.log("hello")
        $.ajax("/api/friends/", {
            type: "GET",
          }).then(response => {
              console.log(response.locations[0].name)
              $("#resp").html(response.locations[0].name)
          });
    })
}) 