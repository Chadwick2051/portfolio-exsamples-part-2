    
    let cselct = 0
    let pscore = 0
    let cscore = 0
    let tie    = 0

    function rock() {
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 0)
        {
            alert("Computer chose Rock --- Tie game")
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
            alert("Computer chose paper --- You lost")
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
            alert("Computer chose Scissors --- You Win")
            pscore += 1;
            updatescore();
            let pc ="rock"
            let cc ="scissors"
            addText (pc, cc)
            removeImg()
            addImgR()
        }

        setTimeout(clearPostGame, 5000);

    }
    function paper() {
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 1)
        {
            alert("Computer chose Paper --- Tie game")
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
            alert("Computer chose Scissor --- You lost")
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
            alert("Computer chose Rock --- You Win")
            pscore += 1;
            updatescore();
            let pc ="paper"
            let cc ="rock"
            addText (pc, cc)
            removeImg()
            addImgP()
        }

        setTimeout(clearPostGame, 5000);
    }
    function scissors() {
        event.preventDefault();
        cselct = (Math.floor(Math.random() * 3));
        if (cselct === 2)
        {
            alert("Computer chose Scissors --- Tie game")
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
            alert("Computer chose Rock --- You lost")
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
            alert("Computer chose Paper --- You Win")
            pscore += 1;
            updatescore();
            let pc ="scissors"
            let cc ="paper"
            addText (pc, cc)
            removeImg()
            addImgS()
        }
        
        setTimeout(clearPostGame, 5000);
    }

    function updatescore() {
        event.preventDefault();
        document.getElementById("pscore").innerHTML = pscore;
        document.getElementById("cscore").innerHTML = cscore;
        document.getElementById("tie").innerHTML = tie;
    }
    function addText (PC, CC) {
        let message = "Player choose: "+(PC)+"&emsp; Computer choose: "+(CC)
        document.getElementById("bruh").innerHTML = message;
    }

    function addImgR() {
        const img = document.createElement('img')
        img.src = '../images/rock.png'
        document.getElementById('results').appendChild(img)
    }
    function addImgP() {
        const img = document.createElement('img')
        img.src = '../images/paper.png'
        document.getElementById('results').appendChild(img)
    }
    function addImgS() {
        const img = document.createElement('img')
        img.src = '../images/scissors.png'
        document.getElementById('results').appendChild(img)
    }
    function addImgT() {
        const img = document.createElement('img')
        img.src = '../images/tiegame.png'
        document.getElementById('results').appendChild(img)
    }
    function removeImg() {
        var remove = document.getElementById("results")
        if (remove.hasChildNodes()){
        remove.removeChild(remove.lastChild)}
    }

    function clearPostGame() {
        const text = ""
        document.getElementById('results')
        const remove = document.getElementById("results")
        if (remove.hasChildNodes()){
        removeImg()}
        document.getElementById("bruh").innerHTML = ""
    }