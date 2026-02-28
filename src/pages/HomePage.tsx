import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { getHomeCards, getHomeFilters, getVenues } from '../services/api';

const cards = getHomeCards();
const filters = getHomeFilters();
const venueList = getVenues();

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="flex-1 flex flex-col h-full relative bg-slate-50">
      <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[250px] h-[250px] bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <header className="flex flex-col items-center pt-12 pb-4 z-50 px-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">YoPool</h1>

        <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar w-full snap-x justify-start">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                "snap-start shrink-0 h-9 px-5 rounded-full text-sm font-bold transition-all duration-300",
                activeFilter === filter
                  ? "bg-slate-800 text-white shadow-lg shadow-slate-200 scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar pb-24 z-10">
        {/* Course Carousel - Stacked Effect Simulation */}
        <div className="flex-1 flex items-center justify-center py-4 relative">
          <div className="flex overflow-x-auto gap-4 no-scrollbar snap-x snap-mandatory px-8 w-full h-full items-center pb-8">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={clsx(
                  "snap-center shrink-0 w-[280px] h-[400px] relative rounded-[2.5rem] overflow-hidden group transition-transform duration-300 bg-white",
                  i === 0
                    ? "shadow-2xl shadow-sky-200/50 hover:-translate-y-2"
                    : "shadow-xl shadow-sky-100 scale-95 opacity-90"
                )}
              >
                <img alt={card.title} className="absolute inset-0 w-full h-full object-cover" src={card.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <h3 className="text-3xl font-extrabold text-white mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm font-medium bg-white/20 backdrop-blur-md py-1 px-3 rounded-lg inline-block">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venues List */}
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-extrabold text-slate-800">教学泳馆</h2>
            <Link to="/courses" className="text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors">查看全部</Link>
          </div>
          <div className="flex overflow-x-auto gap-4 no-scrollbar snap-x snap-mandatory pb-4">
            {venueList.map((venue, i) => (
              <div key={i} className="snap-start shrink-0 w-32 h-32 relative rounded-2xl overflow-hidden shadow-md">
                <img src={venue.img} alt={venue.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-bold truncate">{venue.name}</p>
                  <p className="text-white/80 text-[10px]">{venue.dist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

