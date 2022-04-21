import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption, registerMap } from 'echarts'
import { Echarts } from 'zv-lib'

export default defineComponent({
  setup() {
    const option = ref<EChartsOption>({}) as Ref<EChartsOption>

    fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        registerMap('jiangshu', data)
        option.value = {
          tooltip: {
            trigger: 'item',
            show: true,
            formatter: (prop: any) => {
              return `${prop.data.name} - ${prop.data.value}`
            },
          },
          visualMap: {
            type: 'continuous',
            max: 2000,
            min: 500,
            inRange: { color: ['red', '#ef1', '#222'] },
          },
          series: [
            {
              type: 'map',
              map: 'jiangshu',
              roam: true,
              data: (data.features as any[]).map((city) => ({
                name: city.properties.name,
                value: parseFloat((Math.random() * 1500 + 500).toFixed(2)),
                // itemStyle: {
                //   areaColor: '#cda',
                // },
              })),
              // data: [
              //   {
              //     name: '苏州市',
              //     value: Math.random() * 500 + 500,
              //     itemStyle: {
              //       areaColor: '#cda',
              //     },
              //   },
              // ],
              // center: [115.97, 29.71],
              // itemStyle: {
              //   areaColor: 'red',
              //   // color: '#333',
              // },
              emphasis: {
                itemStyle: {
                  areaColor: '#ccc',
                },
              },
            },
          ],
        }
      })

    return () => {
      return (
        <div
          class=""
          style={{ width: '500px', height: '500px', border: 'solid 1px #ccc' }}
        >
          <Echarts options={option.value} />
        </div>
      )
    }
  },
})
