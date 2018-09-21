Page({
  data: {
    slotClose: false,
    fullscreen: false,
    dialogVis: false,
    footerVis: false,
    closeOnClickModal: true,
  },
  toggleDialogVis(vis) {
    this.setData({
      dialogVis: vis,
    })
  },
  handleClose() {
    this.setData({
      dialogVis: false,
    })
  },
  handleToggle(evt) {
    const {
      detail: { value },
      target: {
        dataset: { type },
      },
    } = evt
    this.setData({
      [type]: value,
    })
  },
})
