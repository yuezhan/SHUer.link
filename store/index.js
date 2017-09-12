import Vuex from 'vuex'
/* eslint-disable */
// import light from '!raw-loader!../assets/themes/light-theme.css'
// import dark from '!raw-loader!../assets/themes/dark-theme.css'

const store = () => new Vuex.Store({
  state: {
    // theme: 'light',
    // themes: {
    //   light,
    //   dark
    // },
    user: {
      cardID: '',
      password: '',
      name: '',
      nickname: '',
      tocken: '',
      custom: {}
    },
    device: '',
    sidebarState: false,
    loginState: true,
    searchEngines: {
      Google: {
        title: '谷歌',
        value: 'Google',
        icon: ':iconfont icon-Google',
        desktop: 'https://g.shuosc.org/search?newwindow=1&hl=zh-CN&q=',
        mobile: 'https://g.shuosc.org/search?newwindow=1&hl=zh-CN&q='
      },
      Bing: {
        title: '必应',
        value: 'Bing',
        icon: ':iconfont icon-Bing',
        desktop: 'https://www.bing.com/search?q=',
        mobile: 'https://www.bing.com/search?q='
      },
      Baidu: {
        title: '百度',
        value: 'Baidu',
        icon: ':iconfont icon-Baidu',
        desktop: 'https://www.baidu.com/s?wd=',
        mobile: 'https://www.baidu.com/s?wd='
      },
      Wikipedia: {
        title: '维基百科',
        value: 'Wikipedia',
        icon: ':iconfont icon-Wikipedia',
        desktop: 'https://en.m.wikipedia.org/w/index.php?search=',
        mobile: 'https://en.m.wikipedia.org/w/index.php?search='
      },
      CNKI: {
        title: '知网',
        value: 'CNKI',
        icon: ':iconfont icon-CNKI',
        desktop: 'http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_sel=FT%24%25%3D%7C&txt_1_special1=%25&txt_extension=&expertvalue=&cjfdcode=%C2%A4tid=txt_1_value1&dbJson=coreJson&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&db_value=&hidTabChange=&hidDivIDS=&singleDB=SCDB&db_codes=&singleDBName=&againConfigJson=false&action=scdbsearch&ua=1.11&txt_1_value1=',
        mobile: 'http://wap.cnki.net/touch/web/Article/Search/?kw='
      },
      GoogleScholar: {
        title: '谷歌学术',
        value: 'GoogleScholar',
        icon: ':iconfont icon-GoogleScholar',
        desktop: 'https://scholar.google.com/scholar?hl=zh-CN&q=',
        mobile: 'https://scholar.google.com/scholar?hl=zh-CN&q='
      },
      Zhihu: {
        title: '知乎',
        value: 'Zhihu',
        icon: ':iconfont icon-Zhihu',
        desktop: 'https://www.zhihu.com/search?type=content&q=',
        mobile: 'https://www.zhihu.com/search?type=content&q='
      },
      Map: {
        title: '高德地图',
        value: 'Map',
        icon: ':iconfont icon-Map',
        desktop: 'https://uri.amap.com/search?keyword=',
        mobile: 'https://m.amap.com/search/mapview/keywords='
      },
      Music: {
        title: '虾米音乐',
        value: 'Music',
        icon: ':iconfont icon-Music',
        desktop: 'http://www.xiami.com/search?key=',
        mobile: 'https://h.xiami.com/index.html?f=&from=#!/search/result/?key='
      },
      Douban: {
        title: '豆瓣',
        value: 'Douban',
        icon: ':iconfont icon-Douban',
        desktop: 'https://www.douban.com/search?q=',
        mobile: 'https://m.douban.com/search/?query='
      },
      Wechat: {
        title: '微信',
        value: 'Wechat',
        icon: ':iconfont icon-Wechat',
        desktop: 'http://weixin.sogou.com/weixin?type=2&query=',
        mobile: 'http://weixin.sogou.com/weixinwap?type=2&query='
      },
      Cloud: {
        title: '网盘',
        value: 'Cloud',
        icon: ':iconfont icon-Cloud',
        desktop: 'http://pansou.com/?q=',
        mobile: 'http://m.pansou.com/?q='
      },
      Taobao: {
        title: '淘宝',
        value: 'Taobao',
        icon: ':iconfont icon-Taobao',
        desktop: 'https://s.taobao.com/search?q=',
        mobile: 'https://s.m.taobao.com/h5?q='
      },
      Weibo: {
        title: '微博',
        value: 'Weibo',
        icon: ':iconfont icon-Weibo',
        desktop: 'https://s.weibo.com/weibo/',
        mobile: 'https://s.weibo.com/weibo/'
      },
      JD: {
        title: '京东',
        value: 'JD',
        icon: ':iconfont icon-JD',
        desktop: 'https://search.jd.com/Search?keyword=',
        mobile: 'https://so.m.jd.com/ware/search.action?keyword='
      },
      Bilibili: {
        title: '哔哩哔哩',
        value: 'Bilibili',
        icon: ':iconfont icon-Bilibili',
        desktop: 'https://search.bilibili.com/all?keyword=',
        mobile: 'https://m.bilibili.com/search.html?keyword='
      },
      GitHub: {
        title: 'GitHub',
        value: 'GitHub',
        icon: ':iconfont icon-GitHub',
        desktop: 'https://github.com/search?q=',
        mobile: 'https://github.com/search?q='
      },
      StackOverflow: {
        title: 'Stack Overflow',
        value: 'StackOverflow',
        icon: ':iconfont icon-StackOverflow',
        desktop: 'https://stackoverflow.com/search?q=',
        mobile: 'https://stackoverflow.com/search?q='
      }
    },
    searchEngine: 'Google',
    icon: ':iconfont icon-Google'
  },
  mutations: {
    // changeTheme (state, val) {
    //   state.theme = val
    // },
    detectDevice (state) {
      state.device = device.mobile()
    },
    changeSidebar (state) {
      state.sidebarState = !state.sidebarState
    },
    changeSearchEngine (state, val) {
      state.searchEngine = val
      state.icon = ':iconfont icon-' + val
    }
  }
})

export default store
