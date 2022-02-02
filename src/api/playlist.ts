import request from '@/utils/request'

/**
 * 说明:
 * 歌单 ( 网友精选碟 ) 说明 : 调用此接口 , 可获取网友精选碟歌单
 * 接口地址 : /top/playlist
 * 调用例子 : /top/playlist?limit=10&order=new
 */

const api = {
  playlist: '/top/playlist', // 歌单 ( 网友精选碟 )
  highquality: '/top/playlist/highquality', // 获取精品歌单
  simiPlayList: '/simi/playlist', // 获取相似歌单 说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单
}

interface IPlayLists {
  cat: string
  limit: number
  offset: number
}

// 获取歌单
export function getPlaylists(params: IPlayLists) {
  return request({
    url: api.playlist,
    method: 'get',
    params
  })
}

interface ITopPlaylists {
  limit: number
  cat: string
}

// 精品歌单
export function getTopPlaylists(params: ITopPlaylists) {
  return request({
    url: api.highquality,
    method: 'get',
    params
  })
}

interface ISimiPlaylists {
  id: number
}

// 获取相似歌单
export function getSimiPlaylists(params: ISimiPlaylists) {
  return request({
    url: api.simiPlayList,
    method: 'get',
    params
  })
}
