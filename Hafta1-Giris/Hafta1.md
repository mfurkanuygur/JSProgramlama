# Hafta 1: JavaScript'e Giriş

### Algoritma Nedir?
- Bir problemi çözmek veya belirli bir amaca ulaşmak için tasarlanan belli talimatlar dizisidir.
- Saf mantıktır. 
- İnsan dilinde yazılır.


- <span style="text-decoration-line:underline">Örnek</span>: Kek tarifi, Çay Demleme tarifi ...
    
    1. Başla
    2. Çaydanlığa su doldur ve ocağa koy
    3. Su kaynayınca demliğe çay ekle
    4. Demliğe kaynar suyu dök
    5. 10 dakika demlenmesini bekle
    6. Bardağa doldur ve servis et
    7. Bitir  

### Programlama Nedir?

* Kurulan algoritmanın bilgisayarın anlayabileceği, işleyebileceği özel bir dile çevirme işlemidir. 
* Zihindeki adımların koda dökülmüş ve bilgisayara öğretilmiş halidir.


### Yazılım Nedir?

* Birbiriyle iletişim hâlinde çalışan programlar, algoritmalar ve veriler bütünüdür. 
* Donanıma ne yapması gerektiğini söyleyen, elle tutulmayan soyut katmandır. 
- Son kullanıcıya sunulan paket hâlidir.


--- 
## JavaScript Tarihi
- 1995 yılında Brendan Eich tarafından geliştirilmiştir. 
- Netscape Communication Corporation (günümüz adıyla Mozilla) ilk zamanlarda "Mocha" ismini vermiştir. Daha sonra "Livescript", en son ise  "JavaScript" adını almıştır. 
- Amaç statik sayfaları dinamik hâle getirmektir.
- Daha sonra tutarlılık sağlamak amacıyla bir standartlaştırma gerekmiş ve 1996 yılında ECMA (European Computer Manufacturers Association) bu standartları belirlemiştir.
- Bu standartlaştırma ihtiyacı farklı tarayıcıların JavaScript'i farklı şekillerde uygulamasından kaynaklanmıştır.
    
    - Netscape --> JavaScript
    - Microsoft --> JScript 

## JavaScript Kullanım Alanları
* JavaScript yardımıyla masaüstü, mobil, web, server  gibi daha birçok alanda uygulamalar yapılabilir.
    
    - Masaüstü: Electron.js
    - Mobil: React Native
    - Web (Frontend):  React, Vue, Angular, Svelte, Preact vb.... 
    - Server (Backend): Node.js
    - Yapay zeka: TensorFlow.js


## JavaScript Çalışma Ortamı
- JavaScript kodlarının çalışması için JavaScript Engine adı verilen bir motor kullanılır. 
- Her tarayıcı farklı motorlara sahip olabilir.

    - Google Chrome: V8
    - Opera: V8
    - Microsoft Edge: V8
    - Mozilla Firefox: SpiderMonkey
    - Safari: JavaScriptCore

- JavaScript Engine dışında bir de Rendering Engine bulunmaktadır. 
- Bu motor yardımıyla tarayıcı, sadece JavaScript kodlarını değil HTML, CSS kodlarını da işler ve kullanıcıya görsel olarak bir çıktı verebilir.

- Aynı şekilde tarayıcılara göre Rendering motorları  değişebilir.

    - Google Chrome: Blink
    - Opera: Blink
    - Microsoft Edge: Blink
    - Mozilla Firefox: Gecko
    - Safari: Webkit



## Değişkenler ve Veri Tipleri