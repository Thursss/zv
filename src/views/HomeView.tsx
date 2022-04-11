import { defineComponent, ref } from 'vue'
import { createUseStyles } from 'vue-jss'
import { Loading, Container } from 'zv-lib'
import ScreenHeader from '@/components/header'
import TotalUser from '@/components/totalUser'
import AverageAge from '@/components/averageAge'
import TotalDevice from '@/components/totalDevice'
import TotalGender from '@/components/totalGender'

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
    const classesRef = useStyles()
    const isLoading = ref(true)

    setTimeout(() => {
      isLoading.value = false
    }, 100)

    return () => {
      const styleClass = classesRef.value

      return (
        <div class={styleClass['screen-container']}>
          {isLoading.value ? (
            <Loading class={styleClass.loading} width={150} speed={1.4}>
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
                  <div class="left5"></div>
                  <div class="left6"></div>
                </div>
                <div class="content right">
                  <div class="right-top"></div>
                  <div class="right-center"></div>
                  <div class="right-bottom"></div>
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
