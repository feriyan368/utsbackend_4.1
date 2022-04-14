const req = require("express/lib/request");

let Kue = [
  {
    kode: "M-ci",
    nama: "KueTart",
    harga: "Rp 50.000",
    expired: "2 minggu",
    create: new Date(),
  },
  {
    kode: "M-bi",
    nama: "Brownis",
    harga: "Rp 40.000",
    expired: "1 bulan",
    create: new Date(),
  },
  {
    kode: "M-li",
    nama: "Kuelebaran",
    harga: "Rp 60.000",
    expired: "2 bulan",
    create: new Date(),
  },
  {
    kode: "M-zi",
    nama: "Rengginang",
    harga: "Rp 25.000",
    expired: "Tak terbatas",
    create: new Date(),
  },
];

const cari = (arrData, kode) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length - 1) {
    if (arrData[indeks].kode == kode) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getKue: Kue,

  insert: (req) => {
    const newItem = {
      kode: req.body.kode,
      nama: req.body.nama,
      harga: req.body.harga,
      expired: req.body.expired,
    };
    Kue.push(newItem);
    return newItem;
  },
  getKueByKode: (req) => {
    kode = req.params.kode;
    indeks = cari(Kue, kode);
    if (indeks != -1) {
      const dataKue = {
        kode: Kue[indeks].kode,
        nama: Kue[indeks].nama,
        harga: Kue[indeks].harga,
        expired: kue[indeks].expired,
      };
      return dataKue;
    }
    return indeks;
  },
  update: (req) => {
    kode = req.params.kode;
    indeks = cari(Kue, kode);
    if (indeks != -1) {
      Kue[indeks].kode = kode;
      Kue[indeks].nama = req.body.nama;
      Kue[indeks].harga = req.body.harga;
      Kue[indeks].expired = req.body.expired;

      return Kue[indeks];
    }
    return -1;
  },
  delete: (req) => {
    kode = req.params.kode;
    indeks = cari(Kue, kode);
    ket = "Data kue tidak ditemukan";
    if (indeks != -1) {
      Kue.splice(indeks, 1);
      ket = "Data kue dengan kode" + kode + "Berhasil dihapus";
    }
    return ket;
  },
};
