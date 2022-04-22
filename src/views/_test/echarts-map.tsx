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
        const cityValus = (data.features as any[]).map((city) => ({
          name: city.properties.name,
          value: parseFloat((Math.random() * 1500 + 500).toFixed(2)),
          // itemStyle: {
          //   areaColor: '#cda',
          // },
        }))
        const center = (data.features as any[]).map((city) => ({
          name: city.properties.name,
          data: parseFloat((Math.random() * 1500 + 500).toFixed(2)),
          value: city.properties.centroid,
          // itemStyle: {
          //   areaColor: '#cda',
          // },
        }))
        option.value = {
          tooltip: {
            trigger: 'item',
            show: true,
            formatter: (prop: any) => {
              return `${prop.data.name} - ${prop.data.value}`
            },
            backgroundColor: '#0000008d',
            borderWidth: 0,
            textStyle: {
              color: '#fff',
            },
          },
          visualMap: {
            type: 'continuous',
            max: 2000,
            min: 500,
            // inRange: { color: ['red', '#ef1', '#222'] },
          },
          geo: {
            map: 'jiangshu',
          },
          series: [
            {
              type: 'map',
              map: 'jiangshu',
              roam: true,
              data: cityValus,
              emphasis: {
                itemStyle: {
                  areaColor: '#ccc',
                },
              },
            },
            {
              type: 'effectScatter',
              data: [center[2]],
              coordinateSystem: 'geo',
              symbolSize: 10,
              label: {
                show: true,
                position: 'top',
                formatter: (prams) => {
                  console.log(prams)

                  return [
                    `{title|${prams.name}}`,
                    // @ts-ignore
                    `{value|${prams.data.data}}`,
                  ].join('\n')
                },
                rich: {
                  title: {
                    color: 'red',
                    lineHeight: 24,
                    fontSize: 18,
                  },
                  value: {
                    fontFamily: 'Microsoft YaHei',
                    borderColor: '#449933',
                    borderRadius: 4,
                  },
                },
                backgroundColor: '#d6ff1dc8',
                padding: [10, 10, 5, 10],
              },
              emphasis: {
                disabled: true,
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
