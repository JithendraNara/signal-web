import { useEffect, useMemo, useState } from "react";

import { ExperimentsTable } from "../components/ExperimentsTable";
import { KPICards } from "../components/KPICards";
import {
  evaluateAlerts,
  fetchExperiments,
  fetchKPIOverview,
  type ExperimentRow,
  type KPIOverview,
} from "../lib/api";

const defaultRules = {
  min_conversion_rate: 0.03,
  max_refund_rate: 0.12,
  min_net_revenue_usd: 3000,
};

export function App() {
  const [kpi, setKpi] = useState<KPIOverview | null>(null);
  const [experiments, setExperiments] = useState<ExperimentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const [kpiData, experimentRows] = await Promise.all([
          fetchKPIOverview(),
          fetchExperiments(),
        ]);
        setKpi(kpiData);
        setExperiments(experimentRows);
      } catch (err) {
        setError(err instanceof Error ? err.message : "unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const title = useMemo(() => {
    if (!kpi) return "Signal Analytics Console";
    return `Signal Analytics Console - ${kpi.metric_date}`;
  }, [kpi]);

  async function runAlertEvaluation() {
    try {
      const result = await evaluateAlerts(defaultRules);
      const details = result.alerts.length ? result.alerts.join(" | ") : "No alerts triggered";
      setAlertMessage(`${result.severity.toUpperCase()} - ${details}`);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : "failed to evaluate alerts");
    }
  }

  return (
    <main className="page">
      <header className="hero">
        <h1>{title}</h1>
        <p>Role-targeted frontend demo consuming the analytics backend.</p>
      </header>

      {loading && <p>Loading dashboard...</p>}
      {error && <p className="error">{error}</p>}

      {kpi && <KPICards data={kpi} />}

      <section className="panel">
        <div className="panel-header">
          <h2>Alert Evaluation</h2>
          <button onClick={runAlertEvaluation}>Run Alert Check</button>
        </div>
        {alertMessage && <p className="alert-output">{alertMessage}</p>}
      </section>

      <section className="panel">
        <h2>Experiment Performance</h2>
        <ExperimentsTable rows={experiments} />
      </section>
    </main>
  );
}
