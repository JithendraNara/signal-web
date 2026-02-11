# Proof Map

| ID | Claim | Evidence | Metric |
|---|---|---|---|
| W1 | Built a frontend analytics console consuming backend APIs. | `src/lib/api.ts`, `src/pages/App.tsx` | 3 API integrations (KPI, experiments, alerts) |
| W2 | Implemented responsive dashboard UI for KPI and experiments. | `src/components/KPICards.tsx`, `src/components/ExperimentsTable.tsx` | Adaptive layout with table and KPI cards |
| W3 | Added UX flow for threshold-based alert checks. | `src/pages/App.tsx` | User-triggered alert evaluation workflow |
| W4 | Added Power BI semantic-model and DAX mapping assets tied to dashboard KPIs. | `bi/powerbi/*` | Reusable BI definitions for key KPI measures and visuals |
| W5 | Added Tableau and Looker semantic assets aligned to dashboard metrics and marts. | `bi/tableau/*`, `bi/looker/*`, `docs/ui_bi_mapping.md` | Cross-BI mapping for KPI cards, experiment tables, and alert checks |
