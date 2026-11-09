# JAVASCRIPT DOM    
## DOM Nedir?
- Document Object Model --> Bir diğer ifade ile Belge Nesne Modeli
- DOM; Javascript'in HTML ve CSS ile etkileşim kurmasını sağlayan temel yapılardan birisidir.
- Tarayıcı, yüklenen HTML belgesini bir nesne ağacı (Tree) şeklinde temsil eder. Bu yapıya DOM denir.
- Javascript, DOM sayesinde HTML içerisindeki elementlere ulaşabilir, bunları değiştirebilir, silebilir veya yeni elementler oluşturabilir.
- DOM yapısında kullanılan kavramlar:
    
    - **document**  :  HTML belgesini temsil eder.
    - **element** : HTML etiketlerini temsil eder.
    - **node** : DOM ağacındaki tüm düğümlerin genel adıdır.
    - **textNode**: Elementlerin içerisindeki metinleri temsil eder.
    - **attribute** : HTML elementlerine ait niteliklerdir. Örneğin id, class, src, href.

---
## Javascript ile HTML Elementlerine Ulaşma
- **getElementById()**
    - Etikete verilmiş olan "id" ile ulaşılır.  

            <h1 id="baslik">Merhaba Dünya</h1>
            const baslik = document.getElementById("baslik");
            console.log(baslik);

- **getElementsByClassName()**
    - Etiketlere / etikete verilmiş olan "class" değerine ile ulaşılabilir.
    - Geriye bir **HTMLCollection** (**bir tür object**; daha spesifik olmak gerekirse dizi benzeri özel bir nesne) dönderir.
    - Elementlere indeks numarasıyla ulaşabiliriz.
    
            <p class="metin">Birinci paragraf</p>
            <p class="metin">İkinci paragraf</p>
            <p class="metin">Üçüncü paragraf</p>

            const metinler = document.getElementsByClassName("metin");

            console.log(metinler);
            console.log(metinler[0]);
            console.log(metinler[1]);


- **getElementsByTagName()**
    - HTML etiketinin adına göre seçim yapar.
    - Sayfadaki bulunan aradığınız bütün elementleri seçer.
    - Tüm p etiketleri, tüm img etiketleri gibi
    - Geriye bir HTMLCollection dönderir.
    - 
            const paragraflar = document.getElementsByTagName("p");
            console.log(paragraflar);



- **querySelector()**
    - CSS seçicilerini kullanarak HTML elementi seçmemizi sağlar.
    - Bu metot ile **id**, **class** ve **etiket** seçicilerini kullanabiliriz.
    - querySelector() eşleşen ilk elementi döndürür.

            document.querySelector("#baslik");
            document.querySelector(".metin");
            document.querySelector("p");

- **querySelectorAll()**
    - Belirtilen CSS seçicisiyle eşleşen **bütün elementleri** seçer.
    - Geriye bir NodeList dönderir.
    - NodeList varsayılan olarak .forEach() metodunu destekler.

            const paragraflar = document.querySelectorAll(".metin");

            paragraflar.forEach( p=> {
                p.style.color = "red";
            });
---

## HTML İçeriğini Değiştirme
- **innerText**
  - Elementin kullanıcıya görünen metnini değiştirmek için kullanılır.

            <h1 id="baslik">Eski Başlık</h1>
            
            const baslik = document.querySelector("#baslik");
            baslik.innerText = "Yeni Başlık";

- **textContent**
  - Elementin metin içeriğini değiştirir veya okur.

            const baslik = document.querySelector("#baslik");

            baslik.textContent = "JavaScript DOM Öğreniyorum";

  - innerText ve textContent arasındaki temel fark, metnin görünürlük ve boşluk davranışlarıdır. textContent, gizli elementlerin metinlerini de okuyabilir.

- **innerHTML**
  - Bir HTML elementinin başlangıç ve bitiş etiketleri arasında kalan tüm HTML yapısını ve metin içeriğini bir string olarak almanızı veya değiştirmenizi sağlayan bir DOM özelliğidir.

            <div id="box">
                <p>Merhaba <strong>Dünya</strong>!</p>
            </div>

            const box = document.getElementById("box");
            console.log(box.innerHTML); 

      - Çıktı olarak

            <p>Merhaba <strong>Dünya</strong>!</p>

  - **innerHTML kullanırken kullanıcıdan alınan kontrol edilmemiş verileri doğrudan HTML olarak eklemek XSS gibi güvenlik açıklarına yol açabilir.**
  
---

## HTML Attribute Değerlerini Değiştirme
- HTML elementlerinin özelliklerini JavaScript ile değiştirebiliriz.
- Örnek olarak bir resme ait src özelliğini değiştirmek için:

            <img id="resim" src="resim1.jpg" alt="örnek bir resim>

            const resim = document.querySelector("#resim");
            resim.src = "resim2.jpg";

- **getAttribute()**
    - Bir attribute değerini okumak için kullanılır.

            const resim = document.querySelector("#resim");
            console.log(resim.getAttribute("src"));

- **setAttribute()**
    - Bir attribute değerini değiştirmek veya oluşturmak için kullanılır.

            resim.setAttribute("src", "resim3.jpg");
            resim.setAttribute("alt", "Ürün görseli");


- **removeAttribute()**
    - Bir attribute değerini siler.

            resim.removeAttribute("alt");
  
--- 

## CSS Özelliklerini Javascript ile Değiştirme
- Javascript kullanarak HTML elementlerinin CSS özelliklerini değiştirebiliriz.

            const metin = document.querySelector("#metin");
            metin.style.color = "red";
            metin.style.backgroundColor = "yellow";
            metin.style.fontSize = "25px";
            metin.style.padding = "20px";

- **classList** Kullanımı

            <!-- HTML -->
            <p id="metin">Merhaba Dünya</p>

            <!-- CSS -->
            .kirmizi {
                color: red;
            }

            .buyuk {
                font-size: 30px;
            }

            .aktif {
                background-color: yellow;
            }

            <!-- JS -->
            const metin = document.querySelector("#metin");

            metin.classList.add("kirmizi");
            metin.classList.add("buyuk");
- add()	=> Class ekler.
- remove() =>	Class siler.
- toggle() =>	Varsa siler, yoksa ekler.
- contains() =>	Class var mı kontrol eder.
- replace() =>	Bir class'ı diğeriyle değiştirir.

---

## DOM ile Yeni HTML Elementi Oluşturma

- Javascript ile sayfada bulunmayan yeni HTML elementleri oluşturabiliriz.
- Bunun için **createElement()** metodu kullanılır.

            const yeniParagraf = document.createElement("p");

            yeniParagraf.textContent = "Bu paragraf JavaScript ile oluşturuldu.";

            document.body.appendChild(yeniParagraf);
--- 
## HTML Elementlerini Silme ve Yerini Değiştirme
- remove()
- removeChild()
- append()
- appendChild()

---
## DOM Events (Olaylar)
- **addEventListener()**
        
        const buton = document.querySelector("#btn");

        buton.addEventListener("click", function () {

            alert("Butona tıklandı!");

        });

- click  =>	Element tıklandığında
- dblclick =>	Çift tıklandığında
- mouseover	=> Fare elementin üzerine geldiğinde
- mouseout	=> Fare elementten ayrıldığında
- mousemove	=> Fare hareket ettiğinde
- keydown	=> Klavyede tuşa basıldığında
- keyup	=> Klavyedeki tuş bırakıldığında
- input	=> Input değeri değiştiğinde
- change	=> Değer değişikliği tamamlandığında
- submit	=> Form gönderildiğinde
- focus	=> Element odaklandığında

        const kutu = document.querySelector("#kutu");
        
        kutu.addEventListener("mouseover", function () {
                kutu.style.backgroundColor = "red";
        });

        kutu.addEventListener("mouseout", function () {
            kutu.style.backgroundColor = "white";
        });