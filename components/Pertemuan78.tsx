import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, RotateCcw, PenTool } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan78() {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const questions = [
    {
      q: "Untuk membatasi hasil pencarian dari peramban web pada rentang waktu spesifik pada mesin Google Search, kita menggunakan penambahan keyword khusus. Manakah variabel yang tepat penggunaannya?",
      options: [
        "filetype:pdf",
        "site:go.id",
        "daterange:2025-2026",
        "intitle:hoaks",
        "cache:berita"
      ],
      ans: 2
    },
    {
      q: "Tipe data Python yang menyusun banyak tipe di dalam untaian panjang namun berisi paket yang isinya secara mutlak tidak bisa diubah (immutable), adalah...",
      options: [
        "List",
        "Tuple",
        "Dictionary",
        "Complex",
        "Float"
      ],
      ans: 1
    },
    {
      q: "Sebuah foto badai asli yang murni namun diunggah ulang pada media sosial dengan diberi narasi waktu kejadian Tsunami secara salah untuk mengundang kepanikan massal, disebut kategori Hoaks...",
      options: [
        "False connection",
        "Misleading content",
        "False context",
        "Imposter content",
        "Fabricated content"
      ],
      ans: 2
    },
    {
      q: "Saat memverifikasi informasi digital menggunakan tes akreditasi CRAAP, aspek keaktualan 'Currency' sangat mempertimbangkan hal di bawah ini, KECUALI...",
      options: [
        "Waktu penayangan informasi publikasi diunggah",
        "Menelusuri afiliasi lembaga donatur yang membiayai iklan situsnya",
        "Terdapat revisi pembaharuan jika memang isinya ketinggalan zaman",
        "Apakah tautan rujukannya masih murni stabil berfungsi wajar",
        "Kesesuaian periode peristiwa di laporan yang ada"
      ],
      ans: 1
    },
    {
      q: "Dalam dunia Web Scraping, membebankan urusan mengurai strukur bahasa koding HTML yang berdebu menjadi elemen spesialis yang terbaca manusia dalam format Python, adalah fungsi teknis pokok dari dari pustaka (Library)...",
      options: [
        "Requests System / Get",
        "Pandas Dataframe",
        "TensorFlow Array",
        "BeautifulSoup Parser",
        "Matplotlib"
      ],
      ans: 3
    }
  ];

  const submitQuiz = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.ans) s += 1;
    });
    setScore(s);
  };

  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-amber-100 p-6 rounded-3xl text-amber-600 mb-4 shadow-sm">
        <PenTool size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Mini Proyek & Asesmen Sumatif</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Pengerjaan proyek praktik kelompok web-scraping dan pengambilan basis nilai sumatif Bab 1.
      </p>
    </div>,

    // Slide 2: Mini Proyek
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <div className="bg-amber-50 border border-amber-200 p-6 md:p-10 rounded-3xl relative overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
        <h3 className="text-3xl font-bold text-amber-900 mb-4 relative z-10 flex items-center gap-2">
          Tugas Kolaboratif Kelompok (Mini Proyek)
        </h3>
        <p className="text-lg text-amber-800 leading-relaxed mb-6 relative z-10 bg-white/50 p-6 rounded-2xl border border-amber-100/50">
          Peserta didik difokuskan menerapkan kompilasi teknis web scraping sederhana terkait kompilasi judul Berita Terkini/Lowongan Karir menggunakan platform IDE Google Colab.
        </p>
        <ul className="grid gap-4 relative z-10">
          <li className="flex gap-4 text-amber-900 text-lg bg-amber-100/50 p-4 rounded-xl">
            <span className="font-mono bg-amber-200 px-3 flex items-center text-xl rounded-lg font-bold self-start mt-0.5 shrink-0 h-10 w-10 justify-center">1</span>
            <span>Implementasi Pustaka Library Request URL berita serta lakukan Parsing HTML di Colab.</span>
          </li>
          <li className="flex gap-4 text-amber-900 text-lg bg-amber-100/50 p-4 rounded-xl">
            <span className="font-mono bg-amber-200 px-3 flex items-center text-xl rounded-lg font-bold self-start mt-0.5 shrink-0 h-10 w-10 justify-center">2</span>
            <span>Konversi list hasil parser ke dalam format tabel menggunakan Pandas Database pada 3 Artikel.</span>
          </li>
          <li className="flex gap-4 text-amber-900 text-lg bg-amber-100/50 p-4 rounded-xl">
            <span className="font-mono bg-amber-200 px-3 flex items-center text-xl rounded-lg font-bold self-start mt-0.5 shrink-0 h-10 w-10 justify-center">3</span>
            <span>Teliti setiap sumber artikel menggunakan Checklist mandiri Metode Evaluasi Uji CRAAP.</span>
          </li>
          <li className="flex gap-4 text-amber-900 text-lg bg-amber-100/50 p-4 rounded-xl">
            <span className="font-mono bg-amber-200 px-3 flex items-center text-xl rounded-lg font-bold self-start mt-0.5 shrink-0 h-10 w-10 justify-center">4</span>
            <span>Cetak Output di layar Jupyter dan presentasikan metode validasi temuan tersebut.</span>
          </li>
        </ul>
      </div>
    </div>,

    // Slide 3: Asesmen
    <div key="s3" className="flex flex-col min-h-full space-y-4 pb-8">
      <h3 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3 shrink-0">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-xl"><CheckCircle2 size={28} /></span>
        Asesmen Sumatif Latihan Bab 1
      </h3>

      <div className="pb-8">
        {score === null ? (
          <div className="space-y-8">
            {questions.map((q, i) => (
              <div key={i} className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="font-semibold text-gray-800 leading-relaxed text-lg">
                  <span className="text-blue-600 font-black mr-3 bg-blue-100 px-2.5 py-1 rounded-lg">{i+1}</span>
                  {q.q}
                </p>
                <div className="space-y-2 mt-4 md:ml-12 w-full">
                  {q.options.map((opt, optIdx) => (
                    <label key={optIdx} className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all border ${answers[i] === optIdx ? 'bg-blue-50 border-blue-300 ring-1 ring-blue-300' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
                      <input 
                        type="radio" 
                        name={`q-${i}`} 
                        checked={answers[i] === optIdx}
                        onChange={() => setAnswers({...answers, [i]: optIdx})}
                        className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <span className={`text-base ${answers[i] === optIdx ? 'font-bold text-blue-800' : 'text-gray-700'}`}>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 flex justify-end">
              <button 
                onClick={submitQuiz}
                disabled={Object.keys(answers).length < questions.length}
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:-translate-y-1 text-lg w-full md:w-auto"
              >
                Kumpul Lembar Jawaban & Nilai
              </button>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-blue-100 shadow-inner max-w-2xl mx-auto mt-6"
          >
            <h4 className="text-3xl font-bold text-gray-800 mb-2">Hasil Asesmen Akhir</h4>
            <div className="relative inline-block my-10">
              <svg className="w-56 h-56 transform -rotate-90">
                <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-gray-200" />
                <circle 
                  cx="112" 
                  cy="112" 
                  r="100" 
                  stroke="currentColor" 
                  strokeWidth="16" 
                  fill="transparent" 
                  strokeDasharray="628.3" 
                  strokeDashoffset={628.3 - (628.3 * ((score / questions.length) * 100)) / 100}
                  className={`${score >= 3 ? 'text-emerald-500' : 'text-rose-500'} transition-all duration-1000 ease-out`} 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className={`text-6xl font-black ${score >= 3 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {(score / questions.length) * 100}
                </span>
                <span className="text-gray-500 text-sm font-bold tracking-widest mt-2 block">NILAI</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-xl">Predikat: Menjawab Benar <strong className="text-gray-900">{score}</strong> dari <strong className="text-gray-900">{questions.length}</strong> Pertanyaan.</p>
            
            <button 
              onClick={() => {setScore(null); setAnswers({});}}
              className="text-white bg-slate-800 font-bold hover:bg-slate-900 px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-3 mx-auto text-lg hover:shadow-lg"
            >
              <RotateCcw size={20} />
              Coba Ulang Asesmen
            </button>
          </motion.div>
        )}
      </div>
    </div>
  ];

  return <SlidePresentation title="Pertemuan 7 & 8: Proyek & Asesmen" slides={slides} />;
}
