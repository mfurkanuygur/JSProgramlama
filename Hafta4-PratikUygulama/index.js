// Kütüphane Yönetim Sistemi
// Senaryo gereği yönetici kütüphane sisteminde verilen işlemleri yapabilmelidir.
// Her kitabın bazı özellikleri vardır:
// - kitapID veya id'de yazılabilir.
// - kitapAdi
// - kitapYazari
// - kitapKategori
// - kitapYayinYili
// - kitapOduncDurumu
// - kitapStokAdedi

// Örnek bir kitap objesi şu şekilde olur:
const books = [
    {
        id: 1,
        kitapAdi: "Kürk Mantolu Madonna",
        kitapYazari: "Sabahattin Ali",
        kitapKategori: "Roman",
        kitapYayinYili: 1943,
        kitapStokAdedi: 3,
        kitapOduncDurumu: true,
    },
    {
        id: 2,
        kitapAdi: "Sefiller",
        kitapYazari: "Victor Hugo",
        kitapKategori: "Klasik",
        kitapYayinYili: 1862,
        kitapStokAdedi: 0,
        kitapOduncDurumu: false,
    },
    {
        id: 3,
        kitapAdi: "1984",
        kitapYazari: "George Orwell",
        kitapKategori: "Bilim Kurgu",
        kitapYayinYili: 1949,
        kitapStokAdedi: 5,
        kitapOduncDurumu: true,
    },
    {
        id: 4,
        kitapAdi: "Simyacı",
        kitapYazari: "Paulo Coelho",
        kitapKategori: "Roman",
        kitapYayinYili: 1988,
        kitapStokAdedi: 2,
        kitapOduncDurumu: true,
    },
    {
        id: 5,
        kitapAdi: "Suç ve Ceza",
        kitapYazari: "Fyodor Dostoyevski",
        kitapKategori: "Klasik",
        kitapYayinYili: 1866,
        kitapStokAdedi: 0,
        kitapOduncDurumu: false,
    },
];


// Aşağıdaki işlemleri yapmanız istenmektedir:
// 1. Kitap Listeleme
    // Fonksiyon adı ==> listAllBooks(books)
    // Dizideki bütün kitapları bir döngü yardımıyla listeleyiniz.
    // Her kitabın özelliklerini ekrana yazdırınız.

// 2. Bir Kitabı Yazdırma  (kitap ID'sine göre )
    // Fonksiyon adı ==> findBooksByID(books,id)
    // Verilen ID'ye göre ilgili kitabın tüm özelliklerini ekrana yazdırınız.

// 3. Yeni Kitap Ekleme
    // Fonksiyon adı ==> addBook(books,newBook)
    // Her kitabın ID'si benzersiz olmalıdır. ==> İlgili id değerini "crypto.randomUUID()" ile oluşturabilirsiniz.
    // Kitap özellikleri boş bırakılamamalıdır.
    // Yayın yılı ve stok miktarı negatif olamaz. Pozitif tam sayı olmalıdır.
    // Kitap başarıyla eklendikten sonra işlemin başarılı veya başarısız olduğuna dair uygun bir mesaj gösterilmelidir.

// 4. Kitap Güncelleme
    // Fonksiyon adı ==> updateBook(books, id, updatedData)
    // ID üzerinden ilgili kitabı bulun.
    // Kitap bulunamazsa işlem yapılmamalı ve bir uyarı verilmelidir.
    // Kitabın istenen özelliklerini güncelleyin.
    // Kullanıcının değiştirmediği özellikler aynı kalmalıdır.

// 5. Kitap Silme
    // Fonksiyon adı ==> deleteBook(books, id)
    // Verilen ID'ye sahip kitabı bulun.
    // Kitap varsa diziden silin.
    // Kitap bulunamazsa uygun bir mesaj gösterin.
    // Silme işleminden sonra güncel kitap listesini kontrol edin.  


// 6. Kitap Arama
    // Fonksiyon adı: searchBooks(books, keyword)
    // Kitap adında veya yazar adında arama yapın.
    // Büyük-küçük harf farkını dikkate almayın. (Hepsini büyük veya küçük harfe döndererek yapabilirsiniz)
    // Birden fazla eşleşme varsa hepsini döndürün.
    // Eşleşme yoksa uygun bir mesaj gösterin.
