import { defineComponent } from 'vue'
import randomData from '@/utils/random-data'
import './style.scss'

export default defineComponent({
  setup() {
    const device = randomData(3, {
      minVal: 2000000,
      maxVal: 3000000,
      decimals: 0,
    })
    return () => {
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
          <div class="total-device-left"></div>
          <div class="total-device-right">
            <div class="total-device-title-wrapper">
              <div class="text-ground">
                <div class="title-cn">登录设备</div>
                <div class="title-en">Distribution of Internet devices</div>
              </div>
              <div class="device-ground">
                6544 <span class="unit">万台</span>
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
