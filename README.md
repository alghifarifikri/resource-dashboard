<h1 align='center'>Resource Dashboard for DBO</h1><br/>

## Table of Contents

- [Spesifikasi](#spesifikasi)
- [Cara Menjalankan](#cara-menjalankan)
- [Screenshot](#screenshots)

## Spesifikasi

- Node V.16
- JSON-Server
- React V.18.2.0
- Bootstrap
- Axios
- Redux-toolkit
- CoreUI
- Docker

## Cara Menjalankan :

1. Buka Terminal / CMD
2. kemudian ketik `git clone https://github.com/alghifarifikri/resource-dashboard.git`
3. Buka folder yang sudah di clone, kemudian ketik `npm install` atau `yarn install` untuk menginstall dependencies
4. Buka Terminal / CMD baru yang mengarah ke folder yang sudah di clone, atau ketik `cd resource-dashboard`
5. Kemudian ketik `npm install -g json-server` untuk menginsall json-server secara global
6. Jika sudah selesai, coba ketik `node server.js`.
7. Lalu jika server sudah aktif, buka browser dan ketik pada address bar `http://localhost:3001/api/customers` untuk mengetest server apakah sudah berjalan atau belum
8. Jika sudah berjalan, maka tampilannya akan seperti dibawah ini

<p align="center">
    <span>
        <image width="600" src="./ss/1.PNG" />
    </span>
</p>

9. Buka Terminal / CMD baru yang mengarah ke folder yang sudah di clone, tanpa menutup Terminal / CMD yang sedang menjalankan servernya
10. ketik `npm start` atau `yarn start`
11. Jika sudah berjalan, buka browser dan ketik pada address bar`http://localhost:3000` maka tampilannya akan seperti dibawah ini
12. username `admin` password `admin`

<p align="center">
    <span>
        <image width="700" src="./ss/2.PNG" />
    </span>
</p>

## Docker

1. Untuk menjalankan via Docker, install terlebih dahulu Docker pada perangkat anda (Laptop / PC)
2. Jika sudah, buka Docker yang sudah terinstall pada perangkat anda.
3. Kemudian Buka Terminal / CMD baru yang mengarah ke folder yang sudah di clone, tanpa menutup Terminal / CMD yang sedang menjalankan servernya
4. Ketik `docker build -t react-app .`, tunggu hingga proses build nya selesai.
5. Setelah build nya selesai, ketik `docker run -p 3000:3000 react-app`
6. Jika sudah berjalan, buka browser dan ketik pada address bar`http://localhost:3000`

## Contact

Apabila ada kendala dan pertanyaan, hubungi saya melalui email `alghi77@gmail.com`

## Screenshots

  <p align="center">
    <span>
      <image width="700" src="./ss/2.PNG" />
      <image width="700" src="./ss/3.PNG" />
      <image width="700" src="./ss/4.PNG" />
      <image width="700" src="./ss/5.PNG" />
      <image width="700" src="./ss/6.PNG" />
      <image width="700" src="./ss/7.PNG" />
      <image width="700" src="./ss/8.PNG" />
      <image width="700" src="./ss/9.PNG" />
      <image width="700" src="./ss/10.PNG" />
      <image width="700" src="./ss/11.PNG" />
    </span>
  </p>
