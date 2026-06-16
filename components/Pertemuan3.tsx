import { useState } from 'react';
import { PlaySquare, Play } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan3() {
  const [activeTab, setActiveTab] = useState<'print'|'loop'|'try'>('print');

  const codes = {
    print: {
      title: "Cetak (Print) & Assignment",
      desc: "Print adalah fungsi yang digunakan untuk mencetak output program di layar. Setiap bahasa pemrograman memiliki perintah print dengan penulisan yang berbeda-beda. Assignment (=) adalah proses mengalokasikan nilai tertentu ke dalam sebuah variabel.",
      code: `# Contoh Pemberian Nilai (Multiple Assignment)\na, b, c = 2, 4, 6\npenjumlahan = a + b\n\n# Memanggil fungsi print untuk mencetak teks dan variabel\nprint(a, b, c)\nprint("penjumlahan =", penjumlahan)`,
      output: `2 4 6\npenjumlahan = 6`
    },
    loop: {
      title: "Penelusuran Data (Looping For)",
      desc: "Pengulangan atau looping merupakan konsep dalam pemrograman untuk mengulang instruksi dengan jumlah pengulangan tertentu secara otomatis tanpa harus diketik manual. Bisa menggunakan rentang (range) atau menelusuri isi array/list secara langsung.",
      code: `# Contoh Looping menggunakan range()\nulang = 5\nprint("Looping dengan range:")\nfor i in range(ulang):\n    print("perulangan ke", i)\n\n# Contoh Looping List secara langsung\nfruits = ["apel", "pisang", "jeruk"]\nprint("\\nLooping Element List:")\nfor x in fruits:\n    print(x)`,
      output: `Looping dengan range:\nperulangan ke 0\nperulangan ke 1\nperulangan ke 2\nperulangan ke 3\nperulangan ke 4\n\nLooping Element List:\napel\npisang\njeruk`
    },
    try: {
      title: "Uji Kondisi (Branching/Try-Except)",
      desc: "Ada kalanya user memasukkan data yang error atau tidak terprediksi. Try-except digunakan untuk menangani error yang terjadi selama proses eksekusi. Konsep ini mencegah program menjadi crash total jika terjadi kesalahan logika.",
      code: `# Contoh membagi bilangan dengan Nol\ntry:\n    c = 10 / 0\n    print(c)\nexcept:\n    print("pembagian tidak bisa dilakukan")\nelse:\n    print("pembagian sukses")\n\n# Membedakan string di perulangan list\ndata = [10, 9, "Cindi"]\nfor x in data:\n    try:\n        print(x / 2)\n    except:\n        print("Bukan bilangan")`,
      output: `pembagian tidak bisa dilakukan\n5.0\n4.5\nBukan bilangan`
    }
  };

  const codeView = (
    <div className="bg-white rounded-3xl border border-blue-100 shadow-lg overflow-hidden flex flex-col">
      <div className="p-6 md:p-8 space-y-6 flex flex-col">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{codes[activeTab].title}</h3>
          <p className="text-gray-700 text-base leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-100">{codes[activeTab].desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-inner">
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono tracking-wider">main.py (Kode Input)</span>
            </div>
            <div className="p-6 overflow-auto">
              <pre className="text-blue-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                <code>{codes[activeTab].code}</code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-gray-200 px-5 py-3 flex items-center gap-2 border-b border-gray-300">
              <Play size={16} className="text-gray-600" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Output Program</span>
            </div>
            <div className="p-6 overflow-auto bg-white/50">
              <pre className="text-gray-800 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                <code>{codes[activeTab].output}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 mb-4 shadow-sm">
        <PlaySquare size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Praktik Logika Dasar Python</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Mempelajari aturan sintaksis dan implementasi fungsi dasar pada bahasa pemrograman Python.
      </p>
    </div>,

    // Slide 2: Sintaksis
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Keunggulan Sintaksis Python</h3>
      <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Sintaksis Python dibandingkan dengan bahasa pemrograman lain memiliki beberapa kelebihan. Python menggunakan <strong>baris baru (newline)</strong> untuk menyelesaikan perintah, berbeda dengan bahasa pemrograman lain yang sering menggunakan titik koma (;).
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 mt-6">
          <p className="text-blue-900 font-bold mb-2">Pentingnya Indentasi (Tab/Spasi):</p>
          <p className="text-blue-800 text-base">
            Python mengandalkan indentasi (spasi menjorok ke dalam) untuk membatasi cakupan blok kode secara visual logis. Tidak seperti bahasa seperti C++ atau Java yang menggunakan kurung kurawal {"{ }"} untuk mendefinisikan ruang lingkup loop, fungsi, dan kelas, Python mewajibkan pemrogram menggunakan tab indentasi yang rapi.
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Praktik Logika (Tabbed View inside Slide)
    <div key="s3" className="flex flex-col min-h-full space-y-4 pb-8">
      <h3 className="text-3xl font-bold text-gray-800">Praktik Koding Interaktif</h3>
      <p className="text-gray-600 text-sm md:text-base">Eksplorasi tiga pilar dasar algoritma Python:</p>
      
      <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex overflow-x-auto w-full shrink-0">
        <div className="flex w-full gap-2 relative">
          <button onClick={() => setActiveTab('print')} className={`flex-1 min-w-[150px] text-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${activeTab === 'print' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50'}`}>1. Cetak & Assign</button>
          <button onClick={() => setActiveTab('loop')} className={`flex-1 min-w-[150px] text-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${activeTab === 'loop' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50'}`}>2. Looping (For)</button>
          <button onClick={() => setActiveTab('try')} className={`flex-1 min-w-[150px] text-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${activeTab === 'try' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-50'}`}>3. Try-Except</button>
        </div>
      </div>
      
      <div className="pt-2">
        {codeView}
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 3: Logika Dasar" slides={slides} />;
}
