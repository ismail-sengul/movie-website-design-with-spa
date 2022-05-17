//Bu kısımda giriş yap ve kayıt butonlarının düzgün çalışması için belli başlı işlemler yaptık
//Normalde biz sadece üst ortam kısmını yaptığımız için(Backend kısmı olmadığı için) kayıt olma ve giriş yapma işlemlerinde sadece boş durmasın diye göstermelik bir kaç işlem yaptık

$(document).ready(function() {
    console.log( "Ready!" );

    //Giriş yap modalındaki butona tıkladığımızda
    $("#girisYapBtn").click(function() {

        var nick = $("#nickname-giris").val();//kullanıcı adı kısmındaki değeri aldık
        var sifre = $('#password-giris').val();//şifre kısmındaki değeri aldık
        if (nick !=="" && sifre !=="") { //Eğer iki kısımda boş değilse
            var modalGirisYap = $("#modalGirisYap").text("Kullanıcı Adı: " + nick);//Giriş yap butonunu kullanıcı adı bilgisi ile değiştirdik
        $("#modalKayitOl").hide();//kayıt ol butonunu gizledik

            //Giriş yaptıktan sonra giriş yap butonunun yerine kullanıcı geldiğinden butona tıklandığında herhangi bir işlemin yapılmaması sağlandı. Bunun için bazı attribute leri sildik
            modalGirisYap.removeAttr("data-bs-toggle");
            modalGirisYap.removeAttr("data-bs-target");
            modalGirisYap.removeAttr("href");
            alert("Giriş yapıldı.Hoşgeldin "+nick);//Giriş yaptıktan sonra ekrana hoşgeldin yazısı çıkardık
        } else { //Eğer kullanıcı adı ve şifre kısmı boş ise ekrana hata yazısını gösterdik
            alert("Hatalı Giriş");
        }
    });
    //Kayıt ol modalındaki butona tıklandığında
    $("#kayitOlBtn").click(function() {
        //Form içerisindeki bilgiler değişkenlere atandı
        var kullanıcıAdı = $("#nickname-kayit").val();
        var sifre = $("#password-kayit").val();
        var sifreTekrar = $("#password-kayit-tekrar").val();
        var mail = $("#email-kayit").val();

        //inputlar kontrol edildi. Boş kalan kısımların hata mesajları yazıldı ve pass değişkeni false atandı
        if(sifre === "" || sifreTekrar == ""){ //Şifrelerin girildiği kısımların eşleşip eşleşmediği kontrol edildi
            alert("Şifreyi Alanı Boş Olamaz");
        }
        else if (sifre !== sifreTekrar) {
            alert("Şifreler Eşleşmiyor.");
        }
        else if (kullanıcıAdı === "") {
            alert("Kullanıcı Adı Alanı Boş Olamaz");
        }
        else if (mail === "") {
            alert("E-Mail Alanı Boş Olamaz");
        }
        else{
            alert("Siteye Kayıt Oldunuz.\nArtık Giriş Yapabilirsiniz.")
        }
    });

    //Sayfanın içerisinde gezindiğimizde en üst kısma atacak olan sabit butonun işlemleri
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) { //Eğer scroll en üstteyse button gizlenir
            $('#toTop').fadeIn();    
        } else { //Eğer en üstte değilse buton gözükür
            $('#toTop').fadeOut();
        }
    });

    //En üste giden butona tıklandığında
    $('#toTop').click(function() {
        $('body, html').animate({scrollTop:0},400); //sayfa içinde 400 ms lik bir transition ile üste geçiş işlemi yapılır
        return false;
    });   

});