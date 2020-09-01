export const state = () => ({
  memo: [],
  page: 0
})

export const mutations = {
  insert: function (state, obj) {
    let d = new Date()
    let fmt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()

    state.memo.unshift({
      title: obj.title,
      cntent: obj.content,
      created: fmt
    })
  },

  set_page: function(state, p) {
    state.page = p
  },

  remove: function(state, obj) {
    let num = 0
    state.memo.forEach((element, i) => {
      const ob = state.memo[i]
      if (ob.title == obj.title
        && ob.content == obj.content
        && ob.created == ob.created) {
          alert('remove it! --' + ob.title)
          state.memo.splice(i, 1)
          return
      }
    });
  }
}
