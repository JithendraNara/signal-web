# Power BI Semantic Model Mapping

## Source Tables
- `daily_kpis`
- `channel_performance`
- `customer_health`
- `experiment_performance`

## Model Design
- `DimDate`: derived from `daily_kpis.metric_date`
- `FactDailyKPI`: grain = day
- `FactChannelPerformance`: grain = acquisition_channel
- `FactExperiment`: grain = experiment_name + variant

## Relationships
- `DimDate[Date]` -> `FactDailyKPI[metric_date]` (1:*).
- `FactDailyKPI` acts as a reference for global KPI cards.

## Core Measures
- Conversion Rate
- Net Revenue
- Refund Rate
- ARPU by Channel
- Experiment Uplift (A vs B)
