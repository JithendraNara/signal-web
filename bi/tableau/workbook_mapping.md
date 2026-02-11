# Tableau Workbook Mapping

## Workbook: Product Analytics Executive Overview

### Data Sources
- `marts_daily_kpis`
- `marts_channel_performance`
- `marts_experiment_performance`

### Worksheets
1. `Daily KPI Trend`
- Source: `marts_daily_kpis`
- X: `metric_date`
- Y: `net_revenue_usd`
- Secondary Y: `conversion_rate`

2. `Channel Revenue Mix`
- Source: `marts_channel_performance`
- Dimension: `acquisition_channel`
- Measures: `net_revenue_usd`, `paid_conversion_rate`, `arpu`

3. `Experiment Conversion Comparison`
- Source: `marts_experiment_performance`
- Dimensions: `experiment_name`, `experiment_variant`
- Measures: `users_exposed`, `users_converted`, `conversion_rate`

4. `Reliability Monitor`
- Source: `marts_daily_kpis`
- Measures: `refund_rate`, `tickets_opened`
- Purpose: map to alert thresholds in backend service

### Dashboard Composition
- Top row: KPI tiles (`net_revenue_usd`, `conversion_rate`, `active_users`)
- Middle row: trend and channel sheets
- Bottom row: experiment and reliability sheets

### Filters
- Date range (`metric_date`)
- Channel (`acquisition_channel`)
- Experiment (`experiment_name`)
