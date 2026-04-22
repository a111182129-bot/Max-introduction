/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Briefcase, 
  Plane, 
  Languages, 
  ChevronRight,
  ExternalLink,
  History,
  PlaneTakeoff,
  Award,
  Video,
  Box,
  Anchor,
  Ship,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
        <span className="font-display font-bold text-xl tracking-tight">王楓鎵 Max</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        {['首頁', '工作經歷', '旅遊規劃', '多媒體作品', '3D作品'].map((item, idx) => {
          const links = ['home', 'experience', 'travel', 'media', 'work3d'];
          return (
            <a key={item} href={`#${links[idx]}`} className="hover:text-blue-600 transition-colors tracking-widest text-sm font-bold">
              {item}
            </a>
          );
        })}
      </div>
      <div className="hidden md:block">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">
          與我聯繫
        </button>
      </div>
    </div>
  </nav>
);

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight">{children}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Content Sections ---

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            航運專業與國際視野
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1]">
            您好，我是 <span className="text-gradient">王楓鎵</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
            國立高雄科技大學 航運管理系畢業。
            熱愛航運事業、專案管理與跨文化溝通。具備卓越的語言能力，致力於在全球化環境中發揮專業影響力。
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#" className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000" 
              alt="Cargo Ship at Sea" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-600/10 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "門市營運夥伴",
      company: "台灣壽司郎 (Akindo Sushiro)",
      period: "2024 - 2025",
      desc: "在快節奏的工作環境中提供卓越的客戶服務，並負責日常營運與現場管理任務。",
      type: "工作經歷"
    },
    {
      title: "台日交流實習",
      company: "大島海事學校實習計畫",
      period: "2025",
      desc: "專注於海運發展與地區文化交流，透過實地考察與研討會增進台日航運合作視野。",
      type: "專業實習"
    },
    {
      title: "御風輪海上實習",
      company: "御風輪兩個禮拜實習計畫",
      period: "2025",
      desc: "參與航海學術交流計畫，深入研究航海儀器與職業環境。",
      type: "學術交流"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Briefcase}>專業職涯與實習</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="flex flex-col border-t-4 border-t-blue-600">
              <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-widest">{exp.type}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{exp.title}</h3>
              <p className="text-sm font-medium text-slate-500 mb-4">{exp.company} • {exp.period}</p>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{exp.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const TravelPlan = () => {
  const [activeDay, setActiveDay] = useState(1);
  const itinerary = [
    { day: 1, title: "抵達京都", items: ["14:30 抵達關西機場 (KIX)", "飯店 Check-in 手續", "祇園與八坂神社漫步", "傳統懷石料理晚餐"] },
    { day: 2, title: "經典京都古蹟巡禮", items: ["清水寺與周邊古道", "三年坂、二年坂散策", "伏見稻荷大社：千本鳥居", "先斗町巷弄美食探索"] },
    { day: 3, title: "嵐山自然與竹林奇景", items: ["嵐山小火車觀光體驗", "嵯峨野竹林小徑", "天龍寺禪意園林", "金閣寺：夕陽下的金色輝煌"] },
    { day: 4, title: "宇治茶香與歸途", items: ["宇治平等院與鳳凰堂", "宇治茶街特色美味", "錦市場最後購物行程", "19:00 前往關西機場搭機"] },
  ];

  return (
    <section id="travel" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Plane}>精選旅遊規劃</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-600 leading-relaxed font-medium">
              我擅長規劃精密的旅遊行程，完美結合文化體驗、邏輯路徑規劃與預算控管。
              以下是為您呈現的「京都四天三夜經典之旅」參考範例。
            </p>
            
            <div className="space-y-3">
              {itinerary.map((item) => (
                <button
                  key={item.day}
                  onClick={() => setActiveDay(item.day)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    activeDay === item.day 
                    ? 'border-blue-600 bg-blue-50/50' 
                    : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-blue-600 mb-1 block tracking-wider">DAY 0{item.day}</span>
                    <span className="font-bold text-slate-900">{item.title}</span>
                  </div>
                  <ChevronRight size={16} className={`${activeDay === item.day ? 'text-blue-600' : 'text-slate-300 group-hover:text-slate-500'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {activeDay}
                  </div>
                  <h3 className="text-xl font-bold font-display">{itinerary[activeDay-1].title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {itinerary[activeDay-1].items.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-slate-600 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 p-6 bg-white rounded-xl border border-blue-100/50">
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Award size={16} className="text-blue-500" />
                    預算估計 (新台幣 TWD)
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-50">
                      <span className="text-slate-500">機票與區域交通</span>
                      <span className="font-bold">約 $22,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-50">
                      <span className="text-slate-500">住宿費用 (三晚合計)</span>
                      <span className="font-bold">約 $12,000</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-500 font-medium">總計預算</span>
                      <span className="font-bold text-blue-600 text-lg">$34,000+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsAndLanguages = () => {
  const languages = [
    { name: "英文 (English)", level: "TOEIC 990", color: "bg-blue-100 text-blue-700", progress: 95 },
    { name: "日文 (Japanese)", level: "JLPT N1", color: "bg-red-100 text-red-700", progress: 90 },
    { name: "韓文 (Korean)", level: "TOPIK I", color: "bg-indigo-100 text-indigo-700", progress: 40 },
    { name: "中文 (Mandarin)", level: "母語能力", color: "bg-teal-100 text-teal-700", progress: 100 },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Languages size={20} />
              </div>
              <h2 className="text-3xl font-display font-bold">語言能力證明</h2>
            </div>
            
            <div className="space-y-8">
              {languages.map((lang, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${lang.color}`}>
                        {lang.name}
                      </span>
                      <span className="text-slate-400 text-sm">{lang.level}</span>
                    </div>
                    <span className="text-slate-300 font-mono text-sm">{lang.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-teal-600 rounded-lg">
                <History size={20} />
              </div>
              <h2 className="text-3xl font-display font-bold">個人成長歷程</h2>
            </div>
            
            <div className="space-y-8 border-l border-slate-800 ml-3 pl-8">
              {[
                { year: '2025', title: '日本大島丸實習計畫', details: '獲選參與鹿兒島大島海運交流實習。' },
                { year: '2022', title: '越南家鄉', details: '回去當保母，見外公外婆。' },
                { year: '2016', title: '台日青少年交流', details: '國小隨校赴日參與日本文化交流訪問。' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 bg-teal-50 rounded-full border-4 border-slate-900 shadow-teal-500/50 shadow-sm" />
                  <span className="text-teal-500 font-bold mb-1 block font-mono">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaSection = () => {
  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Video}>多媒體影音與創作</SectionHeading>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-0 overflow-hidden group">
            <div className="relative aspect-video bg-slate-900">
              <video 
                src="/artifacts/kyoto_travel_video.mp4" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                autoPlay 
                muted 
                loop 
                playsInline
              />
              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
            </div>
            <div className="p-6 text-center">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">航向京都：紀錄短片</h3>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold uppercase">4K 實拍</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                一段與家人同遊京都的溫馨紀錄，捕捉櫻花樹下的珍貴時刻與古都美景。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Work3DSection = () => {
  const works = [
    {
      title: "航運團隊 3D 角色設計",
      image: "/artifacts/works_3d_team_design.png",
      description: "以航運管理背景為基礎，創作充滿活力的海員團隊角色。",
      link: "https://studio.tripo3d.ai/3d-model/5e4f33bc-c0aa-48f7-bdc3-22741d8ea149?invite_code=YC6E7N"
    },
    {
      title: "傳統民族文化角色",
      image: "/artifacts/cultural_character_3d.png",
      description: "結合細緻的民族服飾紋理與現代 3D 建模技術，展現文化底蘊。",
      link: "https://studio.tripo3d.ai/3d-model/11b58a7d-c504-4f73-acb8-8376c26705e6?invite_code=YC6E7N"
    }
  ];

  return (
    <section id="work3d" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Box}>3D 作品創作</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, idx) => (
            <a key={idx} href={work.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-0 overflow-hidden relative border-2 border-transparent group-hover:border-blue-500 transition-all">
                <div className="relative aspect-square md:aspect-video bg-slate-200">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2">
                       查看 3D 模型 <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{work.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">M</div>
        <span className="font-display font-medium text-slate-900">王楓鎵 Max</span>
      </div>
      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} 王楓鎵。致力於航運專業與卓越成就。
      </div>
      <div className="flex gap-6 text-slate-400">
        <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><Youtube size={18} /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <TravelPlan />
        <SkillsAndLanguages />
        <MediaSection />
        <Work3DSection />
      </main>
      <Footer />
    </div>
  );
}
