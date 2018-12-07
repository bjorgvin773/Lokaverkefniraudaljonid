var header = `
    <div class="mobile-hamburger-container"></div>
    <nav class="nav-container">
    <ul class="nav-list">
        <li><a href="#" onclick="matsedillSwap()">Matseðill</a></li>
        <li><a href="#" onclick="thjonustaSwap()">Þjónusta</a></li>
    </ul>
    <a href onclick=index><img src="images/logo-rauda.jpg" class="ljonid-logo" alt="Ljónið logo"></a>
    <ul class="nav-list-right">
        <li><a href="#" onclick="umOkkurSwap()">Um okkur</a></li>
        <li><a href>English</a></li>
        <li><img src="images/search.png"></li>
    </ul>
    </nav>
    <div class="mobile-head">
    <div class="mobile-logo">
        <a href onclick=index>
            <img src="images/logo-rauda.jpg" class="ljonid-logo" alt="Ljónið logo">
        </a>
    </div>
    <div onclick="toggleHamburger()" class"hamburger-container">
        <div class="burger burgerMarg"></div>
        <div class="burger"></div>
        <div class="burger"></div>
    </div>`


document.querySelector("header").innerHTML = header

    var footer = `
    <div id="footer-logo">
        <img src="images/logo-rauda.jpg">
    </div>
    <div id="footer-address">
        <h1>Eiðistorgi 15,</h1>
        <h1>170 Seltjarnanesi</h1>
    </div>
    <div id="footer-opnun">
        <ul>
            <li>Opnunartími</li>
            <li>Mán-fös</li>
            <li>16:00-23:00</li>
            <li>Lau-Sun</li>
            <li>12:00-23:30</li>
        </ul>
    </div>
    <div id="footer-nav-div">
        <ul id="footer-nav">
            <li><a href="#" onclick="umOkkurSwap()">Um okkur</a></li>
            <li><a href="#" onclick="hafaSambandFraIndex()">Hafa samband</a></li>
            <li><a href="#">Efst á síðu</a></li>
            <li><img src="images/facebook.png" id="facebook-logo"></li>
        </ul>
    </div>
    `
    
document.querySelector("footer").innerHTML = footer