view: daily_kpis {
  sql_table_name: marts_daily_kpis ;;

  dimension_group: metric_date {
    type: time
    timeframes: [date, week, month]
    sql: ${TABLE}.metric_date ;;
  }

  measure: new_users {
    type: sum
    sql: ${TABLE}.new_users ;;
  }

  measure: active_users {
    type: sum
    sql: ${TABLE}.active_users ;;
  }

  measure: paid_conversions {
    type: sum
    sql: ${TABLE}.paid_conversions ;;
  }

  measure: net_revenue_usd {
    type: sum
    sql: ${TABLE}.net_revenue_usd ;;
    value_format_name: usd
  }

  measure: conversion_rate {
    type: number
    sql: SUM(${TABLE}.paid_conversions) / NULLIF(SUM(${TABLE}.new_users), 0) ;;
    value_format_name: percent_2
  }

  measure: refund_rate {
    type: number
    sql: SUM(${TABLE}.refunded_usd) / NULLIF(SUM(${TABLE}.gross_revenue_usd), 0) ;;
    value_format_name: percent_2
  }
}
