import { defineComponent, ref } from 'vue'
import { ScrollList, ScrollListProps } from 'zv-lib'
import './style.scss'

export default defineComponent({
  setup() {
    const salesListMockData = [
      {
        order: '北京 -10%',
        shop: '北京 -19%',
        rider: '北京 -12%',
        newShop: '北京 -17%',
        avgOrder: '北京 -8%',
      },
      {
        order: '上海 +19%',
        shop: '上海 -7%',
        rider: '上海 +6%',
        newShop: '上海 +7%',
        avgOrder: '上海 +21%',
      },
      {
        order: '广州 -6%',
        shop: '广州 -5%',
        rider: '广州 +23%',
        newShop: '广州 -22%',
        avgOrder: '广州 +12%',
      },
      {
        order: '深圳 -19%',
        shop: '深圳 -14%',
        rider: '深圳 -13%',
        newShop: '深圳 +7%',
        avgOrder: '深圳 -7%',
      },
      {
        order: '南京 -22%',
        shop: '南京 -7%',
        rider: '南京 -7%',
        newShop: '南京 +16%',
        avgOrder: '南京 -8%',
      },
      {
        order: '杭州 +15%',
        shop: '杭州 +9%',
        rider: '杭州 -10%',
        newShop: '杭州 -11%',
        avgOrder: '杭州 +7%',
      },
      {
        order: '合肥 -8%',
        shop: '合肥 -5%',
        rider: '合肥 +9%',
        newShop: '合肥 -7%',
        avgOrder: '合肥 -12%',
      },
      {
        order: '济南 +20%',
        shop: '济南 +8%',
        rider: '济南 +16%',
        newShop: '济南 +3%',
        avgOrder: '济南 -12%',
      },
      {
        order: '太原 +8%',
        shop: '太原 -4%',
        rider: '太原 +5%',
        newShop: '太原 +10%',
        avgOrder: '太原 +25%',
      },
      {
        order: '成都 -7%',
        shop: '成都 +19%',
        rider: '成都 -24%',
        newShop: '成都 +13%',
        avgOrder: '成都 -3%',
      },
      {
        order: '重庆 +4%',
        shop: '重庆 -24%',
        rider: '重庆 +12%',
        newShop: '重庆 +9%',
        avgOrder: '重庆 +4%',
      },
      {
        order: '苏州 +16%',
        shop: '苏州 -8%',
        rider: '苏州 +19%',
        newShop: '苏州 -17%',
        avgOrder: '苏州 -15%',
      },
      {
        order: '无锡 +15%',
        shop: '无锡 +12%',
        rider: '无锡 +20%',
        newShop: '无锡 -13%',
        avgOrder: '无锡 -20%',
      },
      {
        order: '常州 -18%',
        shop: '常州 -19%',
        rider: '常州 +15%',
        newShop: '常州 +5%',
        avgOrder: '常州 +8%',
      },
      {
        order: '温州 -21%',
        shop: '温州 +20%',
        rider: '温州 +8%',
        newShop: '温州 -21%',
        avgOrder: '温州 +11%',
      },
      {
        order: '哈尔滨 -19%',
        shop: '哈尔滨 -17%',
        rider: '哈尔滨 -9%',
        newShop: '哈尔滨 -23%',
        avgOrder: '哈尔滨 +18%',
      },
      {
        order: '长春 -2%',
        shop: '长春 +18%',
        rider: '长春 -20%',
        newShop: '长春 -4%',
        avgOrder: '长春 -24%',
      },
      {
        order: '大连 +22%',
        shop: '大连 -15%',
        rider: '大连 -6%',
        newShop: '大连 -16%',
        avgOrder: '大连 +9%',
      },
      {
        order: '沈阳 -15%',
        shop: '沈阳 -8%',
        rider: '沈阳 -17%',
        newShop: '沈阳 +14%',
        avgOrder: '沈阳 -14%',
      },
      {
        order: '拉萨 -4%',
        shop: '拉萨 -17%',
        rider: '拉萨 -17%',
        newShop: '拉萨 +19%',
        avgOrder: '拉萨 -21%',
      },
      {
        order: '呼和浩特 -10%',
        shop: '呼和浩特 +15%',
        rider: '呼和浩特 +17%',
        newShop: '呼和浩特 +21%',
        avgOrder: '呼和浩特 +11%',
      },
      {
        order: '武汉 +15%',
        shop: '武汉 -12%',
        rider: '武汉 +18%',
        newShop: '武汉 +15%',
        avgOrder: '武汉 -7%',
      },
      {
        order: '南宁 -17%',
        shop: '南宁 -13%',
        rider: '南宁 -23%',
        newShop: '南宁 -13%',
        avgOrder: '南宁 -14%',
      },
    ]
    const config = ref<ScrollListProps>({
      headerData: [
        '',
        '城市订单量',
        '店铺数',
        '接单骑手人数',
        '新店铺数量',
        '人均订单量',
      ],
      headerHeight: 55,
      headerBg: 'rgb(90, 90, 90)',
      headerStyle: [
        {
          width: '80px',
        },
      ],
      rowData: salesListMockData.map((data) => [
        '<div class="point"></div>',
        data.avgOrder,
        data.newShop,
        data.order,
        data.rider,
        data.shop,
      ]),
      rowNum: 12,
      rowBg: ['#4d4d4d', 'rgb(51,51,51)'],
      rowStyle: [
        {
          position: 'relative',
          backgroundColor: 'rgb(51,51,51)',
        },
        {},
        {
          color: '#1dff3b',
        },
        {},
        { color: '#1dff3b' },
        {},
      ],
    })

    return () => {
      return (
        <div class="plan-list">
          <div data-v-3be73dcd="" class="title">
            区域销售大盘环比分析
          </div>
          <div class="list">
            <ScrollList config={config.value} />
          </div>
        </div>
      )
    }
  },
})
