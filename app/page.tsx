'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Code, Search, ShieldCheck, CheckCircle, PlaySquare, FileText, Menu, X, Rocket, HomeIcon, FolderOpen, ChevronRight, ChevronDown, ChevronUp, Layers, Users, Zap, ListOrdered, GitMerge, BookCheck } from 'lucide-react';
import Pertemuan1 from '@/components/Pertemuan1';
import Pertemuan2 from '@/components/Pertemuan2';
import Pertemuan3 from '@/components/Pertemuan3';
import Pertemuan4 from '@/components/Pertemuan4';
import Pertemuan5 from '@/components/Pertemuan5';
import Pertemuan6 from '@/components/Pertemuan6';
import Pertemuan78 from '@/components/Pertemuan78';
import Bab2Pertemuan1 from '@/components/Bab2Pertemuan1';
import Bab2Pertemuan2 from '@/components/Bab2Pertemuan2';
import Bab2Pertemuan3 from '@/components/Bab2Pertemuan3';
import Bab2Pertemuan4 from '@/components/Bab2Pertemuan4';
import Bab2Pertemuan5 from '@/components/Bab2Pertemuan5';
import Bab2Pertemuan6 from '@/components/Bab2Pertemuan6';

const chapters = [
  {
    id: 'bab1',
    title: 'BAB 1',
    subtitle: 'Analisis Data',
    description: 'Mempelajari pencarian lanjut, web scraping, dan validasi data.',
    color: 'bg-blue-600',
    modules: [
      { id: 1, title: 'Pertemuan 1', subtitle: 'Pencarian Lanjut', icon: Search },
      { id: 2, title: 'Pertemuan 2', subtitle: 'Colab & Tipe Data', icon: Code },
      { id: 3, title: 'Pertemuan 3', subtitle: 'Logika Dasar', icon: PlaySquare },
      { id: 4, title: 'Pertemuan 4', subtitle: 'Web Scraping', icon: FileText },
      { id: 5, title: 'Pertemuan 5', subtitle: 'Ekosistem Fakta', icon: ShieldCheck },
      { id: 6, title: 'Pertemuan 6', subtitle: 'Validitas CRAAP', icon: CheckCircle },
      { id: 7, title: 'Pertemuan 7 & 8', subtitle: 'Proyek & Asesmen', icon: Book },
    ]
  },
  {
    id: 'bab2',
    title: 'BAB 2',
    subtitle: 'Algoritma dan Struktur Data',
    description: 'Mempelajari pengurutan data, larik, stack, dan queue dalam berpikir komputasional.',
    color: 'bg-indigo-600',
    modules: [
      { id: 8, title: 'Pertemuan 1', subtitle: 'Larik & Pengurutan', icon: ListOrdered },
      { id: 9, title: 'Pertemuan 2', subtitle: 'Merge Sort', icon: GitMerge },
      { id: 10, title: 'Pertemuan 3', subtitle: 'Quick Sort', icon: Zap },
      { id: 11, title: 'Pertemuan 4', subtitle: 'Stack (Tumpukan)', icon: Layers },
      { id: 12, title: 'Pertemuan 5', subtitle: 'Queue (Antrean)', icon: Users },
      { id: 13, title: 'Pertemuan 6', subtitle: 'Asesmen Sumatif', icon: BookCheck },
    ]
  }
];

export default function Home() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? []
        : [chapterId]
    );
  };

  const handleStartChapter = (chapter: typeof chapters[0]) => {
    setActiveId(chapter.modules[0].id);
    setExpandedChapters([chapter.id]);
  };

  const ActiveComponent = activeId ? {
    1: Pertemuan1,
    2: Pertemuan2,
    3: Pertemuan3,
    4: Pertemuan4,
    5: Pertemuan5,
    6: Pertemuan6,
    7: Pertemuan78,
    8: Bab2Pertemuan1,
    9: Bab2Pertemuan2,
    10: Bab2Pertemuan3,
    11: Bab2Pertemuan4,
    12: Bab2Pertemuan5,
    13: Bab2Pertemuan6,
  }[activeId] : null;

  return (
    <div className="h-[100dvh] bg-slate-50 flex flex-col md:flex-row font-sans selection:bg-blue-200">
      
      {activeId !== null && (
        <>
          {/* Mobile Header */}
          <div className="md:hidden bg-blue-700 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-200" />
              <h1 className="text-lg font-bold tracking-tight">Informatika</h1>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-blue-800 rounded-lg">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Primary Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-out flex flex-col shadow-2xl md:shadow-none
            md:relative md:translate-x-0 h-screen
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="p-6 border-b border-gray-100 hidden md:flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                 <Rocket size={20} />
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900 tracking-tight">Informatika</h1>
                <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mt-0.5">Kelas X</p>
              </div>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
              <div className="space-y-1">
                <button
                  onClick={() => { setActiveId(null); setIsMobileMenuOpen(false); }}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-4 group ${
                    activeId === null
                      ? 'bg-blue-600 shadow-md shadow-blue-600/20 translate-x-1' 
                      : 'hover:bg-slate-100 bg-transparent'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${activeId === null ? 'bg-white/20 text-white' : 'bg-white text-gray-400 group-hover:text-blue-600 shadow-sm border border-gray-100'}`}>
                    <HomeIcon size={18} strokeWidth={activeId === null ? 2.5 : 2} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold transition-colors ${activeId === null ? 'text-white' : 'text-gray-700 group-hover:text-blue-700'}`}>Beranda</p>
                    <p className={`text-xs mt-0.5 transition-colors ${activeId === null ? 'text-blue-100' : 'text-gray-500'}`}>Pilih Materi Pembelajaran</p>
                  </div>
                </button>
              </div>

              {chapters
                .filter((chapter) => chapter.modules.some((mod) => mod.id === activeId))
                .map((chapter) => {
                const isExpanded = expandedChapters.includes(chapter.id);
                return (
                  <div key={chapter.id} className="space-y-1">
                    <button 
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2 hover:text-gray-700 transition-colors"
                    >
                      <span>{chapter.title}: {chapter.subtitle}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    
                    {isExpanded && (
                      <div className="space-y-1">
                        {chapter.modules.map((mod) => {
                          const isActive = activeId === mod.id;
                          return (
                            <button
                              key={mod.id}
                              onClick={() => { setActiveId(mod.id); setIsMobileMenuOpen(false); }}
                              className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-4 group ${
                                isActive 
                                  ? 'bg-blue-600 shadow-md shadow-blue-600/20 translate-x-1' 
                                  : 'hover:bg-slate-100 bg-transparent'
                              }`}
                            >
                              <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-white text-gray-400 group-hover:text-blue-600 shadow-sm border border-gray-100'}`}>
                                <mod.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                              </div>
                              <div>
                                <p className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-blue-700'}`}>{mod.title}</p>
                                <p className={`text-xs mt-0.5 transition-colors ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>{mod.subtitle}</p>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Overlay mobile */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </>
      )}

      {/* Main Canvas Area */}
      <main className={`flex-1 mx-auto w-full p-2 md:p-8 flex flex-col min-h-0 overflow-hidden ${activeId === null ? 'max-w-5xl justify-center h-[100dvh]' : 'max-w-6xl'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId || 'home'}
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full flex-1 flex flex-col min-h-0"
          >
            {activeId === null ? (
              <div className="flex-1 w-full bg-white rounded-3xl border border-gray-200 shadow-xl overflow-y-auto p-8 md:p-12 mt-2 md:mt-0 font-sans">
                <div className="max-w-3xl mx-auto">
                  <header className="mb-12">
                     <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Selamat Datang</h2>
                     <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Ryuga Avicenna Dev</h2>
                     <p className="text-lg text-slate-500 font-medium">Pilih bab materi pembelajaran Informatika semester 1 yang ingin dipelajari hari ini.</p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {chapters.map((chapter) => (
                       <button 
                         key={chapter.id}
                         onClick={() => handleStartChapter(chapter)}
                         className="group flex flex-col text-left bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:bg-blue-50 hover:border-blue-200 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100"
                       >
                         <div className={`w-14 h-14 ${chapter.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/30`}>
                           <FolderOpen size={28} strokeWidth={2.5} />
                         </div>
                         <h3 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-1">{chapter.title}</h3>
                         <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{chapter.subtitle}</h4>
                         <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-1">
                           {chapter.description}
                         </p>
                         <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 mt-auto">
                           Mulai Belajar <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                         </div>
                       </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              ActiveComponent && <ActiveComponent />
            )}
          </motion.div>
        </AnimatePresence>
        
        <footer className="mt-2 md:mt-4 text-center text-xs font-medium text-slate-400 shrink-0">
          Ryuga Avicenna &copy; 2026 All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
