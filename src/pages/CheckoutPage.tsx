import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { getPackages } from '../services/api';

const packageList = getPackages();

export default function CheckoutPage() {
  const [selectedPackage, setSelectedPackage] = useState(packageList[0].id);

  const selectedPkg = packageList.find(p => p.id === selectedPackage)!;

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <Link to="/courses" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-800">购课收银台</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-slate-50 px-6 pt-6">
        {/* Selected Info */}
        <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">已选信息</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm font-medium">课程</span>
              <span className="text-slate-800 font-bold">蛙泳 L1 (4-6岁)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm font-medium">场馆</span>
              <span className="text-slate-800 font-bold">上海游泳馆</span>
            </div>
            <div className="h-px bg-slate-100 my-2"></div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm font-medium">学员</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-xs font-bold">N</div>
                <span className="text-slate-800 font-bold">尼莫 (6岁)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <h2 className="text-lg font-extrabold text-slate-800 mb-4 px-1">选择课时包</h2>
        <div className="flex flex-col gap-4">
          {packageList.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={clsx(
                "relative p-5 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden",
                selectedPackage === pkg.id
                  ? "bg-white border-primary shadow-lg shadow-sky-100"
                  : "bg-white border-transparent shadow-sm hover:border-slate-200"
              )}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-0 bg-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-br-xl z-10">
                  {pkg.badge}
                </div>
              )}
              <div className={clsx("flex justify-between items-start mb-2", pkg.badge && "mt-2")}>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-800">{pkg.title}</h3>
                  <p className="text-slate-400 text-xs font-medium">{pkg.validity}</p>
                </div>
                <div className="text-right">
                  <div className="text-primary font-black text-xl">{pkg.price}</div>
                  <div className="text-slate-300 text-xs font-bold line-through">{pkg.originalPrice}</div>
                </div>
              </div>
              {selectedPackage === pkg.id && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl">
                  已选
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 pb-8 z-20">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 font-bold text-sm">应付金额</span>
          <span className="text-2xl font-black text-slate-800">{selectedPkg.price}</span>
        </div>
        <Link to="/booking-confirm" className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200 block text-center text-lg">
          立即支付
        </Link>
      </div>
    </div>
  );
}
