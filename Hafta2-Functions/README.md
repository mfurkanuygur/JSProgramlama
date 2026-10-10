## Functions 


- Belirli bir görevi yerine getirmek için yazılan, ihtiyaç duyulduğunda çağrılarak çalıştırılabilen kod bloğudur. 
- Kod tekrarını azaltır ve programın daha düzenli, yönetilebilir olmasını sağlar.
- İhtiyaç hâlinde tekrar ve takrar çağırılabilir.

- Tanımlamak için "function" anahtar kelimesi kullanılır.
  
        function fonksiyonAdı(){
            ...
        }

- Bir fonksiyonu tanımlandıktan sonra çağırılmaz ise çalışmaz. Çalıştırmak için fonksiyon adı yazılır ve sonuna parantez eklenir.

        function fonksiyonAdı(){
            ...
        }

        fonksiyonAdı()

--- 
#### Fonksiyon Parametreleri/ Argümanlar

- Parametreler, bir fonksiyonun dışarıdan alacağı değerleri tanımlamak için kullanılan değişkenlerdir. 
- Fonksiyon tanımlanırken parantez içinde belirtilirler.

        function topla(p1, p2, p3){
            return p1 + p2 + p3
        }
- Yukarıdaki fonksiyonda p1,p2,p3 parametrelerdir.

        toplama(1,2,3)
- Yukarıda çağırılan fonksiyona gönderilen 1,2,3 değerleri ise argüman olarak isimlendirilir.
---

#### Arrow Functions

- JavaScript'te fonksiyonları daha kısa bir sözdizimiyle tanımlamamızı sağlayan fonksiyon yazım biçimidir. 
- function anahtar kelimesi yerine => (ok) işareti kullanılır.

        const toplama = (p1, p2, p3)=>{
            return p1 + p2 +p3
        }

---
#### Örnek:
        
    const students = [
        { name: "Ali", grades: [70, 80, 65] },
        { name: "Ayşe", grades: [90, 85, 95] },
        { name: "Mehmet", grades: [45, 60, 50] },
        { name: "Zeynep", grades: [30, 40, 35] },
        { name: "Can", grades: [75, 70, 80] }
    ];

- Yukarıda verilen "students" isimli dizide verilen işlemleri yapmanız istenmektedir.

        1. Ekrana her bir  öğrencinin adını, sınav notlarını, sınav ortalamalarını yazdırınız.
        2. Her bir öğrencinin ortalamasına göre geçip geçmediğine göre kontrol yapınız.
        3. Sınıf ortalamasını hesaplayan bir fonksiyon yazınız. 
        4. Sınıfın en başarılı ve en başarısız öğrencisinin adını ve notunu yazdırınız.
        5. Toplam sınav sayısı, notlar toplamını yazdırınız.
        6. Tüm işlemleri mümkün olduğunca fonksiyonlara bölerek yapınız. Tek bir fonksiyon içinde herşeyi yapmaya çalışmayınız. 
   
   ---
   Örneğin çözümü "ornekCozum.js" dosyası içindedir. Çözümün farklı yolları olabilir. 
    