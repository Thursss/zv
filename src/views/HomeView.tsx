import { defineComponent, ref } from 'vue'
import { createUseStyles } from 'vue-jss'
import { Loading, Container, Icon, FlyBox, FocusCarousel } from 'zv-lib'
import ScreenHeader from '@/components/header'
import TotalUser from '@/components/totalUser'
import AverageAge from '@/components/averageAge'
import TotalDevice from '@/components/totalDevice'
import TotalGender from '@/components/totalGender'
import Overview from '@/components/overview'
import BestSellingCategory from '@/components/bestSellingCategory'
import PlanList from '@/components/planList'
import DataMarket from '@/components/dataMarket'
import ScheduleView from '@/components/scheduleView'
import Model from '@/components/model'
import '@/styles/HomeView.scss'

export const useStyles = createUseStyles({
  'screen-container': {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#241f20',
    '& .header': {
      width: '100%',
      height: '169px',
      paddingTop: '10px',
      background: '#241f20',
      borderBottom: '10px solid #5c5859',
    },
    '& .main': {
      position: 'absolute',
      top: '189px',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flex: 1,
      '& .left': {
        width: '860px',
        flex: '0 0 860px',
        height: '100%',
        '& .left1': {
          height: '300px',
          paddingBottom: '20px',
        },
        '& .left2': {
          height: '320px',
          paddingBottom: '20px',
        },
        '& .left3': {
          height: '280px',
          paddingBottom: '20px',
        },
        '& .left4': {
          height: '230px',
          paddingBottom: '20px',
        },
        '& .left5': {
          height: '360px',
          paddingBottom: '20px',
        },
        '& .left6': {
          height: '360px',
          paddingBottom: '20px',
        },
      },
      '& .right': {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '0 10px',
        width: 'auto',
        maxWidth: '2980px',
        height: '100%',
        '& .right-top': {
          width: '100%',
          height: '206px',
          marginBottom: '20px',
          background: '#ccc',
        },
        '& .right-center': {
          width: '100%',
          height: '48px',
          marginBottom: '20px',
          background: '#666',
        },
        '& .right-bottom': { width: '100%', flexGrow: 1, background: '#999' },
      },
    },
  },
  loading: {
    position: 'absolute',
    zIndex: 99,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& .text': {
      fontSize: '36px',
      color: '#fff',
    },
  },
})

export default defineComponent({
  setup() {
    const isLoading = ref(true)

    setTimeout(() => {
      isLoading.value = false
    }, 100)

    return () => {
      return (
        <div class="screen-container">
          <Model show />
          {isLoading.value ? (
            <Loading class="loading" width={150} speed={1.4}>
              加载中...
            </Loading>
          ) : (
            <Container width={3840} height={2160}>
              <div class="header">
                <ScreenHeader />
              </div>
              <div class="main">
                <div class="content left">
                  <div class="left1">
                    <TotalUser />
                  </div>
                  <div class="left2">
                    <AverageAge />
                  </div>
                  <div class="left3">
                    <TotalDevice />
                  </div>
                  <div class="left4">
                    <TotalGender />
                  </div>
                  <div class="left5">
                    <Overview />
                  </div>
                  <div class="left6">
                    <BestSellingCategory />
                  </div>
                </div>
                <div class="content right">
                  <div class="right-top">
                    <div class="item-ground">
                      {[
                        {
                          icon: 'shangsanjiaoxing',
                          title: '今日销售额',
                          'en-title': "Today's Sales Amount",
                          value: 99999,
                        },
                        {
                          icon: 'shangsanjiaoxing',
                          title: '今日销售额',
                          'en-title': "Today's Sales Amount",
                          value: 99999,
                        },
                        {
                          icon: 'shangsanjiaoxing',
                          title: '今日销售额',
                          'en-title': "Today's Sales Amount",
                          value: 99999,
                        },
                        {
                          icon: 'shangsanjiaoxing',
                          title: '今日销售额',
                          'en-title': "Today's Sales Amount",
                          value: 99999,
                        },
                      ].map((item) => (
                        <div class="item">
                          <div class="icon">
                            <Icon icon={item.icon} />
                          </div>
                          <div class="text-ground">
                            <div class="title">{item.title}</div>
                            <div class="en-title">{item['en-title']}</div>
                            <div class="value">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div class="project-ground">
                      {[
                        {
                          icon: 'shangsanjiaoxing',
                          text: '转化率',
                          value: '10.14%',
                        },
                        {
                          icon: 'shangsanjiaoxing',
                          text: '转化率',
                          value: '10.14%',
                        },
                      ].map((item) => (
                        <div class="project">
                          <div class="icon">
                            <Icon icon={item.icon} />
                          </div>
                          <div class="text">{item.text}</div>
                          <div class="value">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="right-center">
                    <FocusCarousel
                      class="country-category"
                      focusClassName="active"
                      delay={2000}
                    >
                      <div class="country">ALL</div>
                      <div class="country">湖南</div>
                      <div class="country">深圳</div>
                      <div class="country">广东</div>
                      <div class="country">四川</div>
                      <div class="country">上海</div>
                    </FocusCarousel>
                  </div>
                  <div class="right-bottom">
                    <div class="right-bottom-left">
                      <div class="right-bottom-left1">
                        <DataMarket />
                      </div>
                      <div class="right-bottom-left2">
                        <FocusCarousel
                          class="tolal-category"
                          focusClassName="active"
                          delay={1500}
                        >
                          <div class="tolal">1</div>
                          <div class="tolal">2</div>
                          <div class="tolal">3</div>
                          <div class="tolal">4</div>
                        </FocusCarousel>
                      </div>
                      <div class="right-bottom-left3">
                        <FlyBox
                          height="100%"
                          lineLength={100}
                          lineColor={'#ef2'}
                        />
                      </div>
                      <div class="right-bottom-left4">
                        <ScheduleView />
                      </div>
                    </div>
                    <div class="right-bottom-right">
                      <div class="right-bottom-right1">
                        <PlanList />
                      </div>
                      <div class="right-bottom-right2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer"></div>
            </Container>
          )}
        </div>
      )
    }
  },
})
