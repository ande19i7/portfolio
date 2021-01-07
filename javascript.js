window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);


}

document.querySelector("#landingpageboldcontainer").addEventListener("click", boldForsvind);

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#burgersection").classList.toggle("hidden");

    let erSkjult = document.querySelector("#burgersection").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgerknap").textContent = "☰";
    } else {
        document.querySelector("#burgerknap").textContent = "✖";
    }
}


function boldForsvind() {
    console.log("boldForsvind");

    document.querySelector("#landingpageboldcontainer").classList.add("boldforsvind");
}
