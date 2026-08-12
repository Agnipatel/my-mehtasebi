'use client';

import React, { useState } from 'react';

export default function PastRecommendations() {
  const [filter, setFilter] = useState('All');

  const recommendations = [
    {
      id: 1,
      company: 'Carysil',
      sector: 'Building Materials',
      initiated: 'Sep 2011',
      price: '₹16',
      status: 'OPEN',
    },
    {
      id: 2,
      company: 'Cera Sanitaryware',
      sector: 'Building Materials',
      initiated: 'Oct 2011',
      price: '₹195',
      status: 'CLOSED',
    },
    // Add more sample data here if needed to make it look full
    {
      id: 3,
      company: 'Astral Poly Technik',
      sector: 'Pipes & Fittings',
      initiated: 'Jan 2013',
      price: '₹34',
      status: 'CLOSED',
    },
    {
      id: 4,
      company: 'Pidilite Industries',
      sector: 'Chemicals',
      initiated: 'Mar 2014',
      price: '₹280',
      status: 'OPEN',
    }
  ];

  const filteredRecommendations = filter === 'All'
    ? recommendations
    : recommendations.filter(rec => rec.status === filter.toUpperCase());

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            Past Recommendations (Illustrative Only)
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-6">
          <div>
            <div className="text-gold font-bold tracking-widest text-xs uppercase mb-2">Archive</div>
            <h3 className="text-3xl font-extrabold text-black">33 Sample Reports</h3>
          </div>

          <div className="flex bg-white rounded-lg border border-slate-200 p-1 mt-4 md:mt-0 shadow-sm">
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${filter === 'All' ? 'bg-white text-black' : 'text-slate-700 hover:bg-white'}`}
            >
            All (33)
          </button>
          <button
            onClick={() => setFilter('Open')}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${filter === 'Open' ? 'bg-white text-black' : 'text-slate-700 hover:bg-white'}`}
            >
          Open
        </button>
        <button
          onClick={() => setFilter('Closed')}
          className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${filter === 'Closed' ? 'bg-white text-black' : 'text-slate-700 hover:bg-white'}`}
            >
        Closed
      </button>
    </div>
        </div >

    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse min-w-max">
        <thead>
          <tr className="bg-white text-black text-xs uppercase tracking-wider">
            <th className="p-4 font-semibold rounded-tl-xl">Company</th>
            <th className="p-4 font-semibold">Sector</th>
            <th className="p-4 font-semibold">Initiated</th>
            <th className="p-4 font-semibold">Price</th>
            <th className="p-4 font-semibold">Status</th>
            <th className="p-4 font-semibold">Current Rating</th>
            <th className="p-4 font-semibold rounded-tr-xl text-center">Report</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-800">
          {filteredRecommendations.map((rec) => (
                <tr key={rec.id} className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-black">{rec.company}</td>
                  <td className="p-4 text-slate-700">{rec.sector}</td>
                  <td className="p-4 text-slate-700">{rec.initiated}</td>
                  <td className="p-4 font-bold text-black">{rec.price}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                      rec.status === 'OPEN' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      {rec.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-gold font-semibold text-sm hover:bg-gold/10 transition-colors shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      Subscribe to see
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <a href="/sample-report.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-lg text-black font-bold text-sm hover:bg-gold/20 transition-colors">
                      <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      Read PDF
                    </a>
                  </td>
                </tr>
              ))}
      </tbody>
    </table>
        </div >
      </div >
    </section >
  );
}
