view: channel_performance {
  sql_table_name: marts_channel_performance ;;

  dimension: acquisition_channel {
    primary_key: yes
    type: string
    sql: ${TABLE}.acquisition_channel ;;
  }

  measure: signups {
    type: sum
    sql: ${TABLE}.signups ;;
  }

  measure: paying_users {
    type: sum
    sql: ${TABLE}.paying_users ;;
  }

  measure: paid_conversion_rate {
    type: number
    sql: SUM(${TABLE}.paying_users) / NULLIF(SUM(${TABLE}.signups), 0) ;;
    value_format_name: percent_2
  }

  measure: net_revenue_usd {
    type: sum
    sql: ${TABLE}.net_revenue_usd ;;
    value_format_name: usd
  }

  measure: arpu {
    type: average
    sql: ${TABLE}.arpu ;;
    value_format_name: usd
  }
}
