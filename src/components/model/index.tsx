import { defineComponent, ref, Teleport } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ZvModel',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(ctx) {
    const showC = ref(ctx.show)
    return () => {
      return (
        <Teleport to="#model">
          {showC.value ? (
            <div
              onClick={() => {
                showC.value = false
              }}
              class="model-container"
            >
              <p class="text">model</p>
            </div>
          ) : null}
        </Teleport>
      )
    }
  },
})
