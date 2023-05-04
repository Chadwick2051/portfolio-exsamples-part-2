$(document).ready(() => {

    let cselct = 0
    let pscore = 0
    let cscore = 0
    let tie    = 0

    $("#rock").click(function(){
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 0)
        {
            // alert("Computer chose Rock --- Tie game")
            tie += 1;
            updatescore();
            let pc ="rock"
            let cc ="rock"
            addText (pc, cc)
            removeImg()
            addImgT()
        }
        else if (cselct === 1)
        {
            // alert("Computer chose paper --- You lost")
            cscore += 1;
            updatescore();
            let pc ="rock"
            let cc ="paper"
            addText (pc, cc)
            removeImg()
            addImgP()
        }
        else
        {
            // alert("Computer chose Scissors --- You Win")
            pscore += 1;
            updatescore();
            let pc ="rock"
            let cc ="scissors"
            addText (pc, cc)
            removeImg()
            addImgR()
        }
        starttimer()
    })
    $("#paper").click(function(){
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 1)
        {
            // alert("Computer chose Paper --- Tie game")
            tie += 1;
            updatescore();
            let pc ="paper"
            let cc ="paper"
            addText (pc, cc)
            removeImg()
            addImgT()
        }
        else if (cselct === 2)
        {
            // alert("Computer chose Scissor --- You lost")
            cscore += 1;
            updatescore();
            let pc ="paper"
            let cc ="scissors"
            addText (pc, cc)
            removeImg()
            addImgS()
        }
        else
        {
            // alert("Computer chose Rock --- You Win")
            pscore += 1;
            updatescore();
            let pc ="paper"
            let cc ="rock"
            addText (pc, cc)
            removeImg()
            addImgP()
        }

        starttimer()
    })
    $("#scissors").click(function(){
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 2)
        {
            // alert("Computer chose Scissors --- Tie game")
            tie += 1;
            updatescore();
            let pc ="scissors"
            let cc ="scissors"
            addText (pc, cc)
            removeImg()
            addImgT()
        }
        else if (cselct === 0)
        {
            // alert("Computer chose Rock --- You lost")
            cscore += 1;
            updatescore();
            let pc ="scissors"
            let cc ="rock"
            addText (pc, cc)
            removeImg()
            addImgR()
        }
        else
        {
            // alert("Computer chose Paper --- You Win")
            pscore += 1;
            updatescore();
            let pc ="scissors"
            let cc ="paper"
            addText (pc, cc)
            removeImg()
            addImgS()
        }
        
        starttimer()
    })

    function updatescore() {
        event.preventDefault();
        $("#pscore").text(pscore);
        $("#cscore").text(cscore);
        $("#tie").text(tie);
    }
    function addText (PC, CC) {
        let message = "Player choose: "+(PC)+" ---- Computer choose: "+(CC)
        $("#bruh").text(message);
    }

    function addImgR() {
        var img = $('<img />',
             { id: 'rock',
               src: '../images/rock.png', 
             })
        // const img = document.createElement('img')
        // img.src = '../images/rock.png'
        $("#results").append(img)
    }
    function addImgP() {
        var img = $('<img />',
        { id: 'rock',
          src: '../images/paper.png', 
        })
        // const img = document.createElement('img')
        // img.src = '../images/paper.png'
        $("#results").append(img)
    }
    function addImgS() {
        var img = $('<img />',
        { id: 'rock',
          src: '../images/scissors.png', 
        })
        // const img = document.createElement('img')
        // img.src = '../images/scissors.png'
        $("#results").append(img)
    }
    function addImgT() {
        var img = $('<img />',
        { id: 'rock',
          src: '../images/tiegame.png', 
        })
        // const img = document.createElement('img')
        // img.src = '../images/tiegame.png'
        $("#results").append(img)
    }
    function removeImg() {
        var img = $('<img />',
        { id: 'rock',
          src: '../images/rock.png', 
        })
        // var remove = $("#results")
        // if (remove.hasChildNodes()){
        // remove.removeChild(remove.lastChild)}
        $("#results").empty();
    }
    function starttimer(){
    if (typeof timer != "undefined")
    {
        clearTimeout(timer)
    }
    timer =setTimeout(clearPostGame, 5000)
    }
    function clearPostGame() {
        const text = ""
        removeImg()
        $("#bruh").text(text)
        clearTimeout(timer)
    }
});