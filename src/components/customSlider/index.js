import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const root=[
    {
        name:'首页',
        path:'/admin/home',
        key:'/admin/home'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        key:'/admin/user',
        children:[
            {
                name:'权限管理',
                path:'/admin/user/root',
                key:'/admin/user/root',
                children:[
                    {
                        name:'权限管理1',
                        path:'/admin/user/root',
                        key:'/admin/user/root'
                    }
                ]
            },
            {
                name:'信息管理',
                path:'/admin/user/info',
                key:'/admin/user/info',
            }
        ]
    },
    {
        name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'
    }
]

class CustomSlider extends React.Component{
    jump=(path)=>{ // 动态侧边栏
        this.props.history.push(path)
    }
    renderItem=(data)=>{
        //1、判断是否有children  有的是SubMenu   没有的是Menu.Item
        return data.map((item,index)=>{
            if(item.children){
                // 渲染次级
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                        {item.name}
                    </Menu.Item>
                )
            }
        })
    }
    render(){
        return(
            <Menu style={{ width: 256 }} mode="vertical" theme="dark">
                {this.renderItem(root)}    
            {/* {root.map((item,index)=>{
                    if(item.children){ // 判断是否有子节点
                        // 渲染次级导航
                        return(
                            <SubMenu title={item.name}>
                                {item.children.map((citem,index)=>{
                                    return(
                                        <Menu.Item key={citem.key} onClick={this.jump.bind(this,citem.path)}>{citem.name}</Menu.Item>
                                    ) 
                                })}
                            </SubMenu>
                        )
                    }
                    return(
                        <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                    )
                })} */}
                {/* <Menu.Item key='1'>首页</Menu.Item>
                <SubMenu title='用户管理'>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </SubMenu> */}
            </Menu>
        )
    }
}

export default withRouter(CustomSlider)