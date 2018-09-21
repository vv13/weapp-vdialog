// eslint-disable-next-line
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.triggerEvent('open')
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 100,
          })
        }
      },
    },

    title: {
      type: String,
      value: '',
    },

    // Show
    showFooter: {
      type: Boolean,
      value: false,
    },

    fullscreen: {
      type: Boolean,
      value: false,
    },

    closeOnClickModal: {
      type: Boolean,
      value: true,
    },

    width: {
      type: Number,
      value: 85,
    },
  },
  data: {},
  attached() {
    if (!this.dataset.model) {
      console.warn("dialog-wxapp: dataset 'model' undefined")
    }
  },
  moved() {},
  detached() {},

  methods: {
    touchstart() {
      if (this.data.closeOnClickModal) {
        this.close()
      }
    },
    closedialog() {
      if (this.dataset.model) {
        // eslint-disable-next-line
        let currentPage = getCurrentPages().pop()
        const data = {}
        data[this.dataset.model] = false
        currentPage.setData(data)
      }
    },
    close() {
      this.closedialog()
      this.triggerEvent('close')
    },
    confirm() {
      this.closedialog()
      this.triggerEvent('confirm')
    },
  },
})
