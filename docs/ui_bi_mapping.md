# UI to BI Semantic Mapping

This document maps React UI components to BI semantic artifacts (Power BI, Tableau, Looker).

| UI Surface | Frontend Source | Metric Fields | Power BI | Tableau | Looker |
|---|---|---|---|---|---|
| KPI Cards | `src/components/KPICards.tsx` | `new_users`, `active_users`, `paid_conversions`, `conversion_rate`, `net_revenue_usd`, `tickets_opened` | `bi/powerbi/semantic_model.md` | `bi/tableau/workbook_mapping.md` (`Daily KPI Trend`) | `bi/looker/views/daily_kpis.view.lkml` |
| Experiment Table | `src/components/ExperimentsTable.tsx` | `users_exposed`, `users_converted`, `conversion_rate`, `avg_revenue_per_user` | `bi/powerbi/kpi_visual_mapping.csv` | `bi/tableau/workbook_mapping.md` (`Experiment Conversion Comparison`) | (future view extension) |
| Alert Evaluation Panel | `src/pages/App.tsx` | `min_conversion_rate`, `max_refund_rate`, `min_net_revenue_usd` | `bi/powerbi/dax_measures.md` (threshold reference) | `bi/tableau/calculated_fields.md` (`Alert Flag`) | `bi/looker/views/daily_kpis.view.lkml` (`conversion_rate`, `refund_rate`) |

## Why This Matters
- Ensures UI metrics match BI definitions across tools.
- Reduces semantic drift when presenting the same KPIs in different platforms.
- Provides a clear handoff artifact for BI teams (Power BI/Tableau/Looker).
