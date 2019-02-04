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
    $("#add").on("click", () => {
        const newperson = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            s1: $("#q1").val(),
            s2: $("#q2").val(),
            s3: $("#q3").val(),
            s4: $("#q4").val(),
            s5: $("#q5").val(),
            s6: $("#q6").val(),
            s7: $("#q7").val(),
            s8: $("#q8").val(),
            s9: $("#q9").val(),
            s10: $("#q10").val()
        }
        $.ajax("/api/friends", {
            type: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(newperson)
          }).then(response => {
            console.log(response)
          });
    })
}) 