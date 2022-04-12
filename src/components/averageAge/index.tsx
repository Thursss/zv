import { defineComponent } from 'vue'
import { EChartsOption } from 'echarts'
import { Echarts as ZvEchart, utils } from 'zv-lib'
import randomData from '@/utils/random-data'
import './style.scss'

export default defineComponent({
  setup() {
    const average = randomData(4, { minVal: 30000, maxVal: 100000 })
    return () => {
      const option: EChartsOption = {
        xAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          max: average.sum.value,
          offset: 15,
        },
        yAxis: {
          show: false,
          // axisLine: {
          //   show: false,
          // },
          // axisTick: {
          //   show: false,
          // },
          type: 'category',
        },
        grid: {
          left: 0,
          right: 0,
          top: 50,
          bottom: 50,
        },
        series: [
          {
            name: '0 > 20',
            type: 'bar',
            color: '#eda',
            stack: 'total',
            barWidth: 25,
            data: [average.data[0]?.value],
          },
          {
            name: '20 > 30',
            type: 'bar',
            color: '#bfeeaa',
            stack: 'total',
            barWidth: 25,
            data: [average.data[1]?.value],
          },
          {
            name: '30 > 50',
            type: 'bar',
            color: '#aacdee',
            stack: 'total',
            barWidth: 25,
            data: [average.data[2]?.value],
          },
          {
            name: ' < 50',
            type: 'bar',
            color: '#eeaae5',
            stack: 'total',
            barWidth: 25,
            data: [average.data[3]?.value],
          },
        ],
      }

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
          <div class="average-age-chart">
            <ZvEchart options={option} />
          </div>
          <div class="average-data-wrapper">
            {averageItem(average.data[0]?.value, '0 > 20')}
            {averageItem(average.data[1]?.value, '20 > 30')}
            {averageItem(average.data[2]?.value, '30 > 50')}
            {averageItem(average.data[3]?.value, ' < 50')}
          </div>
        </div>
      )
    }
  },
})
