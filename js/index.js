var sisimiring;
var kelilingjajar;

function Luas(){
    alas=document.getElementById("alas").value;
    tinggi=document.getElementById("tinggi").value;
    luas=(alas*tinggi)*0.5;
    document.getElementById("luas").value=luas;
    document.getElementById("rumus").innerText = "L = 1/2 X a X t";
    document.getElementById("itung").innerText = "L = 1/2 X "+alas+" X "+tinggi;
    document.getElementById("hasil").innerText = "L = "+luas;
    }


function Keliling(){
    ssa=document.getElementById("ssa").value;
    ssb=document.getElementById("ssb").value;
    ssc=document.getElementById("ssc").value;
    keliling=parseInt(ssa)+parseInt(ssb)+parseInt(ssc);
    document.getElementById("keliling").value=keliling;
    document.getElementById("rumuskel").innerText = "K = S1 + S2 + S3";
    document.getElementById("itungkel").innerText = "K = "+ssa+" + "+ssb+" + "+ssc;
    document.getElementById("hasilkel").innerText = "K = "+keliling;
    }

function LKjajar(){ 
    alasjajar=parseFloat (document.getElementById("alasjajar").value);
    tinggijajar=parseFloat (document.getElementById("tinggijajar").value);
    luasjajar=alasjajar*tinggijajar;
    sisimiring=3/4*alasjajar;
    kelilingjajar=2*(alasjajar+sisimiring);
    document.getElementById("luasjajar").value=luasjajar;
    document.getElementById("kelilingjajar").value=kelilingjajar;
    document.getElementById("rumusjajar").innerText = "L = Alas x Tinggi";
    document.getElementById("rumusjajar1").innerText = "K = 2 x (a + b)";
    document.getElementById("itungjajar").innerText = "L = "+alasjajar+" X "+tinggijajar;
    document.getElementById("itungjajar1").innerText = "K = 2 X "+alasjajar+" X "+sisimiring;
    document.getElementById("hasil").innerText = "L = "+luasjajar;
    // document.getElementById("hasil1").innerText = "K = "+kelilingjajar;
    }



let segi3=document.getElementById("segi3");
let jajar=document.getElementById("jajar");
console.log(segi3);