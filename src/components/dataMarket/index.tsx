import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption } from 'echarts'
import { Echarts } from 'zv-lib'
import './style.scss'

export default defineComponent({
  setup() {
    const option = ref<EChartsOption>({
      baseOption: {
        timeline: {
          show: false,
          axisType: 'category',
          autoPlay: true,
          loop: true,
          data: ['1990', '1995'],
        },
        title: {
          text: '一',
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
          max: 15000,
        },
        series: [
          {
            type: 'bar',
          },
          {
            type: 'pie',
            radius: '28%',
            center: ['30%', '20%'],
          },
        ],
      },
      options: [
        {
          xAxis: {
            data: ['一', '二', '三', '四'],
          },
          series: [
            {
              data: [1111, 1112, 312, 12324],
            },
            {
              data: [
                {
                  name: '一',
                  value: 10,
                },
                {
                  name: '二',
                  value: 10,
                },
              ],
            },
          ],
        },
        {
          xAxis: {
            data: ['一1', '二2', '三3', '四4'],
          },
          series: [
            {
              data: [123, 455, 6666, 22],
            },
            {
              data: [
                {
                  name: '一',
                  value: 10,
                },
                {
                  name: '二',
                  value: 5,
                },
              ],
            },
          ],
        },
      ],
    }) as Ref<EChartsOption>

    return () => {
      return (
        <div class="market-container">
          <Echarts options={option.value} />
        </div>
      )
    }
  },
})
