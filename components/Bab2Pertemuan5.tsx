import { Users } from 'lucide-react';
import SlidePresentation from './SlidePresentation';

export default function Bab2Pertemuan5() {
  const slides = [
    <div key="s1" className="flex flex-col items-center justify-center min-h-full text-center space-y-6 pb-8">
      <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 mb-4 shadow-sm">
        <Users size={64} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Antrean<br/>(Queue)</h2>
      <p className="text-gray-500 text-lg md:text-2xl max-w-2xl px-4 mt-4 font-medium leading-relaxed">
        Memahami struktur data antrean yang berorientasi First In First Out (FIFO).
      </p>
    </div>,
    <div key="s2" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Konsep Queue (FIFO)</h3>
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-medium">
        <p>
          Queue membedakan sisi untuk pintu masuk dan keluar, ia memiliki <strong>Head</strong> (Awal, untuk pengeluaran) dan <strong>Tail</strong> (Akhir, untuk penambahan baru).
        </p>
        <p>
          Prinsip utamanya adalah <strong>First In First Out (FIFO)</strong>: Siapa yang pertama kali masuk, ia yang akan mendapatkan giliran terdepan untuk keluar.
        </p>
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mt-4 text-base text-blue-800">
          <strong>💡 Contoh Dunia Nyata:</strong><br/>
          Antrean dalam sebuah kasir supermarket. Orang pertama yang menanti di dekat kasir (Head) tentunya akan menjadi orang pertama yang selesai dan pulang. Orang yang baru memarkir motor, akan berbaris di area belakang antrean (Tail).
        </div>
      </div>
    </div>,
    <div key="s3" className="flex flex-col min-h-full space-y-6 pb-8">
      <h3 className="text-3xl font-bold text-gray-800 border-b border-gray-100 pb-4">Lima Operasi Dasar Queue</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-blue-600 block mb-1">1. Enqueue</span>
          <span className="text-gray-600 text-sm">Menyisipkan atau memasukkan elemen data baru ke urutan ekor (Tail) pada antrean antrean.</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-blue-600 block mb-1">2. Dequeue</span>
          <span className="text-gray-600 text-sm">Mengeluarkan / membebaskan elemen orang yang menduduki pos Kepala (Head) atau orang pertama dalam antrean.</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-blue-600 block mb-1">3. IsFull</span>
          <span className="text-gray-600 text-sm">Dugaan validasi apabila kapasitas antrean telah membludak sempurna (kapasitas Array habis).</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-blue-600 block mb-1">4. IsEmpty</span>
          <span className="text-gray-600 text-sm">Dugaan validasi jika tidak ada siapa pun di loket pengantre, maka Head dan Tail biasanya diposisikan pada indeks -1.</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="font-bold text-blue-600 block mb-1">5. Clear</span>
          <span className="text-gray-600 text-sm">Membersihkan segala elemen yang berada pada rentang antrean sekaligus.</span>
        </div>
      </div>
    </div>
  ];
  return <SlidePresentation title="Pertemuan 5: Struktur Data Queue" slides={slides} />;
}
