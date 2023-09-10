---
title: Carisurau Architecture - Bahagian 1
description: Bagaimana saya deploy dan host carisurau dengan minimal cost setiap bulan?
tags:
  - architecture
author: Farhan Helmy
authorTwitter: farhanhelmycode
date: "2023-08-26T12:23:31.210Z"
authorImage: https://avatars.githubusercontent.com/u/59960562?v=4
image: https://engineering.carisurau.com/images/carisuraupart1.png
category: architecture
---

 # Bagaimana saya deploy dan host carisurau dengan minimal cost setiap bulan?

---

## Pengenalan

Sedikit pengenalan tentang projek carisurau.com. Projek ini adalah projek non-profit, sumber terbuka dan inisiatif dari saya sendiri untuk belajar tentang NextJS dan sampaikan ilmu kepada orang lain.

### Keputusan architecture dibuat

Kebiasaannya sebelum saya buat sesebuah projek saya akan overthink kehadapan dan pengakhirannya projek itu sama ada separuh jalan atau tidak dibuat langsung (share article ini kalau anda pernah mengalami benda yang sama). Akan tetapi, untuk carisurau ini keadaannya berbeza. Ini karena saya dengan yakin terus memilih NextJS sebagai framework untuk membina carisurau.

```js
if (prayerTime) {
  cariSurau()
}
```

Jadi mengapa NextJS? Ia adalah kerana pada beberapa bulan sebelum itu saya ada buat satu projek menggunakan [T3stack](https://create.t3.gg/) dan amat berpuas hati terhadap performance dan developer experience scaffolding tool tersebut. Setelah melangkah ke dunia Typescript ketika bekerja di ServiceRocket, Type-safety adalah pilihan utama saya di application / code level. Nanti saya cerita kenapa type-safety penting dan cara untuk implement check di CI/CD pipeline.

### Kenapa tak pakai Vercel?

Saya mendapat soalan ni dengan agak banyak jadi disini saya ingin terangkan kenapa saya tak pakai Vercel. Pertama sekali disebabkan influnce dari manusia sekeliling. Pada satu hari sambil scroll twitter saya ada nampak seorang developer dari malaysia bernama Afrie [tweet](https://twitter.com/afrieirham_/status/1669616820024918022) tentang bandwith dan web analytics usage dari Vercel yang telah mencapai tahap free tier limit.

Perkara ini agak merisaukan saya, walaupun saya tahu carisurau tidak sepopular website beliau. Akan tetapi ia tetap menimbulkan kerisauan. Jadi untuk merancang kehadapan saya cari option lain selain dari Vercel untuk deploy carisurau.com.

### Containarize carisurau.com

Benda pertama yang saya buat adalah containarize carisurau.com. Kerana saya lihat pada zaman sekarang, ramai developer telah menggunakan Kubernetes, Docker Swarm mahupun sekadar Docker untuk melancarkan website mereka. Bagi saya, perkara ini masih tidak popular di Malaysia kerana masih ramai menggunakan Laravel dimana agak susah untuk custom containarizekan aplikasi yang menggunakan framework Laravel. Nak kena fikir tentang Nginx, PHP-fpm, PHP_SESSION dan bermacam lagi.

Setakat ini saya tak pernah jumpa lagi cara sebenar / best practice untuk deploy Containarized Laravel application ke production environment. Berbalik kepada containarize carisurau, saya plan untuk menjadikan carisurau modular dan boleh di deploy dimana mana sahaja, sebab itu keputusan untuk pack carisurau dibuat.

---

## Akan bersambung...