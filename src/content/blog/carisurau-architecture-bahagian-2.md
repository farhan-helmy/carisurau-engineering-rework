---
title: Carisurau Architecture - Bahagian 2
description: Keputusan untuk menggunakan Docker atau tidak…
tags:
  - architecture
author: Farhan Helmy
authorTwitter: farhanhelmycode
date: "2023-09-10T12:23:31.210Z"
authorImage: https://avatars.githubusercontent.com/u/59960562?v=4
image: https://engineering.carisurau.com/images/carisuraupart2.png
category: architecture
---


# Keputusan untuk menggunakan Docker atau tidak... 🙂

---

## Sambungan

Bagi saya Docker telah memberi impak kepada dunia pengaturcaraan dengan begitu drastik. Docker adalah sebuah teknologi yang sangat bagus dan bagi saya ia patut dipelajari oleh semua developer di Malaysia untuk setanding dengan seantara dunia di dalam bidang teknologi.

Keputusan Carisurau untuk di deploy / host menggunakan Docker adalah keputusan jangka panjang dan amat rumit bagi saya. Saya selalu dengar orang cakap "oh deploy jela guna Docker, senang tak payah pening kepada". Saya setuju 100% dengan kenyataan itu, akan tetapi saya perlu ada pendirian, thought process dan membuat keputusan sendiri. Ini kerana, yang mengendalikan dan maintain app ini adalah saya dan bukan orang lain.

### Cara saya berfikir dalam konteks membina sebuah aplikasi

Dalam membina sesebuah aplikasi, cara fikir saya akan merangkumi pelbagai aspek. Sebelum bermula, saya akan sekurang-kurangnya menghabiskan masa selama satu hingga ke dua minggu sebelum membuat keputusan tersebut. Untuk Carisurau, perkara utama yang saya ambil kira adalah KOS untuk maintain. Seperti yang anda semua tahu, Carisurau adalah self-funded, non-profit app. Saya tidak membuat atau mengambil apa-apa untung membuat Carisurau ini.

Jadi berbalik kepada men-Dockerkan aplikasi Carisurau, saya perlu fikir dimana saya boleh host aplikasi ini. Ada beberapa tools / platform yang berada di dalam kepala saya, antaranya ialah `AWS ECS`, `self-host server -> install Docker`, `Fly.io` dan `Host dekat rumah`. Platform-platform ini menyediakan tempat untuk saya host Carisurau menggunakan Docker. Dan setelah mengkaji, saya menolak `AWS ECS`, `self-host server -> install Docker` dan `Fly.io` kerana ia melibatkan cost yang agak tinggi bulanan (sebenarnya tak tinggi mana tapi agak menambah komitmen). 

### Keputusan pertama dibuat

Saya ada membeli satu server / PC berharga RM 500, pada mulanya saya ingin menggunakannya sebagai development environment. Tapi bila fikir balik, apa kata jadikan server ini untuk host Carisurau. Lalu saya pun install Docker dan host Carisurau buat seketika waktu di rumah. Bagi saya cara ini adalah cara yang paling cost-effective. Walaubagaimanapun setiap perkara ada kebaikan dan keburukannya yang tersendiri, bagi saya cara ini secure kerana saya menggunakan CloudFlare Tunnel, boleh lihat video cara menggunakan CF tunnel [disini](https://www.youtube.com/watch?v=3tGwaWOAxhM&t=1s).
Dengan cara ini, website saya secure kerana CF tunnel menyediakan SSL by default.

![CloudFlare Tunnel](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/image1-106.png "CloudFlare Tunnel")

Akan tetapi, keburukan host Carisurau dirumah ni adalah dia merisaukan saya. Bagaimana kalau tiba-tiba blackout? Internet TIME down? Maintenance semua?. Lepastu buat kira-kira bil pula agak bertambah sedikit dari sebelum ini. Pada hemat saya cost nya sama sahaja kalau host dekat platform yang ada diluar sana. Bagaimana pula dengan data Carisurau, apa akan berlaku kalau tiba-tiba database corrupt? Saya akan cerita tentang pemilihan database dengan lebih lanjur pada masa akan datang. 

Jadi, pada saya host dekat rumah ni sangat tidak afektif dan menggusarkan jiwa. Saya meneruskan perjalanan saya mencari tools yang terbaik untuk host Carisurau.

### Serverless !!!

Ketika saya masih bekerja di AWS, Serverless technology masih sedang hangat diperkatakan. Ia sangat menarik minat saya untuk mengkaji dengan lebih dalam apa itu Serverless. Bahkan saya ada menyertai satu group specialist untuk Serverless ketika di AWS. Teknologi ini sebenarnya bukan bermaksud tidak ada server di belakang nya. Ia amat tidak logik apabila sesuatu aplikasi itu dapat berjalan tanpa ada runtime atau server. Maksud sebenar teknologi ini adalah ia memudahkan developer untuk meng-deploy aplikasi mereka tanpa menghiraukan kepayahan men-konfigurasi runtime dan server. Dan bagi saya, teknologi ini sekali lagi memberi impak yang tersangatlah besar kepada industri IT.

![AWS Lambda](https://www.thedevcoach.co.uk/wp-content/uploads/2020/10/lambda.png "AWS Lambda")

Bayangkan, dengan teknologi ini saya dapat menyediakan aplikasi saya secara instant dan share kepada semua orang. Inilah yang saya buat untuk Carisurau, kami menggunakan Serverless teknologi. Saya masih ingat pertama kali saya deploy Carisurau, hanya memerlukan hanya 2++ minit untuk membolehkan aplikasi saya dilihat oleh seluruh dunia! Setiap kali ada perubahan dari segi kod atau logik, saya boleh deploy dengan hanya 2 minit lebih dan tidak ada downtime langsung. Pengguna Carisurau dapat teruskan penggunaan aplikasi tanpa ada hiccup. 

Inilah bagi saya kepoweran Serverless. Kalau ada baca buku The DevOps Handbook anda akan dapat lihat bagaimana pada ketika dulu, deployment sesebuah aplikasi hanya berjalan sebulan sekali dan berbeza dengan zaman sekarang deployment dapat buat setiap hari tanpa kerisauan. Begitulah hebatnya teknologi masa kini.

---

## Akan bersambung...

