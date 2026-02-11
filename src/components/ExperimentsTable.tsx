import type { ExperimentRow } from "../lib/api";

type Props = {
  rows: ExperimentRow[];
};

export function ExperimentsTable({ rows }: Props) {
  if (!rows.length) {
    return <p className="empty">No experiment rows found.</p>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Experiment</th>
            <th>Variant</th>
            <th>Exposed</th>
            <th>Converted</th>
            <th>Conversion Rate</th>
            <th>Avg Revenue/User</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={`${r.experiment_name}-${r.experiment_variant}-${idx}`}>
              <td>{r.experiment_name}</td>
              <td>{r.experiment_variant}</td>
              <td>{r.users_exposed}</td>
              <td>{r.users_converted}</td>
              <td>{(r.conversion_rate * 100).toFixed(2)}%</td>
              <td>${Number(r.avg_revenue_per_user).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
