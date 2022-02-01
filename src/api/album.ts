import request from '@/utils/request'

const api = {
  album: '/album' // 获取专辑内容 说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
}

interface Ialbum {
  id: number
}

export const getAlbum = (params: Ialbum) => {
  return request({
    url: api.album,
    method: 'get',
    params
  })
}
