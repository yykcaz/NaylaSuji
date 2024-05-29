function waktuRealtime() {
  var d = new Date();
  var t = d.toLocaleString();
  document.getElementById("waktu").innerHTML = t;
}
setInterval(waktuRealtime, 1);



var tekssapaanindo1 = "Haiiii Nayla, selamat ulang tahun yang ke -jie ijsfije osiefjofjewjfje wojew jsiejf mewjf oweijf fweinf knienfekj fkenfinefnewij kwnefn";
var i = 0;

function efekMengetikSapaanIndo1() {
  if (i < tekssapaanindo1.length) {
    document.getElementById("sapaanindo1").innerHTML += tekssapaanindo1.charAt(i);
    i++;
    setTimeout(efekMengetikSapaanIndo1, 100);
  }
}
setTimeout(efekMengetikSapaanIndo1, 300);

var tekslanjutanindo1 = "Hai Nayla, selamat ulang tahun yang ke - ";
var j = 0;
var angka = 1;
var intervalId;

function hitungAngka() {
  if (angka <= 17) {
    document.getElementById("umur").innerHTML = angka;
    angka++;
  } else {
    clearInterval(intervalId);
  }
}

function efekMengetikLanjutanIndo1() {
  if (j < tekslanjutanindo1.length) { 
    document.getElementById("lanjutanindo1").innerHTML += tekslanjutanindo1.charAt(j);
    j++;
    setTimeout(efekMengetikLanjutanIndo1, 50);
  } else {
    intervalId = setInterval(hitungAngka, 100);
    hitungAngka();
  }
}

setTimeout(efekMengetikLanjutanIndo1, 50);






var surat = document.getElementById('surat');
var posisi = 0;
var arah = 1;
setInterval(function() {
  posisi += arah;
  if (posisi > 15 || posisi < 0) {
    arah = -arah;
  }
  surat.style.transform = 'translateY(' + posisi + 'px)';
}, 100);





var tekssapaanindo2 = "TESSS";
var k = 0;

function efekMengetikSapaanIndo2() {
  if (k < tekssapaanindo2.length) {
    document.getElementById("sapaanindo2").innerHTML += tekssapaanindo2.charAt(k);
    k++;
    setTimeout(efekMengetikSapaanIndo2, 100);
  }
}
setTimeout(efekMengetikSapaanIndo2, 10);

var tekslanjutanindo2 = "Haiiii Nayla, selamat ulang tahun yang ke -";
var l = 0;

function efekMengetikLanjutanIndo2() {
  if (l < tekslanjutanindo2.length) {
    document.getElementById("lanjutanindo2").innerHTML += tekslanjutanindo2.charAt(l);
    l++;
    setTimeout(efekMengetikLanjutanIndo2, 100);
  }
}
setTimeout(efekMengetikLanjutanIndo2, 1000);



window.onload = function() {
        var video = document.getElementById('kanan');
        video.style.right = '0';
    }
	






var teksKlipUlangTahun = "TESSS";
var q = 0;

function efekKlipUlangTahun() {
  if (q < teksKlipUlangTahun.length) {
    document.getElementById("klip").innerHTML += teksKlipUlangTahun.charAt(q);
    q++;
    setTimeout(efekKlipUlangTahun, 100);
  }
}
setTimeout(efekKlipUlangTahun, 300);








var tekssapaanjepang1 = "Haiiii Nayla Suji, selamat ulang tahun yang ke -";
var m = 0;

function efekMengetikSapaanJepang1() {
  if (m < tekssapaanjepang1.length) {
    document.getElementById("sapaanjepang1").innerHTML += tekssapaanjepang1.charAt(m);
    m++;
    setTimeout(efekMengetikSapaanJepang1, 100);
  }
}
setTimeout(efekMengetikSapaanJepang1, 50);

var tekslanjutanjepang1 = "Selamat ulang tahun Nayla Suji yang ke - ";
var n = 0;
var angka = 1;
var intervalId;

function hitungAngka() {
  if (angka <= 17) {
    document.getElementById("umur").innerHTML = angka;
    angka++;
  } else {
    clearInterval(intervalId);
  }
}

function efekMengetikLanjutanJepang1() {
  if (n < tekslanjutanjepang1.length) { 
    document.getElementById("lanjutanjepang1").innerHTML += tekslanjutanjepang1.charAt(n);
    n++;
    setTimeout(efekMengetikLanjutanJepang1, 50);
  } else {
    intervalId = setInterval(hitungAngka, 100);
    hitungAngka();
  }
}

setTimeout(efekMengetikLanjutanJepang1, 1000);






var tekssapaanjepang2 = "HALO HALO HALO";
var o = 0;

function efekMengetikSapaanJepang2() {
  if (o < tekssapaanjepang2.length) {
    document.getElementById("sapaanjepang2").innerHTML += tekssapaanjepang2.charAt(o);
    o++;
    setTimeout(efekMengetikSapaanJepang2, 100);
  }
}
setTimeout(efekMengetikSapaanJepang2, 10);

var tekslanjutanjepang2 = "Hai aku orang jepang";
var p = 0;

function efekMengetikLanjutanJepang2() {
  if (p < tekslanjutanjepang2.length) {
    document.getElementById("lanjutanjepang2").innerHTML += tekslanjutanjepang2.charAt(p);
    p++;
    setTimeout(efekMengetikLanjutanJepang2, 100);
  }
}
setTimeout(efekMengetikLanjutanJepang2, 1000);






var surat2 = document.getElementById('surat2');
var posisi2 = 0;
var arah2 = 1;
setInterval(function() {
  posisi2 += arah2;
  if (posisi2 > 15 || posisi2 < 0) {
    arah2 = -arah2;
  }
  surat2.style.transform = 'translateX(' + posisi + 'px)';
}, 100);






var videos = document.querySelectorAll(".bergulir");
videos.forEach(function(video) {
    video.addEventListener('loadedmetadata', function() {
    }, false);
    video.style.animation = "scroll 7s linear infinite";
});