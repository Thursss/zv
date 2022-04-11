import { defineComponent } from 'vue'
import { Progress } from 'zv-lib'
import randomData from '@/utils/random-data'
import './style.scss'

export default defineComponent({
  setup() {
    const totalData = randomData(1, {
      minVal: 5000,
      decimals: 0,
      randomTime: 3000,
    })
    const growthRateData = randomData(2, { maxVal: 300, randomTime: 1000 })
    const percentData = randomData(2, { maxVal: 100, decimals: 0 })
    return () => {
      return (
        <div class="total-user">
          <div class="title">xxxxxx用户总数</div>
          <div class="sub-title">User Total Count</div>
          <div class="total">{totalData[0]?.value}</div>
          <div class="percent-text">
            <span class="percent-text-1">
              每日增长率: <span>{growthRateData[0]?.value}</span>%
            </span>
            <span class="percent-text-2">
              每月增长率: <span>{growthRateData[1]?.value}</span>%
            </span>
          </div>
          <div class="progress">
            <Progress percent={85} strokeWidth={8} />
          </div>
        </div>
      )
    }
  },
})
