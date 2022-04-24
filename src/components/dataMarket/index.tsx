import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption, registerMap } from 'echarts'
import { Echarts } from 'zv-lib'
import './style.scss'

const fc = (count: number) => {
  const str = count.toString()
  const [p, f] = str.split('.')
  let fcCound = count
  if (!f) {
    fcCound = parseFloat(p) / Math.pow(10, p.length - 1)
  }
  return fcCound
}

export default defineComponent({
  setup() {
    const option = ref<EChartsOption>({}) as Ref<EChartsOption>
    const year = [
      '江苏',
      '黑龙江',
      '内蒙古',
      '吉林',
      '北京市',
      '辽宁',
      '河北',
      '天津',
      '山西',
      '陕西',
      '甘肃',
      '宁夏',
      '青海',
      '新疆',
      '四川',
      '重庆',
      '山东',
      '河南',
      '安徽',
      '湖北',
      '浙江',
      '福建',
      '江西',
      '湖南',
      '贵州',
      '云南',
      '广东',
      '广西',
      '海南',
      '上海',
    ]

    fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
      .then((res) => res.json())
      .then((data) => {
        registerMap('china', data)
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
          value: city.properties.cp,
          // itemStyle: {
          //   areaColor: '#cda',
          // },
        }))
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
              axisTick: { show: false, alignWithLabel: true },
            },

            timeline: {
              data: year,
              axisType: 'category',
              autoPlay: true,
              playInterval: 5000,
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
              bottom: 100,
              top: 0,
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
            series: [
              {
                type: 'map',
                map: 'china',
                roam: true,
                data: cityValus,
              },
            ],
          },
          options: year.map((city) => {
            const color = ['red', '#de1', '#fae'][Math.round(Math.random() * 4)]
            const lineCenter = Math.round(Math.random() * 20)
            return {
              grid: {
                left: '70%',
                right: 90,
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
              series: [
                {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: [...center],
                  symbolSize: (val, params: any) => {
                    return params.data.data / 100
                  },
                  itemStyle: {
                    color: color,
                  },
                },
                {
                  type: 'lines',
                  zlevel: 15,
                  effect: {
                    show: true,
                    period: 5,
                    trailLength: 0.2,
                    symbol: 'circle',
                    color: color,
                    symbolSize: 2,
                  },
                  lineStyle: {
                    width: 0.1,
                    opacity: 0.6,
                    curveness: 0.2,
                    color: color,
                  },
                  data: center.map((city) => ({
                    coords: [city.value, center[lineCenter].value],
                  })),
                },
                {
                  type: 'bar',
                  data: year.map((city) => Math.random() * 100),
                  itemStyle: {
                    color: color,
                  },
                },
              ],
            }
          }),
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
