import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.authorization = 'Bearer ' + localStorage.token;
    }
    return config
}, err => {
    console.error('请求失败', err)
})

instance.interceptors.response.use(res => {
    //请求成功对响应数据做处理
    return res //该返回对象会传到请求方法的响应对象中
}, err => {
    // 响应错误处理
    // location.href = '/login'
    return Promise.reject(err);
})

async function http(option = {}) {

    let result = null
    if (option.method === 'get' || option.method === 'delete') {
        await instance[option.method](
            option.path,
            { params: option.params }
        ).then(res => {
            result = res.data
        }).catch(err => {
            result = err
        })
    } else if (option.method === 'post' || option.method === 'put') {
        await instance[option.method](
            option.path,
            option.params
        ).then(res => {
            result = res.data
        }).catch(err => {
            result = err
        })
    }

    return result
}

export default http