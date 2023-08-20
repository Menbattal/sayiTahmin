//kullanıcı tahmin oyunu
alert ("Oyunumuza hoşgeldiniz en fazla 4 sayı girme hakkınız var. Bol şanslar... ");

const hedefSayi = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rastgele bir sayı


let kalanHak = 4;
let kazandi = false;

alert("1 ile 100 arasında bir sayıyı tahmin et!");

// Kullanıcının 4 hakkı var
while (kalanHak > 0) {
  const tahmin = Number(prompt("Tahmininizi girin:"));

  if (isNaN(tahmin)) {
    alert("Geçerli bir sayı girmediniz.");
  } else {
    kalanHak--;

    if (tahmin === hedefSayi) {
      kazandi = true;
      break;
    } else if (tahmin < hedefSayi) {
      alert("Daha yüksek bir sayı girin. Kalan hak: " + kalanHak);
    } else {
      alert("Daha düşük bir sayı girin. Kalan hak: " + kalanHak);
    }
  }
}

if (kazandi) {
  alert("Tebrikler! Doğru tahmin ettiniz. Hedef sayı: " + hedefSayi);
} else {
  alert("Üzgünüm, hakkınız bitti. Hedef sayı: " + hedefSayi);
}







