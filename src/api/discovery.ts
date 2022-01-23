import request from '@/utils/request'
import { PersonalizedParams } from './type'

/**
 * 说明：
 * 推荐mv - /personalized/mv
 * 推荐歌单 - /personalized?limit=1 (limit: 取出数量 , 默认为 30 (不支持 offset))
 * 推荐新音乐 - /personalized/newsong (limit: 取出数量 , 默认为 10 (不支持 offset))
 * 推荐电台 - /personalized/djprogram
 * 独家放送(入口列表) - /personalized/privatecontent
 * 独家放送列表 - /personalized/privatecontent/list
 * 可选参数 :
 *  limit : 返回数量 , 默认为 60
 *  offset : 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
 * 调用例子 : /personalized/privatecontent/list?limit=1&offset=2
 */
const api = {
 banner: '/banner?type=0', // 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
 newSong: '/personalized/newsong', // 说明 : 调用此接口 , 可获取推荐新音乐
 mv: '/personalized/mv', // 说明 : 调用此接口 , 可获取推荐 mv
 personalized: '/personalized',
 djprogram: '/personalized/djprogram', // 推荐电台
}

export const getBanner = () => {
 return request({
  url: api.banner,
  method: 'get'
 })
}

export const getNewSongs = () => {
 return request({
  url: api.newSong,
  method: 'get'
 })
}

export const getPersonalizedMv = () => {
 return request({
  url: api.mv,
  method: 'get'
 })
}

export const getPersonalizedDjprogram = () => {
 return request({
  url: api.djprogram,
  method: 'get'
 })
}

export const getPersonalized = (data: PersonalizedParams) => {
 return request({
  url: api.personalized,
  method: 'get',
  data
 })
}