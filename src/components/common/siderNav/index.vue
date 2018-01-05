<template>
	<div id="siderNav" @changeActiveIndex="changeActiveIndex">
		<el-menu unique-opened 
    router
    class="el-menu-vertical-demo menu"
    :default-active="activeIndex"
    text-color="#ffffff"
    background-color="#545c64"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
			<template v-for="item in items">
				<el-submenu :index="item.index" :key="item.index" class="borderTopParent">
					<template slot="title">
						<icon :name="item.icon_name"></icon>
						<span slot="title">{{item.title}}</span>
					</template>
					<template v-if="item.subs">
						<!-- 二级目录 -->
						<template v-for="item2 in item.subs">
							<template v-if="item2.subs">
								<el-submenu :index="item2.index" :key="item2.index" class="borderTopParent">
									<template slot="title">
										<template v-if="item2.icon">
											<i class="iconfont ml20 mr3 fontSizeS" :class="item2.icon"></i>
										</template>
										<span slot="title">{{item2.title}}</span>
									</template>
									<template v-if="item2.subs">
										<!-- 三级目录 -->
										<template v-for="item3 in item2.subs">
											<el-menu-item class="child3" :index="item3.index" :key="item3.index">{{item3.title}}</el-menu-item>
										</template>
									</template>
									<!-- <el-menu-item index="1-1-1">选项1</el-menu-item>
                            <el-menu-item index="1-1-2">选项2</el-menu-item> -->
								</el-submenu>
							</template>
							<template v-else>
								<el-menu-item class="child" :index="item2.index" :title="item2.title" :key="item2.index">
									{{ item2.title }}
								</el-menu-item>
							</template>
						</template>
					</template>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      activeIndex: '',
      items: [
        {
          icon_name: 'money',
          index: '/zsyMileage',
          title: '臻收银管理',
          subs: [
            {
              icon: 'icon-flag',
              index: '/experience', // 路由名
              title: '商户管理',
              subs: [
                {
                  index: '/experience', // 路由名
                  title: '历程'
                },
                {
                  index: '/merchantManage',
                  title: '商户管理'
                },
                {
                  index: '/storeManage',
                  title: '门店管理'
                },
                {
                  index: '/operatorManage',
                  title: '操作员管理'
                },
                {
                  index: '/QRcode',
                  title: '收款码'
                }
              ]
            },
            {
              icon: 'icon-flag',
              index: '/agent',
              title: '代理商管理',
              subs: [
                {
                  index: '/agent', // 路由名
                  title: '代理商'
                }
              ]
            },
            {
              icon: 'icon-flag',
              index: '/bill',
              title: '财务管理',
              subs: [
                {
                  index: '/billManage', // 路由名
                  title: '账单管理'
                },
                {
                  index: '/channelReconciliation',
                  title: '通道对账'
                },
                {
                  index: '/remainTreasure',
                  title: '余利宝'
                },
                {
                  index: '/withdrawManage',
                  title: '提现管理'
                },
                {
                  index: '/agentMoney',
                  title: '代理商分润'
                },
                {
                  index: '/fenRunIncome',
                  title: '分润收入'
                }
              ]
            },
            {
              icon: 'icon-flag',
              index: '/sysAnalysis6',
              title: '其他管理',
              subs: [
                {
                  index: '/zsyMileage6', // 路由名
                  title: '意见反馈'
                }
              ]
            }
          ]
        },
        {
          icon_name: 'building',
          index: '/zsfMileage',
          title: '臻商分管理',
          subs: [
            {
              index: '/zsfMileage',
              title: '自评历程'
            },
            {
              index: '/zsfComCalculation',
              title: '提额历程'
            },
            {
              index: '/zsfSysAnalysis',
              title: '统计分析'
            }
          ]
        },
        {
          icon_name: 'car',
          index: '/mileage',
          title: '臻车贷管理',
          subs: [
            {
              index: '/mileage', // 路由名
              title: '历程'
            },
            {
              index: '/sysAnalysis',
              title: '统计分析'
            },
            {
              index: '/comCalculation',
              title: '佣金计算'
            }
          ]
        },
        {
			icon_name: 'leanpub',
			index: '/zedMileage',
		    title: '臻e贷管理',
			subs: [{
				icon: 'icon-flag',
				index: '/creditCard',
				title: '信用卡申请',
				subs: [{
					index: '/creditCard',
					title: '历程'
						}]
			},
			{
				index: '/zedMileage',
				title: '历程'
			},
			{
				index: '/zedSysAnalysis',
				title: '统计分析'
			},
			{
				index: '/zedComCalculation',
				title: '佣金计算'
			}
			]
		},
    {
      icon_name: 'table',
      index: '/bdBig',
      title: '大数据管理',
      subs: [
          {
            index: '/bdBig',
            title: '数据归集'
          },
          {
            index: '/bdSysAnalysis',
            title: '数据清洗'
          },
          {
            index: '/digitPortrayal',
            title: '数字画像'
          },
          {
            index: '/bdComCalculation',
            title: '大数据分析'
          },
          {
            index: '/businessApply',
            title: '商业应用'
          }
          ]
        },
        {
          icon_name: 'cogs',
          index: '/user',
          title: '系统管理',
          subs: [
            {
              index: '/user',
              title: '用户管理'
            },
            {
              index: '/role',
              title: '角色管理'
            }
          ]
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    changeActiveIndex(index) {
      this.activeIndex = index
    }
  },
  mounted() {
    // this.role = sessionStorage.getItem('role')
    // console.log('role:' + sessionStorage.getItem('role'))
  }
}
</script>
<style lang="scss" scoped>
  #siderNav {
		display: block;
		position: absolute;
		width: 150px;
		left: 0;
		top: 0;
		bottom: 0;
		background-color: #545c64;
		overflow: hidden;
		z-index: 100;
		.el-submenu__title i {
			color: #ffffff
		}
		.el-submenu [class^=el-icon-] {
			margin-right: 0px;
		}
		.el-menu {
			border-right: none;
			background-color: #545c64;
			.borderTopParent {
				.item2 {
					padding-left: 28px;
				}
				.el-submenu__title {
					padding-left: 28px !important;
					height: 42px;
					line-height: 46px;
					&:hover {
						background-color: #14457b !important;
					}
					.titleIcon {
						margin-bottom: 1px;
					}
					.titleText {
						padding-left: 0px;
						font-size: 13px;
					}
					.el-submenu__icon-arrow {
						font-size: 8px;
						margin-top: -2px;
					}
				}
			}
			.child {
				padding-left: 60px !important;
				font-size: 12px;
				height: 30px;
				line-height: 30px;
				color: #fff;
				background-color: #545c64;
				&:hover {
					background-color: #14457b;
				}
			}
			.child3 {
				padding-left: 80px !important;
				font-size: 12px;
				height: 30px;
				line-height: 30px;
				color: #fff;
				background-color: #545c64;
				&:hover {
					background-color: #14457b;
				}
			}
		}
	}
</style>
