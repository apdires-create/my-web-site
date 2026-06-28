// Tüm tab butonlarını seç
const tablar = document.querySelectorAll('.tab');

// Her butona tıklama olayı ekle
tablar.forEach(function(tab) {

  tab.addEventListener('click', function() {
    // 1) Tüm tab butonlarından "aktif" classını kaldır
    tablar.forEach(function(t) {
      t.classList.remove('aktif');
    });

    // 2) Tıklanan butona "aktif" classını ekle
    tab.classList.add('aktif');

    // 3) Tüm proje gruplarından "aktif" classını kaldır
    const gruplar = document.querySelectorAll('.proje-grup');
    gruplar.forEach(function(grup) {
      grup.classList.remove('aktif');
    });

    // 4) İlgili grubu göster (data-kategori ile id eşleşiyor)
    const hedef = tab.getAttribute('data-kategori');
    document.getElementById(hedef).classList.add('aktif');
  });

});