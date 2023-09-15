export const routes = [{
		path: '/',
		name: 'dashboard',
		component: () => import('@/components/tabbar/TabBar.vue'),
		children: [{
				path: '/',
				name: 'home',
				redirect: '/home'
			},
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/Home.vue'),
				// meta: {keepAlive: true}
			},
			{
				path: 'about',
				name: 'about',
				component: () => import('_v/about/About.vue')
			},
			{
				path: 'usercenter',
				name: 'usercenter',
				
				component: () => import('_v/account/UserCenter.vue')
			},
			{
				path:"/P",
				name:"P",
				component:()=> import("_c/test/P.vue")
			   }
		]
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('_v/commodity/Search.vue')
	},
	{
		path: '/uc/',
		name: 'uc',
		component: () => import('_c/header/UcHeader.vue'),
		children: [{
				path: '',
				name: 'uc_home',
				redirect: '/uc/profile'
			},
			{
				path: 'profile',
				name: 'profile',
				meta: {
					title: "个人资料",
					loginRequired: true,
				},
				component: () => import('_v/account/Profile.vue'),
			},
			{
				path: 'changename',
				name: 'changename',
				meta: {
					title: "修改姓名",
					loginRequired: true,
				},
				component: () => import('_v/account/ChangeUsername.vue'),
			},
			{
				path: 'cart',
				name: 'cart',
				meta: {
					title: "购物车",
					loginRequired: true,
				},
				component: () => import('_v/account/Cart.vue')
			},
			{
				path: 'address',
				name: 'address_list',
				meta: {
					title: "我的收货地址",
					loginRequired: true,
				},
				component: () => import('_v/account/AddressList.vue')
			},
			{
				path: 'address/:id(\\d+)',
				name: 'address_edit',
				meta: {
					title: "编辑收货地址"
				},
				component: () => import('_v/account/AddressEdit.vue')
			},
			{
				path: 'address/add',
				name: 'address_add',
				meta: {
					title: "新增收货地址"
				},
				component: () => import('_v/account/AddressEdit.vue')
			},
		]
	},
	{
		path: '/order/',
		name: 'order',
		component: () => import('_c/header/UcHeader.vue'),
		children: [{
			path: 'submit',
			name: 'order_submit',
			meta: {
				title: "确认订单"
			},
			component: () => import('_v/order/OrderSubmit.vue')
		}]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('_v/login/Login.vue')
	},
	// 403的处理
	{
		path: '/403',
		name: 'url403',
		component: () => import('_v/403.vue')
	},
	// 404的处理
	{
		path: '/404',
		name: 'url404',
		component: () => import('_v/404.vue')
	},
	{
		path: "/:pathMatch(.*)",
		redirect: "/404"
	},
	{
		path: '/regist',
		name: 'regist',
		component: () => import('_v/regist/Regist.vue')
	},
	{
		path: '/commodity/:id(\\d+)',
		name: 'commodity_detail',
		component: () => import('_v/commodity/Detail.vue')
	},
	{
		path: '/ip',
		name: 'ip',
		component: () => import('_c/test/Location.vue')
	},
	{
		path: '/Textarea-1',
		name: 'Textarea-1',
		component: () => import('_c/test/F-Textarea/Textarea-1.vue')
	},{
		path: '/roi',
		name: 'roi',
		component: () => import('_c/test/F-Textarea/roi.vue')
		
	},
	
]



