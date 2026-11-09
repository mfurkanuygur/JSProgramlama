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
// Her kitabın istediğiniz özelliklerini ekrana yazdırınız.
console.log("*****************KÜTÜPHANE SİSTEMİ*****************");
const listAllBooks = (books) => {
    for (let i = 0; i < books.length; i++) {
        console.log("_______________________");
        console.log("Kitap Adı: ", books[i].kitapAdi);
        console.log("Kitap Yazarı: ", books[i].kitapYazari);
        console.log("Kitap Yayın Yılı: ", books[i].kitapYayinYili);
        console.log("Kitap Kategorisi: ", books[i].kitapKategori);
    }
};
listAllBooks(books);
// 2. Bir Kitabı Yazdırma  (kitap ID'sine göre )
// Fonksiyon adı ==> findBooksByID(books,id)
// Verilen ID'ye göre ilgili kitabın istediğiniz özelliklerini ekrana yazdırınız.
const findBooksByID = (books, id) => {
    console.log("__________KİTAP ARAMA__________");
    const book = books.find((b) => b.id == id);
    if (book.length == 0) {
        console.log("Aradığını kitap kütüphanede bulunamamıştır.");
    } else {
        console.log("Aradığınız kitap: ", book.kitapAdi);
        console.log("Stok: ", book.kitapStokAdedi);
        console.log(
            "Ödünç durumu: ",
            book.kitapOduncDurumu ? "Kitap alınabilir" : "Uygun kitap yok",
        );
    }
};
findBooksByID(books, 1);
// 3. Yeni Kitap Ekleme
// Fonksiyon adı ==> addBook(books,newBook)
// Her kitabın ID'si benzersiz olmalıdır. ==> İlgili id değerini "crypto.randomUUID()" ile oluşturabilirsiniz.
// Kitap özellikleri boş bırakılamamalıdır.
// Yayın yılı ve stok miktarı negatif olamaz. Pozitif tam sayı olmalıdır.
// Kitap başarıyla eklendikten sonra işlemin başarılı veya başarısız olduğuna dair uygun bir mesaj gösterilmelidir.
const addBook = (books, newBook) => {
    console.log("__________KİTAP EKLEME__________");
    if (
        !newBook.id ||
        !newBook.kitapAdi?.trim() ||
        !newBook.kitapKategori?.trim() ||
        newBook.kitapOduncDurumu == null ||
        newBook.kitapStokAdedi == null ||
        newBook.kitapYayinYili == null ||
        !newBook.kitapYazari.trim()
    ) {
        console.log("HATA!!! Kitap bilgilerinde eksiklik var!!! ")
    }
    else {
        console.log("Kitap sisteme başarıyla eklenmiştir.")
    }
};

const newBook = {
    id: crypto.randomUUID(),
    kitapAdi: "Tutunamayanlar",
    kitapKategori: "Roman",
    kitapOduncDurumu: true,
    kitapStokAdedi: 3,
    kitapYazari: "Oğuz Atay",
    kitapYayinYili: 1971,
};
addBook(books, newBook)
// 4. Kitap Güncelleme
// Fonksiyon adı ==> updateBook(books, id, updatedData)
// ID üzerinden ilgili kitabı bulun.
// Kitap bulunamazsa işlem yapılmamalı ve bir uyarı verilmelidir.
// Kitabın istenen özelliklerini güncelleyin.
// Kullanıcının değiştirmediği özellikler aynı kalmalıdır.
const updateBook = (books, id, updatedData) => {
    const book = books.find(b => b.id == id)
    console.log("Güncelleme Öncesi: ", book)
    for (let key in updatedData) {
        book[key] = updatedData[key]
    }
    console.log("Güncelleme Sonrası: ", book)

}
updateBook(books, 1, { "kitapAdi": "Tehlikeli Oyunlar", "kitapStokAdedi": 4 })


// 5. Kitap Silme
// Fonksiyon adı ==> deleteBook(books, id)
// Verilen ID'ye sahip kitabı bulun.
// Kitap varsa diziden silin.
// Kitap bulunamazsa uygun bir mesaj gösterin.
// Silme işleminden sonra güncel kitap listesini kontrol edin.
const deleteBook = (books, id) => {
    console.log(books)
    const remainBooks = books.filter(b => b.id !== id)
    console.log(remainBooks)
}
deleteBook(books,3)

// 6. Kitap Arama
// Fonksiyon adı: searchBooks(books, keyword)
// Kitap adında veya yazar adında arama yapın.
// Büyük-küçük harf farkını dikkate almayın. (Hepsini büyük veya küçük harfe döndererek yapabilirsiniz)
// Birden fazla eşleşme varsa hepsini döndürün.
// Eşleşme yoksa uygun bir mesaj gösterin.
