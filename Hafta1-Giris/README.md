# Hafta 1: JavaScript'e Giriş

### Algoritma Nedir?
- Bir problemi çözmek veya belirli bir amaca ulaşmak için tasarlanan belli talimatlar dizisidir.
- Saf mantıktır. 
- İnsan dilinde yazılır.


- Örnek: Kek tarifi, Çay Demleme tarifi ...
    
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

- Değişken nedir?
     
     - Değişken, program çalışırken bir değeri saklamak ve bu değere daha sonra isim üzerinden erişmek için kullanılan yapıdır.

      > let number= "58"
      > let fruit= "apple"
      > let color= "red"
      > const PI=3.14 gibi..
     
- Bir değişken oluşturmak için **3 temel anahtar kelime** vardır:

       > var
       > let
       > const

- **let**: Değeri daha sonra değişecek değişkenler için kullanılır.
- **const** : Tek bir "sabit" değer alır. Bir kere oluşturulduktan sonra değiştirelemez. 
---
#### Değişken İsimlendirme Kuralları

- Sayı ile başlayamaz.
  
       > 2name, 3color, 4user, 123product gibi
  
- Normal tire kullanılmaz. 
- 
       > user-name, back-ground, product-detail
- Boşluk bırakılmaz. 
- 
       > sur name, home work 

- Bunun dışında olabilecek isimlendirmeler şu şekildedir:   
  
       > name, userName, age2, _name, $name, user_name, UserName
---
##### Değişken Tipleri

    - String
    - number
    - bigInt
    - boolean
    - undefined
    - null
    - symbols
    - Objects
    - Functions
    - Array
    - Dates
  
  String:

- Genellikle kelime veya karakter türünde değerleri ifade eder. 

        let color = "Yellow"
        let product = "Computer"

Number: 

- Sayı türünde değerleri ifade eder.

        let numberX = 2
        let numberY = 2.5
        let numberZ = 2.5123123123123
Boolean:

- Sadece 2 değer vardır. Ya true (doğru,1) ya da false (yanlış,0) olabilir.

        let valueTrue = true

        let valueFalse = false

undefined ve null

- Aralarındaki fark incelendiğinde undefined belli bir süreliğine tanımsız bırakıldığını belirtir. Değeri sonradan verilebilir. Ancak null bilinçli bir şekilde verilir.



        let undefinedExample;
        console.log("Değer", undefinedExample); --> Çıktı: undefined 
        
        undefinedExample = "Hello world"
        console.log("Değer:", undefinedExample) --> Çıktı: Hello World
        
        let nullExample = null
        console.log(nullExample) --> null

Arrays(Diziler)

- Birden fazla veriyi tek bir değişken içerisinde sıralı olarak saklamamızı sağlayan veri yapısıdır.

        let meyveler = ["Elma", "Armut", "Muz"];

        let sayilar = [10, 20, 30, 40, 50];

        let karisik = ["Sivas", 25, true];

- Dizide elemanların indeks numaraları 0'dan başlar.   
    
        meyveler[0]==> Elma
        meyveler[1]==> Armut
        
        sayilar[3]==> 40

        karisik[2]==> true
- Dizinin uzunluğunu dinamik olarak bulmak için 

        diziAdi.length 

    kullanılır.

        console.log(meyveler.length) --> Çıktı: 3
        console.log(sayilar.length)  --> Çıktı: 5
        console.log(karisik.length)  --> Çıktı: 3

Object

- Nesne (Object), birbiriyle ilişkili verileri ve bu veriler üzerinde işlem yapan fonksiyonları bir arada tutan bir veri yapısıdır.
- Verileri anahtar-değer (key-value) çiftleri şeklinde saklar. 
- Her anahtar bir özelliği (property), bu özelliğin karşısındaki değer ise o özelliğin bilgisini temsil eder.


        const car = {
            brand: "Aston Martin",
            model: "Vanquish",
            year: 2026,
            color: "Black",
        };
        
    - "car": Nesnenin adıdır.
    - "brand, model, year, color": Nesnenin özellikleridir. (properties)
    - "Aston Martin, Vanquish, 2026, black" : Özelliklerin değerleridir.
- Bir objenin özelliklerine erişmek için 2 farklı yol vardır.
    - Dot Notation(Nokta Gösterimi)

        - console.log(car.brand)  --> Çıktı: Aston Martin
        - console.log(car.model)  --> Çıktı: Vanquish
        - console.log(car.year)   --> Çıktı: 2026
    - Bracket Notation(Köşeli Parantez Gösterimi)
        - console.log(car["brand"])  --> Çıktı: Aston Martin
        - console.log(car["model"])  --> Çıktı: Vanquish
        - console.log(car["year"])   --> Çıktı: 2026
- Bir nesnenin özelliklerini değiştirebilir veya yeni özellikler ekleyebiliriz.
            
            // Mevcut özelliği değiştirme
            car.age = 2021;

            // Yeni özellik ekleme
            car.segment = "super sport";


---
#### Hem Object hem Array birbiri içinde kullanılabilir.

---

## Operatörler

- Aritmetik Operatörler
- Atama operatörleri
- Karşılaştırma operatörleri
- Mantıksal operatörler

### Aritmetik Operatörler
- Toplama +
- Çıkarma -
- Çarpma *
- Bölme /
- Mod %
- Üssel ifade **

### Atama operatörleri
- = 
- +=  --> toplama sonrası sonucu yine aynı değişkene atama yapar. x+=5 5 ile x'i toplar ve sonucu yine x' e atar. 
- -=
- *=
- /=
- %=
- **=

### Karşılaştırma operatörleri
- <, >, <=, >=, ==, !=, ===,!==
---
### Koşullar
- if, if else, Ternary if, switch

        if(koşul){
            ...
        }
    
    ---
        if(koşul){
            ...
        }
        else if(diğer koşul){
            ...
        }
    ---
        // Ternaty if
        let x=5
        let y=1
        
        let result = x > y ? console.log("X büyüktür") : console.log("Y büyüktür")

    ---
- Switch case : 
Bir değişkenin veya ifadenin değerine göre farklı kod bloklarının çalıştırılmasını sağlayan koşul yapısıdır.

        let day = "cmt"
        switch (day) {
            case "pzt":
                console.log("günlerden pzt")
                break;
            case "sali":
                console.log("günlerden sali")
                break;
            case "çar":
                console.log("günlerden çar")
                break;
            case "per":
                console.log("günlerden perşembe")
                break; 
            case "cuma":
                console.log("günlerden cuma")
                break; 
            case "cmt":
                console.log("günlerden cumartesi")
                break;
            default:
                console.log("yanlış gün ")
                break;
        }

---
### Döngüler 
- for, while, do while

        for(başlangıç noktası; şart; artış miktarı){
            ...
        }
        
    ---

        for(let i=0 ; i<5 ; i++){
            console.log(i)
        }
    ---
        Çıktı:
        1
        2
        3
        4
        5

    ---
    -While döngüsünde artış miktarı belirtilmez ise sonsuz döngüye girer. Tarayıcınız çöker.
     
        let number=1
        while (number<5) {
            console.log("Sayı değeri",number)
            number++
        }
