import { Database, Play, Code, Table } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Pertemuan4() {
  const steps = [
    { 
      title: 'Pustaka Kode (Library Import)', 
      icon: Code,
      desc: 'Pustaka kode (library) adalah kumpulan fungsi yang siap pakai. Kita butuh: Requests (untuk HTTP request), BeautifulSoup (untuk membedah HTML), dan Pandas (untuk mengolah tabel).',
      code: 'import requests\nimport pandas as pd\nfrom bs4 import BeautifulSoup\n\nprint("Library siap digunakan.")' 
    },
    { 
      title: 'Parsing Halaman Web', 
      icon: Play,
      desc: 'Langkah awal mengambil struktur mentah dari website. Menggunakan Request untuk mengunduh, lalu BeautifulSoup untuk membedahnya (parsing).',
      code: 'th = "https://diploy.id/jobs?job_field_id=2"\nhalaman = requests.get(th)\n\nhasil = BeautifulSoup(halaman.content, "html.parser")\nprint("Sukses memperoleh elemen HTML.")' 
    },
    { 
      title: 'Ekstraksi dari Tag HTML', 
      icon: Database,
      desc: 'Fitur Inspect Element browser membantu kita mencari "class" yang membungkus informasi terkait. Gunakan perintah find_all() untuk mengekstrak array data.',
      code: 'lowkers = hasil.find_all("div", {"class":"pxp-jobs-card-2"})\n\npos = []  # Array posisi\nlok = []  # Array lokasi\nstat = [] # Array status\n\nfor p in lowkers:\n    t1 = p.find_all("a", {"class":"pxp-jobs-card-2-title"})\n    pos.append(t1[0].get_text())\n    \n    t2 = p.find_all("span", {"class":"location"})\n    lok.append(t2[0].get_text())\n    \n    t3 = p.find_all("a", {"class":"category"})\n    stat.append(t3[0].get_text())\n\nprint(f"Berhasil mendapat {len(pos)} data.")' 
    },
    { 
      title: 'Framing Data (Pandas)', 
      icon: Table,
      desc: 'Hasil tahapan ekstraksi masih berbentuk Array kaku. Kita perlu framing via Pandas DataFrame untuk membuat tabel visual dua dimensi yang rapi.',
      code: 'lowker = pd.DataFrame({\n  "Posisi": pos,\n  "Lokasi": lok,\n  "Status": stat\n})\n\nprint("Tabel Rekapitulasi:")\nprint(lowker.head())' 
    },
  ];

  const slides = [
    // Slide 1: Intro
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 mb-4 shadow-sm">
        <Database size={64} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Proyek Web Scraping</h2>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Praktik penarikan data internet secara otomatis (Web Scraping) menggunakan pustaka BeautifulSoup dan Pandas.
      </p>
    </div>,

    // Slide 2: Mengapa butuh Pustaka?
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Konsep Pustaka & Scraping</h3>
      <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Pustaka kode (Library) digunakan dalam program untuk melakukan tugas-tugas kompleks tertentu tanpa perlu menulis ulang kodenya dari nol secara mandiri.
        </p>
        <p>
          Seringkali kita menemui website yang menampilkan daftar dengan sistem membagi per-halaman kecil. Menyalin 1000 data pekerjaan secara manual lewat mouse akan memakan waktu harian. Dengan kemampuan Scraping, kita memerintahkan bot Python untuk melompat halaman otomatis.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 mt-6">
          <p className="text-blue-900 font-bold mb-2">Pandas & BeautifulSoup:</p>
          <ul className="list-disc ml-6 text-blue-800 text-base space-y-2">
            <li><b>BeautifulSoup:</b> Menyaring &quot;Hutan Kode HTML&quot; untuk menemukan daun-daun kata yang spesifik (misal: hanya mengambil teks di dalam <code>&lt;a class=&quot;title&quot;&gt;</code>).</li>
            <li><b>Pandas:</b> Menerima hasil saringan yang berantakan lalu merangkumnya jadi bentuk tabel Excel yang indah.</li>
          </ul>
        </div>
      </div>
    </div>,

    // Slides 3-6: Map through steps array
    ...steps.map((s, idx) => {
      const CurrentIcon = s.icon;
      return (
        <div key={`step-${idx}`} className="flex flex-col min-h-full space-y-6 pb-8">
          <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <span className="bg-blue-600 text-white rounded-xl w-10 h-10 flex items-center justify-center text-xl">{idx + 1}</span>
            Tahap: {s.title}
          </h3>
          
          <div className="bg-white p-5 border border-gray-200 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><CurrentIcon size={24} /></div>
            <p className="text-gray-700 text-lg leading-relaxed">{s.desc}</p>
          </div>
          
          <div className="bg-[#111111] rounded-3xl border border-gray-800 overflow-hidden flex flex-col shadow-xl mt-2">
            <div className="bg-[#1a1a1a] p-4 border-b border-gray-800 flex items-center gap-2">
              <Code size={16} className="text-gray-500" />
              <span className="text-xs font-bold font-mono text-gray-400">snippet.py</span>
            </div>
            <div className="p-6 overflow-auto">
              <pre className="text-green-400/90 font-mono text-base leading-relaxed whitespace-pre-wrap">
                <code>{s.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )
    })
  ];

  return <SlidePresentation title="Pertemuan 4: Web Scraping" slides={slides} />;
}
