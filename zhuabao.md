### 手机抓包方法

    == 下载好charles-proxy-4.2.5-win64.msi ==
    
        替换掉lib文件夹里面的charles.jar文件
        
#### 手机连接电脑WiFi
    
    打开已经下载好的Charles
        
##### 在导航栏里面找到Help 
            
    1.点击Local Ip Address
    
        看到有一个宽带连接或什么的连接 后面的值格式为 10.1.2.0这样的
        
    2.在手机连接WiFi
    
        连接成功后边的箭头点开看到手动代理 
        代理服务器主机名 为10.1.2.0
        代理服务器端口 为8888
       
    3.SSL Proxying
    
        有一条 Install Charles Root Certificate on a Mobile Device or Remote Browser
        
            从中看到地址 chls.pro/ssl 在手机谷歌浏览器里边搜索路径
            确定下载安装证书
    
##### 点击Proxy

    1.SSL Proxying Settings...
    
        点击 Add Host和Prot 输入*
    
    2.Access Control Settings...
    
        点击 Add 输入 0.0.0.0/0 (匹配所有路径)