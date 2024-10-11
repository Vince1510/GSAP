function animatieBox1() {
    let tl1 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl1.from('.box1', { x: -300, opacity: 0, ease: "expo.inout" });

    return tl1;
}

function animatieBox2() {
    let tl2 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl2.from('.box2', { y: 300, opacity: 0, ease: "expo.inout" });

    return tl2;
}

function animatieBox3() {
    let tl3 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl3.from('.box3', { scale: 0.5, opacity: 0, ease: "expo.inout" });

    return tl3;
}

// Voeg meer animaties voor de andere elementen toe
function animatieBox4() {
    let tl4 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl4.from('.box4', { rotation: 180, opacity: 0, ease: "expo.inout" });

    return tl4;
}

function animatieBox5() {
    let tl5 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl5.from('.box5', { x: 300, opacity: 0, ease: "expo.inout" });

    return tl5;
}

function animatieBox6() {
    let tl6 = gsap.timeline({
        defaults: { duration: 1 }
    });

    tl6.from('.box6', { y: -300, opacity: 0, ease: "expo.inout" });

    return tl6;
}

// Hoofdtijdlijn
function animateMain() {
    let main_tl = gsap.timeline({});

    main_tl
        .add(animatieBox1(), 0)
        .add(animatieBox2(), 0.5) // Start na 0.5 seconden
        .add(animatieBox3(), 1)   // Start na 1 seconde
        .add(animatieBox4(), 1.5) // Start na 1.5 seconden
        .add(animatieBox5(), 2)   // Start na 2 seconden
        .add(animatieBox6(), 2.5);// Start na 2.5 seconden

    return main_tl;
}

// Roep de animatie aan
let masterTimeline = animateMain();

// Bonus uitdaging: Controls
document.getElementById('play').addEventListener('click', () => masterTimeline.play());
document.getElementById('pause').addEventListener('click', () => masterTimeline.pause());
document.getElementById('reverse').addEventListener('click', () => masterTimeline.reverse());
document.getElementById('restart').addEventListener('click', () => masterTimeline.restart());
