import Axios from 'axios'

export function getData () {
  // 返回一个promise对象
  return Axios('https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/shop-list')
}