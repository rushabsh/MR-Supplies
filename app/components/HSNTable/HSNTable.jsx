const hsnData = [
  {
    code: "2710",
    desc: "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included, containing by weight 70% or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations other than those containing biodiesel and other than waste oils",
  },
  {
    code: "27101990",
    desc: "Other petroleum oils or oils obtained from bituminous minerals, other than crude; preparations not elsewhere specified or included",
  },
  {
    code: "2713",
    desc: "Petroleum coke, petroleum bitumen and other residues of petroleum oils or of oils obtained from bituminous minerals",
  },
  {
    code: "2803",
    desc: "Carbon (carbon blacks and other forms of carbon not elsewhere specified or included)",
  },
  {
    code: "7204",
    desc: "Ferrous waste and scrap; remelting scrap ingots of iron or steel",
  },
];

export default function HSNTable() {
  return (
    <section className="py-[35px] pb-[30px] sm:py-[60px] sm:pb-[50px] bg-white">
      <div className="container">
        <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— HSN CODE</span>
        <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] mb-4 sm:mb-6">Deals in HSN Code</h2>

        <div className="rounded-lg overflow-x-auto border border-[#e0e0e0] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr>
                <th className="bg-[#2b3643] text-white text-[13px] font-extrabold py-3.5 px-5 text-left w-[140px]">HSN Code</th>
                <th className="bg-[#2b3643] text-white text-[13px] font-extrabold py-3.5 px-5 text-left">HSN Description</th>
              </tr>
            </thead>
            <tbody>
              {hsnData.map((row, i) => (
                <tr key={row.code} className={`${i % 2 === 1 ? "bg-[#fbfbfb]" : "bg-white"} hover:bg-[#fdfaf3] transition-colors`}>
                  <td className="py-3 px-5 text-[13px] font-extrabold text-[#111111] border-t border-[#eeeeee] whitespace-nowrap align-top">{row.code}</td>
                  <td className="py-3 px-5 text-[12.5px] text-[#555555] leading-[1.55] border-t border-[#eeeeee]">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
