import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption } from 'echarts'
import { Echarts } from 'zv-lib'

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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
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

    option.value = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            position: 'top',
          },
        },
      },
      xAxis: {
        type: 'category',
        data: [
          '2016-1',
          '2016-2',
          '2016-3',
          '2016-4',
          '2016-5',
          '2016-6',
          '2016-7',
          '2016-8',
          '2016-9',
          '2016-10',
          '2016-11',
          '2016-12',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
      ],
    }
    return () => {
      return (
        <div
          class="market-container"
          style={{ width: '600px', height: '500px' }}
        >
          <Echarts options={option.value} />
        </div>
      )
    }
  },
})
