import { Notification } from 'element-ui';

export { debounce, throttle } from 'lodash-es';

export function pad(num: string | number, n = 2) {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}

export function formatDate(date: string | number | Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  date = date instanceof Date ? date : new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = (o as any)[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str),
      )
    }
  }
  return fmt
}

function padLeftZero(str: string | any[]) {
  return ('00' + str).substr(str.length)
}

export function formatTime(interval: number) {
  interval = interval | 0
  const minute = pad((interval / 60) | 0)
  const second = pad(interval % 60)
  return `${minute}:${second}`
}

export function formatNumber(number: number) {
  number = Number(number) || 0
  return number > 100000 ? `${Math.round(number / 10000)}万` : number
}

export function genImgUrl(url: string, w: any, h: any) {
  if (!h) {
    h = w
  }
  url += `?param=${w}y${h}`
  return url
}


export function isLast(index: number, arr: string | any[]) {
  return index === arr.length - 1
}

export function shallowEqual(a: string | any[], b: string | any[], compareKey: string | number) {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    let compareA = a[i]
    let compareB = b[i]
    if (compareKey) {
      compareA = compareA[compareKey]
      compareB = compareB[compareKey]
    }
    if (!Object.is(a[i], b[i])) {
      return false
    }
  }
  return true
}

export function notify(message: any, type: string) {
  const params = {
    message,
    duration: 1500,
  }
  const fn = type ? (Notification as any)[type] : Notification
  return fn(params)
}
['success', 'warning', 'info', 'error'].forEach((key) => {
  (notify as any)[key] = (message: any) => {
    return notify(message, key)
  }
})

export function requestFullScreen(element: any) {
  const docElm = element;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
}

export function exitFullscreen() {
  const de: any = window.parent.document;

  if (de.exitFullscreen) {
    de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen();
  } else if (de.msExitFullscreen) {
    de.msExitFullscreen()
  }
}

export function isFullscreen() {
  return (document as any).fullScreen ||
  (document as any).mozFullScreen ||
  (document as any).webkitIsFullScreen
}

export function isUndef(v: null | undefined) {
  return v === undefined || v === null
}

export function isDef(v: null | undefined) {
  return v !== undefined && v !== null
}

export function isTrue(v: boolean) {
  return v === true
}

export function isFalse(v: boolean) {
  return v === false
}

export function getPageOffset(page: number, limit: number) {
  return (page - 1) * limit
}
