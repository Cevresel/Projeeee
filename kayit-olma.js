window.onload = function() {
    var wasteData = JSON.parse(localStorage.getItem('wasteData')) || [];

    var dataDisplay1 = document.getElementById('veri-gorme-1');  // 1. bölüm için
    var dataDisplay2 = document.getElementById('veri-gorme-2');  // 2. bölüm için

    if (wasteData.length === 0) {
        dataDisplay1.innerHTML = '<p>Henüz veri girişi yapılmadı.</p>';
        dataDisplay2.innerHTML = '<p>Henüz veri girişi yapılmadı.</p>';
    } else {
        wasteData.forEach(function(entry) {
            var div = document.createElement('div');
            div.classList.add('data-entry');
            div.innerHTML = `
                <p><strong>Okul:</strong> ${entry.school}</p>
                <p><strong>Atık Türü:</strong> ${entry.wasteType}</p>
                <p><strong>Atık Miktarı:</strong> ${entry.weight} kg</p>
                <p><strong>Tarih:</strong> ${entry.date}</p>
                <hr>
            `;
            dataDisplay1.appendChild(div);  // Veriyi 1. bölümde göster
            dataDisplay2.appendChild(div);  // Veriyi 2. bölümde göster
        });
    }
};
