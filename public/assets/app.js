$(() => {  
    getstuff = () => {
        console.log("hello")
        $.ajax("/api/friends/", {
            type: "GET",
          }).then(response => {
              findmatch(response)
          });
    } 
    findmatch = (response) => {
        const arrayArray = []
        for(i=0;i<response.friends.length;i++){
          tempArray = [
              response.friends[i].score_1,
              response.friends[i].score_2,
              response.friends[i].score_3,
              response.friends[i].score_4,
              response.friends[i].score_5,
              response.friends[i].score_6,
              response.friends[i].score_7,
              response.friends[i].score_8,
              response.friends[i].score_9,
              response.friends[i].score_10,
          ]
          arrayArray.push(tempArray)
        }
        newscores = arrayArray[arrayArray.length-1]
        bestScore = 100;
        bestPosition = 0;
        for(i=0;i<arrayArray.length-1;i++) {
          tempscore=0;
          for(j=0;j<10;j++) {
              temp2 = Math.abs(arrayArray[i][j] - newscores[j])
              tempscore += temp2
          }
          if(tempscore<bestScore) {
              bestScore = tempscore
              bestPosition = i
          }
        }
        bestMatch = response.friends[bestPosition]
        $("#wSh").css("display", "none")
        $("#wSurvey").css("display", "none")
        $("#wMatch").css("display", "block")
        $("#mHead").html("Congratulations " + response.friends[response.friends.length-1].name + "! You have been matched with " + bestMatch.name)
        $("#mImg").attr("src", bestMatch.photo)
    }
    
    poststuff = newperson => {
        $.ajax("/api/friends", {
            type: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(newperson)
          }).then(response => {
          });
    }
    //smooth scrolling links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    $("#submitBtn").on("click", event => {
      event.preventDefault();
      validateForm = () => {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }
      if(validateForm()) {
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
        poststuff(newperson)
        getstuff()
        $("#name").val("") 
        $("#photo").val("")
        $("#q1").val("")
        $("#q2").val("")
        $("#q3").val("")
        $("#q4").val("")
        $("#q5").val("")
        $("#q6").val("")
        $("#q7").val("")
        $("#q8").val("")
        $("#q9").val("")
        $("#q10").val("")

      }else {
        alert("Please fill out all fields before submitting!")
      }

    })
}) 