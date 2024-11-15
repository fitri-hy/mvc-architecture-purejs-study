Penelitian tentang Kemampuan JavaScript murni dalam Menerapkan Arsitektur Model-View-Controller (MVC) dengan routing dan Perbandingannya dengan Framework JavaScript

#### Abstrak

Penelitian ini mengkaji kemampuan JavaScript murni (Pure JavaScript) dalam mengimplementasikan Model-View-Controller (MVC), serta membandingkannya dengan framework JavaScript modern seperti React, Vue.js, dan Angular.

Banyak framework muncul dengan tujuan mempermudah pengembangan aplikasi berbasis web yang lebih besar dan kompleks, tetapi pertanyaannya adalah apakah JavaScript murni mampu menangani pola arsitektur MVC dengan efisien tanpa ketergantungan pada framework eksternal.

Dalam penelitian ini, saya melakukan eksperimen dengan membangun aplikasi berbasis MVC menggunakan JavaScript murni untuk menampilkan data menggunakan metode fetch dari api external.

Hasil penelitian menunjukkan bahwa meskipun JavaScript murni dapat menerapkan prinsip MVC, penggunaan framework dapat meningkatkan efisiensi dalam pengembangan aplikasi yang kompleks.

#### 1. Pendahuluan:

Pola desain Model-View-Controller (MVC) dengan routing telah lama digunakan dalam pengembangan perangkat lunak untuk memisahkan logika aplikasi, tampilan, dan kontrol.

MVC memudahkan pengelolaan aplikasi dan pemeliharaannya dengan memisahkan tanggung jawab di tiga komponen utama. Meskipun MVC dapat diterapkan menggunakan JavaScript murni, pertanyaan yang muncul adalah apakah framework seperti React, Vue.js, dan Angular benar-benar dibutuhkan untuk pengembangan aplikasi skala besar.

Framework JavaScript modern menawarkan banyak fitur yang membuat pengembangan aplikasi lebih efisien dan cepat. Mereka mengelola tampilan secara deklaratif, menyediakan sistem komponen, dan menawarkan manajemen status serta routing otomatis.

Penelitian ini berfokus pada eksperimen membangun aplikasi MVC menggunakan JavaScript murni untuk menggali lebih dalam apakah JavaScript murni dapat menangani tantangan-tantangan tersebut tanpa bergantung pada framework besar.

#### 2. Tujuan dan Manfaat:

Tujuan dari penelitian ini adalah untuk:

- Mengembangkan aplikasi berbasis MVC menggunakan JavaScript murni tanpa ketergantungan pada framework eksternal.
- Menganalisis apakah JavaScript murni dapat mengelola pengambilan data, routing, dan pengelolaan tampilan dengan cara yang efisien dalam konteks aplikasi besar.
- Membandingkan JavaScript murni dengan framework JavaScript seperti React dan Vue.js dalam hal kemudahan pengembangan dan skalabilitas.

Manfaat dari penelitian ini adalah:

- Memberikan wawasan lebih dalam mengenai penerapan MVC dengan JavaScript murni.
- Menyediakan pemahaman tentang tantangan yang dihadapi oleh pengembang dalam menggunakan JavaScript murni untuk aplikasi besar dibandingkan dengan menggunakan framework.
- Menjadi referensi untuk pengembang yang tertarik menggunakan JavaScript murni untuk aplikasi yang lebih modular tanpa ketergantungan pada pustaka eksternal.

#### 3. Metodologi:

Metodologi yang digunakan dalam eksperimen ini terdiri dari beberapa tahap utama:

Perencanaan dan Desain Sistem:

- Merancang aplikasi berbasis MVC menggunakan JavaScript murni.
- Mendesain sistem routing untuk menangani navigasi antar tampilan.
- Mengidentifikasi API eksternal untuk pengambilan data yang akan digunakan dalam aplikasi.

Implementasi:

- Model: Membangun komponen Model untuk mengelola data dan berkomunikasi dengan API eksternal menggunakan fetch API.
- View: Mendesain tampilan dengan HTML dan CSS untuk menampilkan data dari Model.
- Controller: Mengembangkan Controller untuk menangani interaksi pengguna dan pengelolaan alur aplikasi antara Model dan View.
- Routing: Mengimplementasikan sistem routing manual untuk menavigasi tampilan aplikasi berdasarkan URL yang diakses oleh pengguna.

Pengujian dan Analisis:
- Menguji kemampuan JavaScript murni dalam menangani aplikasi skala kecil dan menengah dengan MVC.
- Menganalisis performa aplikasi dan pengalaman pengembangan dibandingkan dengan menggunakan framework JavaScript populer.

#### 4. Hasil dan Pembahasan:

Aplikasi yang dikembangkan menggunakan JavaScript murni berhasil menerapkan prinsip MVC dengan efektif. Namun, tantangan yang ditemukan selama eksperimen adalah:

- Pengelolaan Tampilan (View): Tanpa framework, pengelolaan tampilan dinamis memerlukan kode lebih banyak dan rentan terhadap duplikasi.
- Routing: Meskipun routing manual dapat dilakukan, manajemen rute yang lebih kompleks dapat menjadi sulit seiring bertambahnya fitur aplikasi.
- Pengelolaan Data (Model): Penggunaan fetch API untuk pengambilan data dari sumber eksternal bekerja dengan baik, namun proses ini harus lebih terorganisir dan terstruktur untuk aplikasi besar.

Dibandingkan dengan framework seperti React atau Vue.js, yang menawarkan pemisahan tampilan yang lebih efisien melalui sistem komponen dan reaktivitas otomatis, JavaScript murni memerlukan lebih banyak upaya untuk mengelola pembaruan UI dan interaksi pengguna.

Meskipun demikian, eksperimen ini menunjukkan bahwa JavaScript murni mampu menerapkan MVC, meskipun tidak seefisien framework-framework modern dalam skala aplikasi besar.

Framework seperti React dan Vue.js memberikan keuntungan dalam hal pemeliharaan dan pengelolaan status aplikasi, serta menawarkan pengelolaan rute dan tampilan yang lebih sederhana.

#### 5. Kesimpulan:

Penelitian ini membuktikan bahwa JavaScript murni dapat digunakan untuk menerapkan arsitektur MVC dalam pengembangan aplikasi berbasis web. Meskipun demikian, ketika berhadapan dengan aplikasi yang lebih besar dan kompleks, penggunaan framework seperti React atau Vue.js memberikan keuntungan yang signifikan dalam hal pengelolaan tampilan, status, dan pengelolaan rute.

Oleh karena itu, meskipun JavaScript murni cukup untuk eksperimen dan aplikasi kecil hingga menengah, framework modern masih lebih efektif dalam membangun aplikasi skala besar dengan fitur dinamis dan interaktif.

#### 6. Saran:

- Untuk aplikasi yang lebih besar, sebaiknya pertimbangkan penggunaan framework JavaScript untuk mempermudah manajemen state, tampilan, dan routing.
- Penelitian lebih lanjut dapat dilakukan untuk mengeksplorasi penggunaan JavaScript murni dalam aplikasi dengan fitur lebih kompleks dan integrasi API yang lebih mendalam.

#### Referensi & Inspirasi:

- Flanagan, D. (2020). JavaScript: The Definitive Guide. O'Reilly Media.
- Crockford, D. (2008). JavaScript: The Good Parts. O'Reilly Media.
- Mozilla Developer Network (MDN). (2023). Fetch API Documentation.
- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
