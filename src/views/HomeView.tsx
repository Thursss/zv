import { defineComponent, ref } from 'vue'
import { createUseStyles } from 'vue-jss'
import { Loading, Container } from 'zv-lib'

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
          background: '#ccc',
        },
        '& .left2': {
          height: '320px',
          paddingBottom: '20px',
          background: '#ccc',
        },
        '& .left3': {
          height: '280px',
          paddingBottom: '20px',
          background: '#ccc',
        },
        '& .left4': {
          height: '230px',
          paddingBottom: '20px',
          background: '#ccc',
        },
        '& .left5': {
          height: '360px',
          paddingBottom: '20px',
          background: '#ccc',
        },
        '& .left6': {
          height: '360px',
          paddingBottom: '20px',
          background: '#ccc',
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
      fontSize: '16px',
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
    }, 1000)

    return () => {
      const styleClass = classesRef.value

      return (
        <div class={styleClass['screen-container']}>
          {isLoading.value ? (
            <Loading class={styleClass.loading} width={75} speed={1.4}>
              加载中...
            </Loading>
          ) : (
            <Container width={3840} height={2160}>
              <div class="header">数据大屏</div>
              <div class="main">
                <div class="content left">
                  <div class="left1"></div>
                  <div class="left2"></div>
                  <div class="left3"></div>
                  <div class="left4"></div>
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
