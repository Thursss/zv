import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption, format } from 'echarts'
import { Echarts } from 'zv-lib'
import './style.scss'

export default defineComponent({
  setup() {
    const options = ref<EChartsOption>({}) as Ref<EChartsOption>
    options.value = {
      calendar: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 20,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          color: 'none',
          borderWidth: 0,
          borderColor: '#26dd6c',
        },
        splitLine: {
          lineStyle: {
            color: '#26dd6c',
          },
        },
        yearLabel: {
          show: false,
          color: '#ccc',
        },
        dayLabel: {
          show: true,
          color: '#ccc',
        },
        monthLabel: {
          show: true,
          color: '#ccc',
        },
      },
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          data: [
            ['2016-02-01', Math.floor(Math.random() * 10000)],
            ['2016-02-02', Math.floor(Math.random() * 10000)],
            ['2016-02-03', Math.floor(Math.random() * 10000)],
            ['2016-02-04', Math.floor(Math.random() * 10000)],
            ['2016-03-01', Math.floor(Math.random() * 10000)],
            ['2016-04-02', Math.floor(Math.random() * 10000)],
            ['2016-04-03', Math.floor(Math.random() * 10000)],
            ['2016-05-04', Math.floor(Math.random() * 10000)],
            ['2016-05-01', Math.floor(Math.random() * 10000)],
            ['2016-07-02', Math.floor(Math.random() * 10000)],
            ['2016-07-03', Math.floor(Math.random() * 10000)],
            ['2016-09-04', Math.floor(Math.random() * 10000)],
          ],
          symbolSize: function (val) {
            return val[1] / 500
          },
          itemStyle: {
            color: '#26dd6c',
          },
        },
      ],
    }

    return () => {
      return (
        <div
          class=""
          style={{ width: '99%', height: '99%', border: 'solid 1px #ccc' }}
        >
          <Echarts options={options.value} />
        </div>
      )
    }
  },
})
