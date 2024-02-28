alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 3 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);

function tebakAngkaGame() {
  var skorPlayer1 = 0;
  var skorPlayer2 = 0;

  for (var ronde = 1; ronde <= 3; ronde++) {
    alert("Ronde " + ronde);

    var angkaAcak = Math.floor(Math.random() * 3) + 1; // Menghasilkan angka acak 1-3

    var tebakanPlayer1 = parseInt(prompt("Player1, tebak angka (1-3):"));
    while (isNaN(tebakanPlayer1) || tebakanPlayer1 < 1 || tebakanPlayer1 > 3) {
      alert("Player1, angka tidak boleh kosong.");
      tebakanPlayer1 = parseInt(prompt("Player1, menebak angka :"));
    }

    var tebakanPlayer2 = parseInt(prompt("Player2,  tebak angka (1-3):"));
    while (isNaN(tebakanPlayer2) || tebakanPlayer2 < 1 || tebakanPlayer2 > 3) {
      alert("Player2: angka tidak boleh kosong.");
      tebakanPlayer2 = parseInt(prompt("Player2, tebak angka :"));
    }

    if (tebakanPlayer1 === angkaAcak) {
      alert("Player1 benar angka yang dicari adalah : " + angkaAcak);
      skorPlayer1++;
    } else {
      alert("Player1 salah, Angka yang benar adalah : " + angkaAcak);
    }

    if (tebakanPlayer2 === angkaAcak) {
      alert("Player2 benar angka yang dicari adalah : " + angkaAcak);
      skorPlayer2++;
    } else {
      alert("Player2 salah, Angka yang benar adalah : " + angkaAcak);
    }
  }

  // Menampilkan skor akhir
  alert("Skor Akhir:\nPlayer 1: " + skorPlayer1 + "\nPlayer 2: " + skorPlayer2);

  // Menentukan pemenang
  if (skorPlayer1 > skorPlayer2) {
    alert("Player1 menang!");
  } else if (skorPlayer2 > skorPlayer1) {
    alert("Player2 menang!");
  } else {
    alert("Hasil seri!");
  }
}

// Memanggil fungsi untuk memulai permainan
tebakAngkaGame();
