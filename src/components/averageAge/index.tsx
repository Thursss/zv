import { defineComponent } from 'vue'
import randomData from '@/utils/random-data'
import './style.scss'

export default defineComponent({
  setup() {
    const average = randomData(4, { minVal: 30000, maxVal: 100000 })
    return () => {
      const averageItem = (value: number, scope: string) => {
        return (
          <div class="average-data">
            <div class="average-data-value">{value}</div>
            <div class="average-data-axis">{scope}</div>
          </div>
        )
      }
      return (
        <div class="average-age-container">
          <div class="average-title-wrapper">
            <div class="text-ground">
              <div class="title-cn">年龄分布&平均年龄</div>
              <div class="title-en">Distribution of Age</div>
            </div>
            <div class="age-ground">
              26.4 <span class="unit">岁</span>
            </div>
          </div>
          <div class="average-age-chart"></div>
          <div class="average-data-wrapper">
            {averageItem(average[0]?.value, '0 > 20')}
            {averageItem(average[1]?.value, '20 > 30')}
            {averageItem(average[2]?.value, '30 > 50')}
            {averageItem(average[3]?.value, ' < 50')}
          </div>
        </div>
      )
    }
  },
})
