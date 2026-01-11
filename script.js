const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function nextCard() {
    // 1. Hapus class 'active' dari kartu yang sedang tampil
    cards[currentIndex].classList.remove('active');
    
    // 2. Tentukan index kartu berikutnya (looping kembali ke 0 jika sudah di akhir)
    currentIndex = (currentIndex + 1) % cards.length;
    
    // 3. Tambahkan class 'active' ke kartu yang baru
    cards[currentIndex].classList.add('active');
}

// Event click ditangani langsung oleh tombol di HTML (onclick="nextCard()")