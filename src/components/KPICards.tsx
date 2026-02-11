import type { KPIOverview } from "../lib/api";

type Props = {
  data: KPIOverview;
};

export function KPICards({ data }: Props) {
  const rows = [
    ["Date", data.metric_date],
    ["New Users", data.new_users.toLocaleString()],
    ["Active Users", data.active_users.toLocaleString()],
    ["Paid Conversions", data.paid_conversions.toLocaleString()],
    ["Conversion Rate", `${(data.conversion_rate * 100).toFixed(2)}%`],
    ["Net Revenue", `$${data.net_revenue_usd.toFixed(2)}`],
    ["Tickets Opened", data.tickets_opened.toLocaleString()],
  ];

  return (
    <div className="kpi-grid">
      {rows.map(([label, value]) => (
        <article className="kpi-card" key={label}>
          <p className="kpi-label">{label}</p>
          <p className="kpi-value">{value}</p>
        </article>
      ))}
    </div>
  );
}
