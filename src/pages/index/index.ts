import { definePage, ref,onReady } from '@vue-mini/core'
definePage(() => {
  const mode = ref('light')

  const switchMode = () => {
    if (mode.value === 'light') {
      mode.value = 'dark'
    }
    else {
      mode.value = 'light'
    }
  }

  const copy = (url: string) => {
    wx.setClipboardData({
      data: url,
    })
  }

  onReady(() => {
    console.log('hello')
  })

  return {
    mode,
    switchMode,
    copy,
  }
})
