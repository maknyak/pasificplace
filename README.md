# Color scheme for pasific place

# How to run:
1. npm run install: Untuk mendownload depedency
2. npm run serve: Untuk live editing bootstrap component

# Folder structure
* __public__
  * __css:__ berikan hasil compile file bootstrap
  * __js:__ tambahkan depedency jika dibutuhkan
  * __index.html:__ halaman preview hasil generate component yang kita buat, tambahkan halaman lain jika dibutuhkan
* __scr__
  * __scss:__ kumpulan scss yang akan dibuat
    * __bootstrap:__ disini kita import file scss bootstrap dari node_modules, tidak semua komponen diambil hanya component yang diedit yang di copy ke folder ini. tujuannya jika bootstrapnya ada update terbaru, cukup update node_modulenya saja dan tidak merusak file yang kita edit. jadi bootstrapnya bisa update terus.
    * __checkbox:__ custom radio & checkbox style yang dibuat menggunakan vanila scss
    * __heading:__ custom page title style
    * __tabs:__ custom tabs style 
    * __utility__
      * __border.scss:__ berfungsi menghilangkan border, misal: border-none, border-left-none, dsb.
      * __margin-padding.scss:__ berfungsi untuk membuat padding/margin menggunakan class. misal: pl-10: padding-left: 10px, mx-20: margin-left & margin-right bernilai 20px. dsb
      * __size-function.scss:__ converter dari px to rem dengan default base size 16px
      * __sizing.scss:__ sizing class seperti fontsize-12: merubah font jadi 12px. width-100: merubah lebar jadi 100px
      * __utility.scss:__ grouping penggunaan utility scss, import yang digunakan saja. file utility.scss ini nantinya agar bisa digunakan harus diimport di main.scss
   * __main.scss:__ import selurus file scss yang akan digunakan

> _catatan: tambahkan underscore (_) ketika membuat file scss agar hasil compile tidak generate._ 
