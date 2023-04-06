# reproduction-public-path-umi
umi@3.0 publicPath ./ 配置导致白屏页复现项目


1. yarn 
2. yarn start 
3. 打开 http://localhost:8000/pages/oops.html ，可以看到 umi.js文件内容居然是HTML
![image](https://user-images.githubusercontent.com/41284640/230381253-3d285813-9de6-4248-b6e9-25cbdfb7c402.png)

