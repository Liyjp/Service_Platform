import Vue from 'vue'
import Router from 'vue-router'

import logins from '@/components/login/logins'
import mainpage from '@/components/managerpage/mainpage'
import ProjectPublish from '@/components/managerpage/ProjectPublish'
import PublishNews from '@/components/managerpage/PublishNews'
import PublishResult from '@/components/managerpage/PublishResult'
import hello from '@/components/managerpage/hello'
import ShowNews from '@/components/managerpage/ShowNews'
import summarys1 from '@/components/managerpage/summarys1'
import summarys2 from '@/components/managerpage/summarys2'
import summarys3 from '@/components/managerpage/summarys3'

import verify from "@/components/managerpage1/verify";
import release from "@/components/managerpage1/release";
import view from "@/components/managerpage1/view";
import apply from "@/components/managerpage1/apply";
import check from "@/components/managerpage1/check";
import lastcheck from "@/components/managerpage1/lastcheck";

import money from '@/components/managerpage2/money'
import moneyList from '@/components/managerpage2/moneyList'
import moneyPermit from '@/components/managerpage2/moneyPermit'
import xiangqing from '@/components/managerpage2/xiangqing'

import mainpage2 from '@/components/managerpage3/mainpage2'
import sApply from '@/components/managerpage3/studentComponents/sApply'
import hasApplied from '@/components/managerpage3/studentComponents/hasApplied'
import onProject from '@/components/managerpage3/studentComponents/onProject'
import sDefault from '@/components/managerpage3/studentComponents/sDefault'
import selfApply from '@/components/managerpage3/studentComponents/selfApply'
import moneyManage from '@/components/managerpage3/studentComponents/moneyManage'
import checkOption from '@/components/managerpage3/studentComponents/checkOption'
import submitMiddle from '@/components/managerpage3/studentComponents/submitMiddle'
import submitLast from '@/components/managerpage3/studentComponents/submitLast'
import index1 from '@/components/managerpage3/index/index1'
import index2 from '@/components/managerpage3/index/index2'
import index3 from '@/components/managerpage3/index/index3'
import index4 from '@/components/managerpage3/index/index4'
import index7 from '@/components/managerpage3/index/index7'
import index8 from '@/components/managerpage3/index/index8'
import lab1 from '@/components/managerpage3/lab/lab1'
import lab2 from '@/components/managerpage3/lab/lab2'
import lab3 from '@/components/managerpage3/lab/lab3'
import lab4 from '@/components/managerpage3/lab/lab4'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logins',
      component: logins,
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage,
      children:[
        {
          path: '/ProjectPublish',
          name: 'ProjectPublish',
          component: ProjectPublish
        },
        {
          path: '/PublishNews',
          name: 'PublishNews',
          component: PublishNews
        },
        {
          path: '/PublishResult',
          name: 'PublishResult',
          component: PublishResult
        },
        {
          path: '/hello',
          name: 'hello',
          component: hello
        },
        {
          path: '/ShowNews',
          name: 'ShowNews',
          component: ShowNews
        },
        {
          path: '/summarys1',
          name: 'summarys1',
          component: summarys1
        },
        {
          path: '/summarys2',
          name: 'summarys2',
          component: summarys2
        },
        {
          path: '/summarys3',
          name: 'summarys3',
          component: summarys3
        },
        {
          path:'/release',
          name:'release',
          component: release
        },
        {
          path:'/verify',
          name:'verify',
          component:verify
        },
        {
          path:'/view',
          name:'view',
          component:view
        },
        {
          path:'/apply',
          name:'apply',
          component:apply
        },
        {
          path:'/check',
          name:'check',
          component:check
        },
        {
          path:'/lastcheck',
          name:'lastcheck',
          component:lastcheck
        },
        {
          path: '/money',
          name: 'money',
          component: money
        },
        {
          path: '/moneyList',
          name: 'moneyList',
          component: moneyList
        },
        {
          path: '/moneyPermit',
          name: 'moneyPermit',
          component: moneyPermit
        },
        {
          path: '/xq',
          name: 'xaingqing',
          component: xiangqing
        }
      ]
    },
    {
      path: '/mainpage2',
      name: 'mainpage2',
      component: mainpage2,
      children:[
        {
          path: '/sDefault',
          name: 'sDefault',
          component: sDefault
        },
        {
          path: '/sApply',
          name: 'sApply',
          component: sApply
        },
        {
          path: '/hasApplied',
          name: 'hasApplied',
          component: hasApplied
        },
        {
          path: '/onProject',
          name: 'onProject',
          component: onProject
        },
        {
          path: '/sDefault/selfApply',
          name: 'selfApply',
          component: selfApply
        },
        {
          path: '/hasApplied/index1',
          name: 'index1',
          component: index1
        },
        {
          path: '/hasApplied/index2',
          name: 'index2',
          component: index2
        },
        {
          path: '/hasApplied/index3',
          name: 'index3',
          component: index3
        },
        {
          path: '/hasApplied/index4',
          name: 'index4',
          component: index4
        },
        {
          path: '/hasApplied/index7',
          name: 'index7',
          component: index7
        },
        {
          path: '/hasApplied/index8',
          name: 'index8',
          component: index8
        },
        {
          path: '/lab1',
          name: 'lab1',
          component: lab1
        },
        {
          path: '/moneyManage',
          name: 'moneyManage',
          component: moneyManage
        },
        {
          path: '/checkOption',
          name: 'checkOption',
          component: checkOption
        },
        {
          path: '/submitMiddle',
          name: 'submitMiddle',
          component: submitMiddle
        },
        {
          path: '/submitLast',
          name: 'submitLast',
          component: submitLast
        },
        {
          path: '/lab2',
          name: 'lab2',
          component: lab2
        },
        {
          path: '/lab3',
          name: 'lab3',
          component: lab3
        },
        {
          path: '/lab4',
          name: 'lab4',
          component: lab4
        }
      ]
    }
  ]
})
