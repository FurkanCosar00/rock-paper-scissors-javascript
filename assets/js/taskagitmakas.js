            // OYUN HAMLELERİ

let Hareketler = ['taş', 'kağıt', 'makas'];

            // BİLGİSAYAR HAMLESİ

let RastgeleSayi = Math.round(Math.random() * 2);
let BilgisayarHamlesi = Hareketler[RastgeleSayi];

            // KULLANİCİ HAMLESİ

let KullaniciHamlesi = prompt("Taş, kağıt ya da makas seçin:");

            // OYUN SONUCU

if (Hareketler.indexOf(KullaniciHamlesi) !== -1) {

    if ((KullaniciHamlesi === 'taş' && BilgisayarHamlesi === 'makas') || 
        (KullaniciHamlesi === 'kağıt' && BilgisayarHamlesi === 'taş') || 
        (KullaniciHamlesi === 'makas' && BilgisayarHamlesi === 'kağıt')
       ) {
        alert('Kazandınız Tebrikler. Bilgisayar ' + BilgisayarHamlesi + ' Seçti.')
       }
    
    else if (KullaniciHamlesi === BilgisayarHamlesi) {
        alert("Berabere! Bilgisayar da " + BilgisayarHamlesi + ' Seçti.');
        } 
        
    else {
        alert("Kaybettiniz! Bilgisayar " + BilgisayarHamlesi + ' Seçti.');
        } 
}

    else {
        alert('Geçersiz seçim yaptınız. Lütfen taş, kağıt veya makas seçin.'); 
    }

