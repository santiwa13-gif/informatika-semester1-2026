import { CheckCircle } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan6() {
  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-emerald-100 p-6 rounded-3xl text-emerald-600 mb-4 shadow-sm">
        <CheckCircle size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Evaluasi Validitas: CRAAP</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Materi mengevaluasi sumber kepustakaan internet menggunakan metode tes CRAAP, dan praktik Membaca Lateral (Lateral Reading).
      </p>
    </div>,

    // Slide 2: Evaluasi Data
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">D. Evaluasi Data & Sumbernya</h3>
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Data yang diperoleh dari internet tidak dapat selalu langsung &quot;ditelan mentah-mentah&quot; menjadi acuan akademis, karena kualitas kredibilitas pembuatnya bisa berbeda-beda dan sering kali disusupi kepentingan ganda.
        </p>
        <p>
          Disinilah letak pentingnya proses <strong>evaluasi sumber data penelitian</strong>. Hal krusial yang diamati meliputi kredibilitas <em>Pengarang atau Organisasi</em> yang menaungi situs itu, apakah berita itu <em>Tepat & Objektif</em>, hingga seberapa <em>Up-to-Date (Kekinian)</em> datanya.
        </p>
      </div>
    </div>,

    // Slide 3: Standar CRAAP
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Evaluasi Standar: Tes CRAAP</h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        Tes CRAAP adalah pisau analisis yang dikembangkan para pustakawan akademik, yaitu serangkaian pertanyaan filter yang bantu mengeliminasi referensi buruk.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { l: 'C', t: 'Currency (Keaktualan)', d: 'Kapan data tulisan ini mentas? Terutama teknologi harian, pustaka dekade lalu haram dicomot.' , bg: 'bg-blue-50', c: 'text-blue-700'},
          { l: 'R', t: 'Relevance (Relevansi)', d: 'Apakah situs ini memecahkan masalah inti kamu? Siapakah audiensnya (Mahir/Anak)?', bg: 'bg-emerald-50', c: 'text-emerald-700' },
          { l: 'A', t: 'Authority (Otoritas)', d: 'Siapa sosok pembuatnya? Apa pangkat/jabatan pakarnya? Cek apakah URL-nya resmi (.gov/.edu).' , bg: 'bg-purple-50', c: 'text-purple-700'},
          { l: 'A', t: 'Accuracy (Akurasi)', d: 'Bebas narasi menyayat emosi! Menuntut adanya daftar pustaka dari penulis, tidak typo sembarangan.', bg: 'bg-rose-50', c: 'text-rose-700' },
          { l: 'P', t: 'Purpose (Tujuan)', d: 'Apa motif rahasia tulisan ini? Membagikan edukasi gratis? Jualan asuransi kampanye? Atau parodi?' , bg: 'bg-orange-50', c: 'text-orange-700'},
        ].map((item, i) => (
          <div key={i} className={`${item.bg} p-5 rounded-2xl border flex gap-4 items-start`}>
            <div className={`text-4xl font-black ${item.c} mt-1 w-8 shrink-0 tracking-tighter`}>{item.l}</div>
            <div>
              <h4 className={`font-bold text-lg mb-2 ${item.c}`}>{item.t}</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 4: Lateral Reading
    <div key="s4" className="flex flex-col min-h-full space-y-4 pb-8">
      <div className="bg-[#0f172a] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col h-full">
        <h3 className="text-3xl font-bold mb-4 text-blue-300 shrink-0">
          Praktik Membaca Lateral (Lateral Reading)
        </h3>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6 shrink-0">
          Daripada terkunci vertikal menelaah halaman &quot;Tentang Kami&quot; dalam suatu website (yang bisa dirancang seolah mulia), pembaca yang cerdik dituntut berani <strong>Keluar membuka Tab Baru (Lateral)</strong> di perambannya, demi mendapat kesaksian validasi referensi di portal ulasan luar yang Independen.
        </p>

        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm border-b border-slate-700 pb-2 shrink-0">Langkah Operasional Ketika Curiga:</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 text-xl shrink-0">1</div>
            <h4 className="font-bold text-slate-100 mb-3 text-lg">Selidiki Asal Situs</h4>
            <p className="text-sm text-slate-400 leading-relaxed">Cari Wikipedia untuk mengecek reputasi perusahaan media tersebut secara sejarah perusahaannya.</p>
          </div>
          
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4 text-xl shrink-0">2</div>
            <h4 className="font-bold text-slate-100 mb-3 text-lg">Cek Silang (Crosscheck)</h4>
            <p className="text-sm text-slate-400 leading-relaxed">Kunjungi database Turnbackhoax.id guna melihat apakah klaim viral di situs awal tadi pernah tertangkap radar laporan.</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-4 text-xl shrink-0">3</div>
            <h4 className="font-bold text-slate-100 mb-3 text-lg">Filter Jejak Visual</h4>
            <p className="text-sm text-slate-400 leading-relaxed">Lakukan pencarian &quot;Reverse Image Search&quot; pada Google guna mencari penempatan tanggal tahun asli diunggahnya foto viral.</p>
          </div>
        </div>
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 6: Validitas CRAAP" slides={slides} />;
}
