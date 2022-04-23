import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption, registerMap } from 'echarts'
import { Echarts } from 'zv-lib'
import './style.scss'

export default defineComponent({
  setup() {
    const option = ref<EChartsOption>({}) as Ref<EChartsOption>
    const year = ['长春', '长春', '青岛', '青岛', '成都', '成都']

    fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
      .then((res) => res.json())
      .then((data) => {
        registerMap('china', data)

        option.value = {
          baseOption: {
            backgroundColor: '#333',
            xAxis: {
              type: 'value',
              position: 'top',
              axisLine: { show: false },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
            },
            yAxis: {
              type: 'category',
              data: year,
              axisTick: { show: false },
            },

            timeline: {
              data: year,
              axisType: 'category',
              autoPlay: true,
              playInterval: 3000,
              left: '10%',
              right: '5%',
              bottom: '3%',
              width: '80%', //  height: null,
              label: {
                color: '#ddd',
              },
              symbolSize: 10,
              lineStyle: {
                color: '#555',
              },
              checkpointStyle: {
                borderColor: '#777',
                borderWidth: 2,
              },
              controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                color: '#666',
                borderColor: '#666',
              },
              emphasis: {
                controlStyle: {
                  color: '#aaa',
                  borderColor: '#aaa',
                },
                label: {
                  color: '#fff',
                },
              },
            },
            geo: {
              show: true,
              map: 'china',
              roam: true,
              zoom: 0.8,
              left: 0,
              right: '30%',
              // center: [113.83531246, 34.0267395887],
              label: {
                show: false,
              },
              itemStyle: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#389BB7',
                  borderWidth: 0,
                },
                label: {
                  show: false,
                },
              },
              tooltip: {
                show: false,
              },
            },
          },
          options: year.map((city) => ({
            grid: {
              left: '70%',
              right: 30,
              top: '20%',
              bottom: '25%',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  show: true,
                  formatter: 'xx',
                },
              },
              textStyle: {
                color: '#fff',
              },
              backgroundColor: '#00000094',
              borderWidth: 0,
            },
            series: {
              type: 'bar',
              data: year.map((city) => Math.random() * 100),
              itemStyle: {
                color: ['red', '#de1', '#fae', ''][
                  Math.round(Math.random() * 4)
                ],
              },
            },
          })),
        }
      })
    return () => {
      return (
        <div class="market-container">
          <Echarts options={option.value} />
        </div>
      )
    }
  },
})
