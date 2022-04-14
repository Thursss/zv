import { defineComponent } from 'vue'
import { Echarts as ZvEchart } from 'zv-lib'
import randomData from '@/utils/random-data'
import './style.scss'
import { EChartsOption } from 'echarts'

export default defineComponent({
  setup() {
    const device = randomData(3, {
      minVal: 80000,
      maxVal: 600000,
      decimals: 0,
      randomTime: 5000,
    })
    return () => {
      const option: EChartsOption = {
        visualMap: {
          show: false,
          min: device.min.value,
          max: device.max.value,
          inRange: {
            colorLightness: [0.3, 0.7],
          },
        },
        series: {
          type: 'pie',
          roseType: 'radius',
          selectedMode: 'single',
          clockwise: true,
          label: {
            show: false,
          },
          itemStyle: {
            color: '#5470c6',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          emphasis: {
            itemStyle: {
              color: '#54b9c6',
            },
          },
          radius: '75%',
          center: ['50%', '50%'],
          data: [
            {
              value: device.data[0].value,
              name: 'Android',
            },
            {
              value: device.data[1].value,
              name: 'ios',
            },
            {
              value: device.data[2].value,
              name: 'pc',
            },
          ],
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          },
        },
      }

      const deviceItem = (value: number, scope: string) => {
        return (
          <div class="device-data">
            <div class="device-data-value">{value}</div>
            <div class="device-data-axis">{scope}</div>
          </div>
        )
      }
      return (
        <div class="total-device-container">
          <div class="total-device-left">
            <ZvEchart options={option} />
          </div>
          <div class="total-device-right">
            <div class="total-device-title-wrapper">
              <div class="text-ground">
                <div class="title-cn">登录设备</div>
                <div class="title-en">Distribution of Internet devices</div>
              </div>
              <div class="device-ground">
                {Math.round(device.sum.value / 10000)}
                <span class="unit">万台</span>
              </div>
            </div>
            <div class="device-data-wrapper">
              {deviceItem(device.data[0]?.value, 'Android')}
              {deviceItem(device.data[1]?.value, 'ios')}
              {deviceItem(device.data[2]?.value, 'pc')}
            </div>
          </div>
        </div>
      )
    }
  },
})
