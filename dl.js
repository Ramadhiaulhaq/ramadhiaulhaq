var waktu = new Date();
var jam = waktu.getHours();
var mnt = waktu.getMinutes();
var dtk = waktu.getSeconds();
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

document.write(
  "" + hari[hr] + ", " + tgl + " " + bulan[bln] + " " + thn + "<br>"
);

if (jam <= 9) {
  document.write("selamat morn ");
} else if (jam <= 14) {
  document.write("Good morn");
} else if (jam <= 17) {
  document.write("Jangan lupa push rank");
} else {
  document.write("Good Night");
}
