Color scheme for pasific place

How to run:
1. npm run install: Untuk mendownload depedency
2. npm run serve: Untuk live editing bootstrap component

Folder structure
public
- css: berikan hasil compile file bootstrap
- js: tambahkan depedency jika dibutuhkan
- index.html: halaman preview hasil generate component yang kita buat, tambahkan halaman lain jika dibutuhkan
scr
- scss: kumpulan scss yang akan dibuat
-- bootstrap: disini kita import file scss bootstrap dari node_modules, tidak semua komponen diambil hanya component yang diedit yang di copy ke folder ini. tujuannya jika bootstrapnya ada update terbaru, cukup update node_modulenya saja dan tidak merusak file yang kita edit. jadi bootstrapnya bisa update terus.
-- checkbox: custom radio & checkbox style yang dibuat menggunakan vanila scss
-- heading: custom page title style
-- tabs: custom tabs style 
-- utility
--- border.scss: berfungsi menghilangkan border, misal: border-none, border-left-none, dsb.
--- margin-padding.scss: berfungsi untuk membuat padding/margin menggunakan class. misal: pl-10: padding-left: 10px, mx-20: margin-left & margin-right bernilai 20px. dsb
--- size-function.scss: converter dari px to rem dengan default base size 16px
--- sizing.scss: sizing class seperti fontsize-12: merubah font jadi 12px. width-100: merubah lebar jadi 100px
--- utility.scss: grouping penggunaan utility scss, import yang digunakan saja. file utility.scss ini nantinya agar bisa digunakan harus diimport di main.scss
