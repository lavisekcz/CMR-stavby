import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const zakazky = [
  { name: "Miles dental", price: 5600000 },
  { name: "Testovací jan", price: 492653 },
];

const faktury = [
  { name: "Faktura 001", castka: 300000 },
  { name: "Faktura 002", castka: 150000 },
];

const rozpocet = [
  { kategorie: "Materiál", castka: 200000 },
  { kategorie: "Práce", castka: 180000 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Stavební projektový dashboard</h1>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontWeight: 'bold' }}>Zakázky</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={zakazky}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontWeight: 'bold' }}>Faktury</h2>
        <ul>
          {faktury.map((f, i) => (
            <li key={i}>{f.name} – {f.castka.toLocaleString()} Kč</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 style={{ fontWeight: 'bold' }}>Rozpočet</h2>
        <ul>
          {rozpocet.map((r, i) => (
            <li key={i}>{r.kategorie} – {r.castka.toLocaleString()} Kč</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
