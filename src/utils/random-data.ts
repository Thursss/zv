import { onMounted, onUnmounted, Ref, ref } from 'vue'

const randomData = (
  quantity = 5,
  {
    minVal = 0,
    maxVal = 10000,
    decimals = 2,
    randomTime = 1500,
  }: {
    maxVal?: number
    minVal?: number
    decimals?: number
    randomTime?: number
  } = {}
) => {
  let timeHandler: number
  const randomData: Ref<number>[] = []
  const sum = ref(0)
  const min = ref(0)
  const max = ref(0)

  const creatData = () => {
    sum.value = 0
    min.value = maxVal
    max.value = minVal
    for (let i = 0; i < quantity; i++) {
      const random = parseFloat(
        (minVal + Math.random() * (maxVal - minVal)).toFixed(decimals)
      )
      if (randomData[i]) randomData[i].value = random
      randomData[i] = ref(random)
      sum.value += random
      if (random > max.value) max.value = random
      if (random < min.value) min.value = random
    }
  }

  creatData()
  onMounted(() => {
    timeHandler = setInterval(() => {
      creatData()
    }, randomTime)
  })

  onUnmounted(() => {
    clearTimeout(timeHandler)
  })
  return { data: randomData, sum, min, max }
}

export default randomData  
