# DAX Measure Reference

```DAX
New Users = SUM(FactDailyKPI[new_users])
```

```DAX
Paid Conversions = SUM(FactDailyKPI[paid_conversions])
```

```DAX
Conversion Rate = DIVIDE([Paid Conversions], [New Users], 0)
```

```DAX
Net Revenue USD = SUM(FactDailyKPI[net_revenue_usd])
```

```DAX
Refund Rate = DIVIDE(SUM(FactDailyKPI[refunded_usd]), SUM(FactDailyKPI[gross_revenue_usd]), 0)
```

```DAX
ARPU = DIVIDE(SUM(FactChannelPerformance[net_revenue_usd]), SUM(FactChannelPerformance[signups]), 0)
```
