
var index = `
    <div class="hero-container" role="img" alt="mynd innan af staðnum">
        <div class="hero-slagord">
            <h1>Ykkar staður,</h1>
            <h1>ykkar stund</h1>
        </div>
        <div class="hero-button">
            <button onclick="matsedillSwap(false)" type="button" class="button-1">
                <a>Matseðill</a>
            </button>
        </div>
    </div>
    <section class="tilbod-section">
        <div class="boltatilbod-card">
            <button id="boltaModalButton" class="button-2">
                <a>Boltatilboð</a>
            </button>
        </div>
        <div id="boltaModal" class="modal">
            <div class="bolta-modal-content">
                <span class="close">&times;</span>
            </div>
        </div>
        <div class="pizzatilbod-card">
            <button id="pizzaModalButton" class="button-2">
                <a>Pizzatilboð</a>
            </button>
        </div>
        <div id="pizzaModal" class="modal">
            <div class="pizza-modal-content">
                <span class="closePizza">&times;</span>
            </div>
        </div>
    </section>
    <section class="event-section">
        <div class="event-container">
            <div class="event-head">
                <h1>Viðburðir</h1>
            </div>
            <div class="event-wrapper">
            
            </div>
            <button class="eventButton"onclick="event1Create()">Create event</button>
            <input id="event1Input" type="text"/>
        </div>
    </section>
    <section class="afhverju-section">
        <div class="afhverju-okkur-container">
            <div class="afhverju-head">
                <h1>Afhverju okkur?</h1>
            </div>
            <div class="info-og-panta-container">
                <div class="afhverju-info">
                    <p>Á Rauða Ljóninu er tekið vel á móti öllum sem eiga leið þar inn, hvort sem að þér langi í einn kaldan eftir erfiðan vinnudag eða kíkja með fjölskylduna út að borða í þægilegu umhverfi.</p>
                    <p>Við sýnum einnig beint frá öllum helstu íþróttaviðburðum á 70” flatskjáum þar sem boltatilboðið okkar sívinsæla er á boðstólnum yfir öllum leikjum.</p>
                    <p>Heimagerðu pizzurnar okkar eru ávallt vinsælar og ekki skemmir fyrir að það er 30% afsláttur ef pizzurnar eru teknar með heim.</p>
                </div>
                <div class="pantadusalinn-container">
                    <button onclick="hafaSambandFraIndex()" type="button" class="button-3"> <a>Pantaðu salinn</a></button>
                </div>
            </div>
        </div>
    </section>
`


var thjonusta = `
    <section class="thjonustu-section">
        <div class="veisluthjonustu-container">
            <div class="veisluthjonustu-header">
                <h1>Veisluþjónusta</h1>
            </div>
            <div class="veislu-content">
                <div class="veislu-paragraphs">
                    <h3>Við bjóðum upp á veisluþjónustu sem hægt er að nýta í allskyns veislur!</h3>
                </div>
                <div class="veisluthjonustu-mynd"></div>
                <div class="veislu-button">
                    <button onclick="hafaSamband()" type="button" class="button-4"> <a href>Pantaðu hér</a></button>
                </div>
            </div>
        </div>
        <div class="pantasal-container">
            <div class="veisluthjonustu-header">
                <h1>Leigðu salinn</h1>
            </div>
            <div class="veislu-content">
                <div class="veislu-paragraphs">
                    <h3>Koníaksstofan okkar er sér salur þar sem hægt er að leigja fyrir alls kyns viðburði, hingað til hefur allt milli himins og jarðar verið haldið þar inni; afmæli, fermingar, útskriftarveislur, reunion, árshátíðir og svo mætti lengi telja.</h3>
                </div>
                <div class="pantasal-mynd"></div>
                <div class="veislu-button">
                    <button onclick="hafaSamband()" type="button" class="button-4"> <a href>Pantaðu hér</a></button>
                </div>
            </div>
        </div>
        <div id="hafdu-samband"class="hafa-samband-container">
            <div class="hafa-samband-header">
                <h1>Hafðu samband</h1>
            </div>
            <div class="checkboxes-container">
                <input class="checker" type="checkbox" name="veisluþjónusta" value="þjónusta">Veisluþjónusta</input>
                <br><input class="checker"  type="checkbox" name="salur" value="salur">Leigja sal</input>
            </div>
            <div class="form-container">
                <form class="payer-info">
                    <input type="text" id="nafn" name="nafn" placeholder="Nafn*"><br>
                    <input type="text" id="netfang" name="netfang" placeholder="Netfang*"><br>
                    <input type="text" id="simi" name="sími" placeholder="Sími*"><br>
                    <textarea id="skilabod" name="skilaboð" placeholder="Skilaboð*"></textarea>
                    <button type="button" class="senda-button"><a href>Senda</a></button>
                </form>
            </div>
        </div>
    </section>
`

var umokkur = `
    <section class="umokkur-section">
        <div class="umokkur-paragraphs">
            <p>Rauða Ljónið opnaði undir núverandi eigendum 1 maí 2009 og hefur síðan þá lagt upp með huggulegri þjónustu og afslöppuðu andrúmslofti.</p>
            <p>Í gegnum tíðina höfum við tekið vel á móti íbúum Seltjarnarness og nágrenni og einblínt á að vera fjölskylduvænn veitingastaður.</p>
            <p>Koníaksstofan okkar er sér salur þar sem hægt er að leigja fyrir alls kyns viðburði, hingað til hefur allt milli himins og jarðar verið haldið þar inni; afmæli, fermingar, útskriftarveislur, reunion, árshátíðir og svo mætti lengi telja.</p>
            <p>Það má einnig finna sér ýmislegt til afþreyingar en á staðnum er pool borð sem hægt er að spila að kostnaðarlausu og síðan er verið að vinna í að setja upp píluspjald, ef þetta er ekki eitthvað fyrir þig þá eru barþjónarnir alltaf í góðu skapi.</p>
        </div>
        <div class="umokkur-myndir">
            <div class="inngangur-ad-ljoni"></div>
            <div class="billiardbord-pic"></div>
        </div>
    </section>
`


/* <div class="verd-litilmid"><p>Lítil:<strong>${maturOgDrykkir[i].verd1}  </strong><b> Mið:</b><strong>${maturOgDrykkir[i].verd2}</strong></p></div>
                        <div class="verd-stor"><p>Stór: <strong>${maturOgDrykkir[i].verd3}</strong></p></div> */

document.querySelector("main").innerHTML = index



/** FYRIR MATSEÐILINN * * *  */

var matsedillSwap = function(isHamburger){
    console.log("kala   ")
    matsedillinn()
    if(isHamburger && window.innerWidth < 500){
        toggleHamburger()
    }
}

var indexSwap = function(){
    document.querySelector("#").innerHTML = index

    if(window.innerWidth < 500){
        toggleHamburger()
    }
}
var hafaSamband = function(){
    location.href = "#hafdu-samband";
    if(window.innerWidth < 500){
        toggleHamburger()
    }
}
var hafaSambandFraIndex = function(){
    document.querySelector("main").innerHTML = thjonusta
    location.href = "#hafdu-samband"
    if(window.innerWidth < 500){
        toggleHamburger()
    }
}

var umOkkurSwap = function(){
    document.querySelector("main").innerHTML = umokkur
    if(window.innerWidth < 500){
        toggleHamburger()
    }
}
var thjonustaSwap = function(){
    document.querySelector("main").innerHTML = thjonusta
    console.log(window.clientWidth)
    if(window.innerWidth < 500){
        toggleHamburger()
    }
}


/****  Modal Gluggi BOLTA/PIZZA tilboð ****/


var modal = document.getElementById('boltaModal');
var btn = document.getElementById("boltaModalButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == pizzaModal) {
        closeModal("pizzutilboð")
    } else if (event.target == modal){
        closeModal("boltatilboð")
    }
}

var closeModal = function(modalType){
    if(modalType === "boltatilboð"){
        modal.style.display = "none";
    } else if (modalType === "pizzutilboð"){
        pizzaModal.style.display = "none";
    }
}


var pizzaModal = document.getElementById('pizzaModal')
var pizzaBtn = document.getElementById("pizzaModalButton");
var pizzaSpan = document.getElementsByClassName("closePizza")[0];

pizzaModalButton.onclick = function() {
    pizzaModal.style.display = "block";
}
pizzaSpan.onclick = function() {
    pizzaModal.style.display = "none";
}



/***** EVENT SECTION JAVASCRIPT  ****/

var events = []
var eventInput = document.querySelector("#event1Input")
var addEvent = document.querySelector(".eventButton")
var eventContainer = document.querySelector(".event-wrapper")

var event1Create = function(){
    var value = eventInput.value
    var newEvent = {
        name: value
    }
    events.push(newEvent)
    renderEvents()
}
var renderEvents = function(){
    eventContainer.innerHTML = ``
     for(var i=0; i < events.length; i++){
         
        eventContainer.innerHTML += `
        <div class="event-new"><h3>${events[i].name}</h3></div>
        `
    }
}
addEvent.onclick = event1Create

/***** Hamborgara Menu  ****/

var toggleHamburger = function(){
    var hamburgerContainer = document.querySelector(".mobile-hamburger-container")

    if(hamburgerContainer.classList.contains("active")){

        hamburgerContainer.classList.toggle("active")
        hamburgerContainer.innerHTML = "";
        
    } else{
        hamburgerContainer.classList.toggle("active")
        var hamburgerMenu = `
    <div class="hamburgerContent">
        <a href="#" onclick="matsedillSwap(true)">Matseðill</a>
        <a href="#" onclick="thjonustaSwap()">Þjónusta</a>
        <a href="#" onclick="umOkkurSwap()">Um okkur</a>
        <a href="#">English</a>
        <a href="#" id="mobile-search">Leit</a>
    </div>
    `
    hamburgerContainer.innerHTML = hamburgerMenu;
    }
    
    
}
