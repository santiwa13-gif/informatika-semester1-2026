import { Code } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan2() {
  const slides = [
    // Slide 1: B. Koleksi Data
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 mb-4 shadow-sm">
        <Code size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Koleksi Data & Pengenalan Colab</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Memahami metode pengumpulan data menggunakan teknik Scraping dan pengenalan IDE Google Colab.
      </p>
    </div>,

    // Slide 2: Koleksi Data
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">B. Koleksi Data</h3>
      <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Ketika akan mencari data secara spesifik pada suatu situs bisa dilakukan dengan mengunjungi situs tersebut. Kemudian, mencari data yang diinginkan. Misalnya, Anda akan mencari data pekerjaan di suatu website.
        </p>
        <p>
          Biasanya dalam satu halaman, data pekerjaan hanya menampilkan beberapa pekerjaan saja, sedangkan untuk melihat pekerjaan lainnya maka harus masuk ke halaman berikutnya. Dalam pemrograman web, membagi banyak informasi menjadi beberapa halaman sering disebut <em>pagination</em>.
        </p>
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 mt-6">
          <p className="text-emerald-900 font-bold mb-2">Apa itu Scraping?</p>
          <p className="text-emerald-800 text-base">
            <strong>Scraping</strong> adalah sebuah cara pengambilan data atau informasi tertentu dengan jumlah besar dengan tujuan untuk digunakan dalam beragam kebutuhan seperti analisis, riset dan lainnya. Scraping sering dilakukan dengan menggunakan bahasa pemrograman seperti Python.
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Google Colab
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">1. Google Colaboratory (Colab)</h3>
      <p className="text-gray-700 text-lg">
        Untuk membuat program scraping menggunakan Python dibutuhkan lingkungan kerja atau IDE (Integrated Development Environment) untuk menulis dan menjalankan program. Salah satunya adalah <strong>Google Colab</strong>, yang tidak membutuhkan instalasi lokal.
      </p>
      <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 mb-6">
        <h4 className="font-bold text-gray-900 mb-4 text-xl">Bagian-bagian Antarmuka Google Colab:</h4>
        <ul className="space-y-5 text-base text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">1</span>
            <span><strong>Nama proyek:</strong> nama file berekstensi <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">.ipynb</code>. Klik untuk mengganti nama.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">2</span>
            <span><strong>Menubar & Header:</strong> berisi pilihan menu eksekusi, pengaturan file, dan akun.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">3</span>
            <span><strong>Konten notebook (Cell):</strong> area untuk menyisipkan blok kode program Python atau blok teks deskripsi.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">4</span>
            <span><strong>Output area:</strong> bagian di bawah sel kode di mana hasil eksekusi ditampilkan.</span>
          </li>
        </ul>
      </div>
    </div>,

    // Slide 4: Tipe Data Python
    <div key="s4" className="flex flex-col min-h-full space-y-4 pb-8">
      <h3 className="text-3xl font-bold text-gray-800">2. Bahasa Pemrograman Python & Tipe Data</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Python (1991) dapat bekerja lintas platform, memiliki sintaksis sederhana mirip bahasa Inggris, serta butuh lebih sedikit baris kode.
      </p>
      
      <div className="overflow-hidden rounded-2xl border border-gray-200 mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm whitespace-nowrap md:whitespace-normal">
            <thead className="bg-gray-100 text-gray-900 border-b border-gray-200">
              <tr>
                <th className="p-4 w-1/4 font-bold text-lg">Tipe Data</th>
                <th className="p-4 w-1/4 font-bold text-lg">Contoh</th>
                <th className="p-4 w-2/4 font-bold text-lg">Penjelasan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {[
                { type: 'Integer', example: '1 atau 2025', desc: 'Menyatakan bilangan bulat tanpa koma.' },
                { type: 'Float', example: '11.38 atau -0.12', desc: 'Menyatakan bilangan pecahan yang mempunyai koma.' },
                { type: 'Boolean', example: 'True atau False', desc: 'Menyatakan benar (1) atau salah (0).' },
                { type: 'String', example: '"Informatika"', desc: 'Menyatakan karakter/kalimat, diapit tanda kutip.' },
                { type: 'Hexadecimal', example: '3a atau 5d7', desc: 'Menyatakan bilangan dalam format heksa (basis 16).' },
                { type: 'Complex', example: '1 + 3j', desc: 'Menyatakan pasangan angka real dan imajiner.' },
                { type: 'Tuple', example: '("A", 108, 8.14)', desc: 'Data untaian, isinya TIDAK bisa diubah.' },
                { type: 'List', example: '["A", 108, 8.14]', desc: 'Data untaian, isinya BISA diubah-ubah.' },
                { type: 'Dictionary', example: '{"id": 2}', desc: 'Data pasangan berupa penunjuk (key) dan nilai.' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/50 transition-colors text-base">
                  <td className="p-4 font-bold text-blue-700">{row.type}</td>
                  <td className="p-4 font-mono text-gray-600 bg-gray-50">{row.example}</td>
                  <td className="p-4 text-gray-600">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 2: Colab & Tipe Data" slides={slides} />;
}
