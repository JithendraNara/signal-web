export type KPIOverview = {
  metric_date: string;
  new_users: number;
  active_users: number;
  paid_conversions: number;
  conversion_rate: number;
  net_revenue_usd: number;
  tickets_opened: number;
};

export type ExperimentRow = {
  experiment_name: string;
  experiment_variant: string;
  users_exposed: number;
  users_converted: number;
  conversion_rate: number;
  avg_revenue_per_user: number;
};

const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";

export async function fetchKPIOverview(): Promise<KPIOverview> {
  const res = await fetch(`${API_BASE}/v1/kpis/overview`);
  if (!res.ok) throw new Error(`failed to fetch kpi overview (${res.status})`);
  return res.json();
}

export async function fetchExperiments(): Promise<ExperimentRow[]> {
  const res = await fetch(`${API_BASE}/v1/experiments`);
  if (!res.ok) throw new Error(`failed to fetch experiments (${res.status})`);
  const body = await res.json();
  return body.items ?? [];
}

export async function evaluateAlerts(payload: {
  min_conversion_rate: number;
  max_refund_rate: number;
  min_net_revenue_usd: number;
}): Promise<{ metric_date: string; severity: string; alerts: string[] }> {
  const res = await fetch(`${API_BASE}/v1/alerts/evaluate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`failed to evaluate alerts (${res.status})`);
  return res.json();
}
