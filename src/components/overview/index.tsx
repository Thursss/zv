import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  setup() {
    return () => {
      return <div class="overview-container">Overview</div>
    }
  },
})
