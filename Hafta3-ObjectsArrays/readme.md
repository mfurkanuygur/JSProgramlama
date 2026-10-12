## Objects - Nesneler

- Object (nesne), birbiriyle ilişkili verileri **anahtar (key) – değer (value)** şeklinde bir arada tutmamızı sağlayan veri yapısıdır.
- Örneğin bir öğrencinin adını, yaşını, bölümünü ve sınıfını ayrı değişkenlerde tutmak yerine tek bir nesne içinde saklayabiliriz.
            
        let ogrenciAdi = "Ahmet";
        let ogrenciYasi = 20;
        let ogrenciBolumu = "Bilgisayar Programcılığı";

- Bu şekilde bilgilerimiz farklı değişkenlerde tutulur. Bunun yerine bir nesne oluşturabiliriz:

        const ogrenci = {
            ad: "Ahmet",
            yas: 20,
            bolum: "Bilgisayar Mühendisliği"
        };

- **ogrenci:** Nesnenin adı.
- **ad, yas, bolum:** Nesnenin özellikleri (property).
- **"Ahmet", 20, "Bilgisayar Mühendisliği":** Özelliklerin değerleri (value).
- **{ }:** Nesneyi tanımlamak için kullanılan süslü parantezler.
---

### Object'in içindeki verilere erişme

A) Nokta (dot) notasyonu

        const ogrenci = {
            ad: "Ahmet",
            yas: 20,
            bolum: "Bilgisayar Mühendisliği"
        };

        console.log(ogrenci.ad);
        console.log(ogrenci.yas);
        console.log(ogrenci.bolum);


B) Köşeli parantez notasyonu

        console.log(ogrenci["ad"]);
        console.log(ogrenci["yas"]);

---
### Object içerisindeki değerleri değiştirme

        const araba = {
            marka: "Toyota",
            model: "Corolla",
            yil: 2020
        };

        araba.marka = "Honda";
        araba.yil = 2024;

        console.log(araba);


#### NOT: Nesneyi const ile tanımlamamıza rağmen özelliklerini değiştirebiliyoruz. 
#### Çünkü const, nesnenin kendisini başka bir nesneyle yeniden atamamızı engeller; nesnenin içindeki özelliklerin değiştirilmesini engellemez.

---
### Object içerisine yeni özellik ekleme
        const telefon = {
            marka: "Samsung",
            model: "Galaxy S25"
        };

        telefon.fiyat = 45000;
        telefon.renk = "Siyah";

        console.log(telefon);
---
### Object içerisinden özellik silme
- Bir özelliği silmek için **delete** kullanılır.
  
        const kullanici = {
            ad: "Zeynep",
            yas: 22,
            sehir: "Bursa"
        };

        delete kullanici.sehir;

        console.log(kullanici);
---
### Object içerisinde farklı veri türleri kullanma

- Bir nesne yalnızca metin ve sayılardan oluşmak zorunda değildir. Dizi, boolean, başka bir nesne ve fonksiyon da içerebilir.

        const urun = {
            ad: "Laptop",
            fiyat: 35000,
            stoktaMi: true,
            renkler: ["Siyah", "Gri", "Beyaz"],
            marka: {
                ad: "Lenovo",
                ulke: "Çin"
            }
        };
---
### İç içe nesnelere erişme 
- Bir nesnenin içerisinde başka bir nesne varsa özelliklere zincirleme şekilde ulaşabiliriz.

        console.log(urun.marka.ad);
        console.log(urun.marka.ulke);
        console.log(urun.renkler[0]);
---
### Object içerisinde fonksiyon kullanma
- Bir nesnenin özelliği olarak fonksiyon tanımlayabiliriz. Nesnenin içerisinde bulunan bu fonksiyona genellikle **method (metot)** denir.

        const kullanici = {
            ad: "Mehmet",
            yas: 25,

            kendiniTanit: function () {
                console.log("Merhaba, ben " + this.ad);
            }
        };

        kullanici.kendiniTanit();
#### NOT: Burada **this** anahtar kelimesi, metot çağrıldığında ilgili nesnenin ilgili özelliğini ifade eder.
---
### Object içerisinde döngü kullanma
- Bir nesnedeki bütün özellikleri tek tek yazmadan görüntülemek isteyebiliriz.
- Bunun için **"for...in"** döngüsünü kullanabiliriz.
        
        const ogrenci = {
                ad: "Ayşe",
                yas: 21,
                bolum: "Yazılım"
        };

        for (let key in ogrenci) {
            console.log(key, ogrenci[key]);
        }

---
### Object ile Array arasındaki fark
- **Array (Dizi): **Verileri sıralı şekilde tutar. Elemanlara genellikle indeks ile erişilir. Birden fazla ürünü veya öğrenciyi listelemek için uygundur.
  
- **Object (Nesne):** İlişkili verileri özellik adlarıyla tutar. Bir ürünün, öğrencinin veya herhangi bir nesnenin özelliklerini bir arada tutmak için uygundur.
---


##  Arrays - Diziler
- Array (dizi), birden fazla veriyi tek bir değişken içerisinde saklamamızı sağlayan veri yapısıdır.
    
        const meyve1 = "Elma";
        const meyve2 = "Armut";
        const meyve3 = "Muz";

- Üç meyve için üç ayrı değişken oluşturduk. Peki 100 meyvemiz olsaydı ne yapacaktık?

        const meyveler = ["Elma", "Armut", "Muz"];

        console.log(meyveler);

- **meyveler**: Dizinin adı.
- **[ ]:** Dizi oluşturmak için kullanılan köşeli parantezler.
- **"Elma", "Armut", "Muz":** Dizinin elemanları.
- **Virgüller**: Elemanları birbirinden ayırır.

#### Not: JavaScript dizilerinde indeks sayımı 0'dan başlar.

---
### Dizideki elemanlara erişme

- Dizideki bir elemana ulaşmak için indeks numarasını kullanırız.

        const meyveler = ["Elma", "Armut", "Muz", "Çilek"];

        console.log(meyveler[0]);
        console.log(meyveler[1]);
        console.log(meyveler[2]);
        console.log(meyveler[3]);

--- 
### Dizinin uzunluğunu bulma: length

- Bir dizide kaç eleman olduğunu öğrenmek için **length** özelliğini kullanırız.
  
        const meyveler = ["Elma", "Armut", "Muz"];

        console.log(meyveler.length);

--- 
### Dizideki elemanları değiştirme
- Dizinin belirli bir elemanını değiştirebiliriz.

        const meyveler = ["Elma", "Armut", "Muz"];

        console.log(meyveler[1])

        meyveler[1] = "Kiraz";

        console.log(meyveler[1]);

---
### Diziye yeni eleman ekleme
- JavaScript'te bir dizinin başına veya sonuna eleman eklemek için farklı metotlar bulunur.
  
A) **push()** — sona eleman ekleme

        const sayilar = [10, 20, 30];

        // İster 1 tane ister 100 tane eleman eklenebilir.
        sayilar.push(40);

        console.log(sayilar); --> Çıktı: [10,20,30,40]

B) **unshift()**— başa eleman ekleme

        const sayilar = [20, 30, 40];

        sayilar.unshift(10);

        console.log(sayilar); ---> Çıktı: [10,20,30,40]
---
### Diziden eleman silme

A) **pop()** — sondaki elemanı silme

        const meyveler = ["Elma", "Armut", "Muz"];

        meyveler.pop();

        console.log(meyveler); --> Çıktı: ["Elma", "Armut"]

B) **shift()** — baştaki elemanı silme

        const meyveler = ["Elma", "Armut", "Muz"];

        meyveler.shift();

        console.log(meyveler);  --> Çıktı: ["Armut", "Muz"]

---
### Dizinin belirli bir bölümünü silme veya değiştirme

- **splice()** dizide belirli bir konumdan başlayarak eleman silmemizi, eklememizi veya değiştirmemizi sağlar.
- Orijinal diziyi değiştirir.
- **dizi.splice(baslangicIndeksi, silinecekElemanSayisi)**

        const meyveler = ["Elma", "Armut", "Muz", "Çilek"];

        meyveler.splice(1, 1);

        console.log(meyveler); --> Çıktı: ["Elma", "Muz", "Çilek"]
---
### Dizinin bir bölümünü alma 
- **slice()** mevcut diziyi değiştirmeden, seçilen bölümden yeni bir dizi oluşturur.
- Orijinal diziyi değiştirmez.
- **dizi.slice(baslangic, bitis)**
        
        const sayilar = [10, 20, 30, 40, 50];

        const yeniDizi = sayilar.slice(1, 4);

        console.log(yeniDizi);  ---> Çıktı: [20, 30, 40]
        console.log(sayilar);  ---> Çıktı: [10, 20, 30, 40, 50]

---
### Dizide arama yapma
- Bir elemanın dizide bulunup bulunmadığını kontrol etmek veya konumunu bulmak isteyebiliriz.

A) **includes()** — eleman var mı?
  

- True veya false döner.

        const meyveler = ["Elma", "Armut", "Muz"];

        console.log(meyveler.includes("Armut")); --> true
        console.log(meyveler.includes("Kiraz")); --> false

B) **indexOf()** — elemanın indeksini bulma

- Eleman bulunursa **ilk eşleşmenin** indeksini döndürür.
- Bulunamazsa **-1** döndürür.

        const meyveler = ["Elma", "Armut", "Muz"];

        console.log(meyveler.indexOf("Armut")); --> 1
        console.log(meyveler.indexOf("Kiraz")); --> -1

C) **find()** — koşulu sağlayan ilk elemanı bulma
- find(), koşulu sağlayan **ilk** elemanı döndürür.

        const sayilar = [5, 12, 18, 25, 30];

        const sonuc = sayilar.find(sayi => sayi > 20);

        console.log(sonuc);

--- 

### Dizilerde döngüler
- **for döngüsü**

        const meyveler = ["Elma", "Armut", "Muz"];

        for (let i = 0; i < meyveler.length; i++) {
                console.log(meyveler[i]);
        }
- **for...of döngüsü**
  - Yalnızca elemanların değerleriyle ilgileniliyorsa daha kısa bir yöntem olarak kullanılabilir.

        const meyveler = ["Elma", "Armut", "Muz"];

        for (const meyve of meyveler) {
                console.log(meyve);
        }

- **forEach() metodu**
  
  - Dizinin her elemanı için bir işlem yapmak istediğimizde kullanabiliriz.
  
        sayilar.forEach(sayi => {
                console.log(sayi);
        });

---
### Dizilerde sıralama, ters çevirme
- **sort()** metodu 
- JavaScript, sayıları varsayılan olarak sayısal değerlerine göre değil, **metinsel** **karşılaştırmaya** göre sıralar. 
  
        const meyveler = ["Muz", "Elma", "Çilek", "Armut"];

        meyveler.sort();

        console.log(meyveler);

        Çıktı: ["Armut", "Çilek", "Elma", "Muz"]
- Sayılarda sıralama

        const sayilar = [40, 5, 100, 25, 9];

        sayilar.sort();

        console.log(sayilar);
        
        Çıktı: [100, 25, 40, 5, 9]

    - Bunun böyle olmasının nedeni 2,1'den büyüktür; 4,2'den büyüktür mantığıyla çalışmasıdır.

            const sayilar  = [40, 5, 100, 25, 9];

            sayilar.sort((a, b) => a - b); 

            console.log(sayilar);   ---> Çıktı: [5, 9, 25, 40, 100]


- **reverse()** metodu
- Bir diziyi ters çevirmek için kullanılır.
#### NOT: Hem sort() hem de reverse() metodu orijinal diziyi bozar.

- Orijinal diziyi bozmadan sıralama ve ters çevirme için modern Javascript'te **toSorted()** ve **toReversed()**  kullanılabilir.
---
### map(), reduce(), filter() metotları

- Orijinal diziyi değiştirmezler. İlgili şartı/işlemi sağladıktan sonra yeni bir dizi olarak ilgili sonucu verirler. 

    - ** map()** — Her elemanı dönüştürme
        - Her eleman için bir işlem yaparak yeni bir dizi oluşturur.

                const sayilar = [1, 2, 3];

                const kareler = sayilar.map(sayi => sayi * sayi);

                console.log(kareler); ---> Çıktı [1, 4, 9]

    - **filter()** — Koşula uyanları seçme
        - Koşulu sağlayan tüm elemanları yeni bir diziye alır.

                const sayilar = [5, 10, 15, 20];

                const sonuc = sayilar.filter(sayi => sayi > 10);

                console.log(sonuc); ---> Çıktı  [15, 20]

    - **reduce()** — Tek bir sonuç üretme
        - Dizideki değerleri biriktirerek tek bir sonuç üretir. 


                const sayilar = [10, 20, 30];

                const toplam = sayilar.reduce(
                        (toplam, sayi) => toplam + sayi,
                        0
                );

                console.log(toplam); ---> Çıktı: 60

