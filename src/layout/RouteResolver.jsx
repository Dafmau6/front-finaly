import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import routes from '../config/routes';
import { Layout, theme } from "antd"; 


const { Content } = Layout; 
const RouteResolver = () => {
    const { token: { colorBgContainer }, } = theme.useToken(); 
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{
                padding: 24, minHeight: 360, background:
                    colorBgContainer
            }}> 
                <Routes>

                    Routes

                    {routes.map((route) => (
                        <Route key={route.id} path={
                            route.path} element={<route.component />} /> 

                    ))}
                </Routes>
            </div>
        </Content>
    );
}
export default  RouteResolver;
