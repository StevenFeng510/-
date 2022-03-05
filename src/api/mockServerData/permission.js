import Mock from 'mockjs';
export default {
    getMenu: (config) => {
        console.log(config);
        const { username, password } = JSON.parse(config.body);
        console.log(JSON.parse(config.body));
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === '123456') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home/index',
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '投稿管理',
                            icon: 'video-play',
                            url: 'Mall/index',
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User/index',
                        },
                        {
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'Other/PageOne.vue',
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'Other/PageTwo.vue',
                                },
                            ],
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功',
                },
            };
        } else if (username === 'Steven' && password === '123456') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home/index',
                        },
                        {
                            path: '/video',
                            name: 'video',
                            label: '投稿管理',
                            icon: 'video-play',
                            url: 'Mall/index',
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功',
                },
            };
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误',
                },
            };
        }
    },
};
