import { defineComponent, Ref, ref } from 'vue'
import { EChartsOption } from 'echarts'
import 'echarts-gl'
import { Echarts } from 'zv-lib'

const ROOT_PATH = '../'

export default defineComponent({
  setup() {
    const options = ref<EChartsOption>({}) as Ref<EChartsOption>
    options.value = {
      globe: {
        show: true,
        baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
        heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
        environment: `${ROOT_PATH}assets/star-bg.jpg`,
        displacementScale: 0.03,
        shading: 'realistic',
      },
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
