import { ShieldCheck, Info } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan5() {
  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-emerald-100 p-6 rounded-3xl text-emerald-600 mb-4 shadow-sm">
        <ShieldCheck size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Ekosistem Periksa Fakta</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Mempelajari Ekosistem Periksa Fakta, cara membedakan Fakta vs Hoaks, serta pengenalan klasifikasi kepalsuan konten.
      </p>
    </div>,

    // Slide 2: Konsep Ekosistem
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Pengertian Ekosistem</h3>
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Ekosistem periksa fakta adalah jaringan berbagai organisasi, platform digital, dan individu akademisi yang bekerja sama untuk memverifikasi kebenaran informasi dan mengatasi penyebaran informasi palsu (hoaks).
        </p>
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-start gap-4">
          <Info className="shrink-0 text-blue-500 mt-1" />
          <p>
            Diperlukan sinergi antara platform sosial media (sebagai pengatur filter logaritma), pers jurnalistik utama independen, hingga komunitas masyarakat awam teredukasi agar ekosistem ini membentengi masyarakat dari kepanikan massal.
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Fakta vs Hoaks
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800">C. Ciri Fakta & Indikator Hoaks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Kolom Fakta */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex flex-col">
          <h4 className="text-2xl font-black text-emerald-800 mb-2 border-b border-emerald-200 pb-3">1. Fakta</h4>
          <p className="text-emerald-900 text-sm italic mb-4 font-medium">Sesuatu yang benar-benar nyata terjadi, dibuktikan objektivitas dan data.</p>
          <ul className="space-y-4 text-emerald-900 text-sm">
            <li><strong className="block text-emerald-700 text-base mb-0.5">a. Bersifat Objektif</strong> Netral, tidak memihak, dan tanpa emosi subjektif.</li>
            <li><strong className="block text-emerald-700 text-base mb-0.5">b. Terjadi Nyata</strong> Kejadian aktual yang diakui logika masyarakat riil.</li>
            <li><strong className="block text-emerald-700 text-base mb-0.5">c. Berisi Data Pasti</strong> Angka statistik, tempat, waktu, yang resmi ada.</li>
            <li><strong className="block text-emerald-700 text-base mb-0.5">d. Verifiable</strong> Terbuka untuk di-kroscek silang oleh pihak manapun.</li>
          </ul>
        </div>
        
        {/* Kolom Hoaks */}
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 flex flex-col">
          <h4 className="text-2xl font-black text-red-800 mb-2 border-b border-red-200 pb-3">2. Hoaks (Berita Palsu)</h4>
          <p className="text-red-900 text-sm italic mb-4 font-medium">Informasi manipulatif untuk membangkitkan emosi kepanikan publik merugikan.</p>
          <ul className="space-y-3 text-red-900 text-sm">
            <li className="flex gap-2"><span className="text-red-500">•</span> Asal domain tidak jelas (anomali) tanpa Redaksi.</li>
            <li className="flex gap-2"><span className="text-red-500">•</span> Tidak mencantumkan nama Jurnalis penulis.</li>
            <li className="flex gap-2"><span className="text-red-500">•</span> Framing SARA, provokatif, emosional berat.</li>
            <li className="flex gap-2"><span className="text-red-500">•</span> Lokasi & keterangan kejadian selalu dikaburkan.</li>
            <li className="flex gap-2"><span className="text-red-500">•</span> Selalu memaksa pembaca: &quot;Tolong Share!!&quot;</li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 4: 7 Klasifikasi Berita Palsu
    <div key="s4" className="flex flex-col min-h-full space-y-4 pb-8">
      <h3 className="text-3xl font-bold text-gray-800">7 Klasifikasi Berita Hoaks (First Draft)</h3>
      <p className="text-gray-600 font-medium text-lg mb-2">Tingkatan kepalsuan menurut Organisasi Nirlaba Pemeriksa Fakta Global:</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {[
          { t: 'Satire / Parodi', bg: 'bg-indigo-50', d: 'Gaya komedi, bukan niat jahat, tapi mengecoh orang awam.' },
          { t: 'False Connection', bg: 'bg-orange-50', d: 'Judul klikbait atau gambar thumbnail tidak sesuai sama sekali dengan isian asli.' },
          { t: 'False Context', bg: 'bg-yellow-50', d: 'Foto ASLI, namun caption-nya diberikan narasi/waktu yang salah besar.' },
          { t: 'Misleading Content', bg: 'bg-amber-50', d: 'Secara kotor membingkai pelintiran sepotong guna menyesatkan nama baik tokoh.' },
          { t: 'Imposter Content', bg: 'bg-pink-50', d: 'Konten jahat yang pura-pura berseragam memakai stempel asli lembaga negara.' },
          { t: 'Manipulated Content', bg: 'bg-rose-50', d: 'Surat formal (ASLI), namun dipermak di photoshop diedit secara teknis digital.' },
          { t: 'Fabricated Content', bg: 'bg-red-50 border border-red-200 shadow-inner', d: 'Penipuan Mutlak 100%. Tak pernah terjadi. Sepenuhnya dirancang untuk menjatuhkan.' },
        ].map((item, i) => (
          <div key={i} className={`${item.bg} p-4 rounded-2xl flex flex-col`}>
            <h4 className="text-base font-bold text-slate-800 mb-2 truncate">{item.t}</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 5: IFCN Indonesia
    <div key="s5" className="flex flex-col min-h-full space-y-4 pb-8">
      <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col h-full">
        <h3 className="font-bold text-3xl mb-4 text-blue-300 border-b border-slate-700 pb-4 shrink-0">Kolaboratif Jaringan Nasional (IFCN)</h3>
        
        <div className="space-y-6 text-lg text-slate-300">
          <p>
            Maraknya urgensi memberantas kebohongan siber mendorong lahirnya organisasi independen <strong>IFCN (International Fact Checking Network)</strong>.
          </p>
          <p>
            Penerapan di Indonesia, pelacakan hoaks dijalankan bersama dewan komite ahli <strong>Mafindo (Masyarakat Anti Fitnah Indonesia)</strong>, diikuti integrasi konsorsium rujukan media nasional utama.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {["Cek Fakta Liputan6", "Cek Fakta Suara", "Cek Fakta Tirto", "Cek Fakta Kompas", "Turnbackhoax", "Tempo CekFakta"].map(name => (
              <div key={name} className="px-4 py-8 bg-slate-800 border-2 border-slate-700 rounded-2xl text-center flex items-center justify-center font-bold text-blue-100 text-lg shadow-sm hover:scale-105 transition-transform duration-300">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 5: Ekosistem Fakta" slides={slides} />;
}
