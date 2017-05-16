export default {
  path: 'baseFrame',
  component: resolve => require(['@/app/Base'], resolve),
  children: [
    {
      path: '/',
      component: resolve => require(['@/app/Base/List'], resolve)
    },
    {
      path: '/logFrame',
      component: resolve => require(['@/app/Base/List'], resolve)
    },
    {
      path: '/roleFrame',
      component: resolve => require(['@/app/Base/role/List'], resolve)
    },
    {
      path: '/tagFrame',
      component: resolve => require(['@/app/Base/tag/List'], resolve)
    },
    {
      path: 'form/:id?',
      component: resolve => require(['@/app/Base/Form'], resolve)
    }
  ]
}
