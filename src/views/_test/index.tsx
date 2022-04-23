import { defineComponent } from 'vue'
import DataMarket from '@/components/dataMarket'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div style={{ width: '99%', height: '99%', border: 'solid 1px #ccc' }}>
          <DataMarket />
        </div>
      )
    }
  },
})
