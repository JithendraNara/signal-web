# Tableau Calculated Fields

## KPI Calculations

1. `Conversion Rate %`
```text
SUM([paid_conversions]) / NULLIF(SUM([new_users]), 0)
```

2. `Refund Rate %`
```text
SUM([refunded_usd]) / NULLIF(SUM([gross_revenue_usd]), 0)
```

3. `Net Revenue per Active User`
```text
SUM([net_revenue_usd]) / NULLIF(SUM([active_users]), 0)
```

4. `Alert Flag`
```text
IF [Conversion Rate %] < 0.03
 OR [Refund Rate %] > 0.12
 OR SUM([net_revenue_usd]) < 3000
THEN "Action Required"
ELSE "Healthy"
END
```

5. `Experiment Lift vs Baseline`
```text
([conversion_rate] - WINDOW_MIN([conversion_rate])) / NULLIF(WINDOW_MIN([conversion_rate]), 0)
```

## Notes
- These formulas align with API alert thresholds and frontend KPI presentation.
- Keep numeric formatting consistent with dashboard UI:
- rates as percentages (2 decimals)
- currency as USD (2 decimals)
