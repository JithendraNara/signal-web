connection: "analytics_warehouse"

include: "/views/*.view.lkml"

explore: daily_kpis {
  label: "Daily KPI Overview"
  description: "Primary explore for KPI cards and reliability checks."
}

explore: channel_performance {
  label: "Channel Performance"
  description: "Explore for channel revenue and conversion monitoring."
}
