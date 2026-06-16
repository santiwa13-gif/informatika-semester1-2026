import { useState } from 'react';
import { Search } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan1() {
  const [query, setQuery] = useState('');

  const parseQuery = (q: string) => {
    let keyword = q;
    const filters: { [key: string]: string } = {};
    
    const operators = ['filetype:', 'site:', 'cache:', 'intitle:', 'inurl:', 'inanchor:', 'intext:', 'daterange:'];
    
    operators.forEach(op => {
      if (q.includes(op)) {
        const parts = q.split(op);
        const value = parts[1].split(' ')[0];
        filters[op.replace(':', '')] = value;
        keyword = keyword.replace(op + value, '').trim();
      }
    });
    
    return { keyword, filters };
  };

  const parsed = parseQuery(query);

  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 mb-4 shadow-sm">
        <Search size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Pencarian Data Lanjut</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Teori dan Praktik Pencarian Data Lanjut menggunakan variabel atau operator khusus pada Google Search.
      </p>
    </div>,

    // Slide 2: Konsep Dasar
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">A. Pencarian Data dengan Banyak Variabel</h3>
      <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Pada era digital, pencarian data dan informasi menjadi aktivitas yang tidak terpisahkan dari berbagai kebutuhan. Mencari informasi menggunakan internet dilakukan dengan memasukkan kata kunci informasi ke dalam <strong>mesin pencari</strong>.
        </p>
        <p>
          Selain pencarian teks biasa, informasi juga spesifik ditemukan melalui <em>pencarian gambar</em>. Namun, jika Anda memerlukan dokumen resmi institusi secara akurat, pencarian kata kunci dasar sering kali tidak cukup dan memunculkan jutaan situs yang mungkin tidak relevan.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 mt-4">
          <p className="text-blue-900 font-bold mb-2 text-xl">Mengapa butuh Variabel?</p>
          <p className="text-blue-800 text-base">
            Dalam mencari informasi agar mendapatkan hasil yang relevan, kita bisa menggunakan mesin pencari secara lanjut dengan memanfaatkan banyak <strong>variabel (parameter operator)</strong>. Hal ini bermanfaat untuk memperkecil ruang lingkup pencarian sehingga fokus pencarian akan lebih spesifik dan hasil yang diperoleh lebih relevan.
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Daftar Variabel
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Daftar Variabel Mesin Pencari</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[
          { op: 'filetype:', title: 'Menggunakan Variabel filetype:', desc: 'Mencari informasi berdasarkan jenis berkas tertentu (misal PDF).' },
          { op: 'site:', title: 'Menggunakan Variabel site:', desc: 'Membatasi pencarian pada situs atau domain tertentu.' },
          { op: 'cache:', title: 'Menggunakan Variabel cache:', desc: 'Menemukan versi salinan sementara (cache) terbaru.' },
          { op: 'intitle:', title: 'Menggunakan Variabel intitle:', desc: 'Membatasi hasil di mana judulnya mengandung kata kunci.' },
          { op: 'inurl:', title: 'Menggunakan Variabel inurl:', desc: 'Menyaring hasil agar halamannya mengandung kata di alamat URL.' },
          { op: 'inanchor:', title: 'Menggunakan Variabel inanchor:', desc: 'Menemukan web yang ditautkan situs lain dengan anchor text tertentu.' },
          { op: 'intext:', title: 'Menggunakan Variabel intext:', desc: 'Membatasi hasil pada isi artikel yang memuat frasa kunci.' },
          { op: 'daterange:', title: 'Menggunakan Variabel daterange:', desc: 'Memfilter hasil pencarian berdasarkan rentang waktu tertentu.' },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="font-mono font-bold text-blue-700 bg-blue-100/50 px-2.5 py-1 rounded-lg text-sm mb-3 inline-block">{item.op}</span>
            <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 4: Simulasi
    <div key="s4" className="flex flex-col min-h-full pb-8">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-10 rounded-3xl shadow-lg border border-blue-500 flex flex-col h-auto">
        <h3 className="text-3xl font-bold mb-3 mt-4">Simulasi Google Search Interaktif</h3>
        <p className="mb-10 text-blue-100 text-lg">Ketikkan kata kunci dengan variabel, misalnya: <code className="bg-blue-900/50 px-3 py-1 rounded inline-block font-mono mt-2 xl:mt-0 text-sm">teknologi filetype:pdf site:go.id</code></p>
        
        <div className="relative mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600" size={28} />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik pencarian di sini..." 
            className="w-full pl-16 pr-6 py-5 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-blue-400/50 font-medium text-xl shadow-inner transition-all"
          />
        </div>
        
        {query.trim().length > 0 && (
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/50 animate-in slide-in-from-bottom-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-blue-200 text-sm font-medium uppercase tracking-wider block mb-2">Kata Kunci Utama</span>
                <p className="text-2xl font-bold">{parsed.keyword || "-"}</p>
              </div>
              {Object.entries(parsed.filters).length > 0 && (
                <div>
                  <span className="text-blue-200 text-sm font-medium uppercase tracking-wider block mb-2">Filter Aktif yang Ditemukan</span>
                  <ul className="grid grid-cols-1 gap-2">
                    {Object.entries(parsed.filters).map(([k, v]) => (
                      <li key={k} className="flex items-center gap-3 bg-black/20 px-4 py-3 rounded-xl">
                        <span className="font-mono text-blue-300 text-sm font-bold min-w-[70px]">{k}:</span>
                        <span className="font-medium text-white truncate text-lg">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 1: Pencarian Lanjut" slides={slides} />;
}
