import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { getOrders } from '../services/api';

const orders = getOrders();

export default function OrdersPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <Link to="/profile" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-800">我的订单</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50 px-6 pt-6">
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{order.course}</h3>
                  <p className="text-slate-400 text-xs font-medium mt-1">{order.package}</p>
                </div>
                <span className={clsx(
                  "text-xs font-bold px-2 py-1 rounded-lg",
                  order.status === 'completed' ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                )}>
                  {order.statusText}
                </span>
              </div>

              <div className="h-px bg-slate-50 my-3"></div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-medium">订单编号</span>
                  <span className="text-slate-600 text-xs font-mono">{order.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-800 font-black text-lg">{order.price}</span>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-slate-400 text-[10px]">{order.date}</span>
                {order.status === 'pending' && (
                  <button className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-slate-900 transition-colors">
                    去支付
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
