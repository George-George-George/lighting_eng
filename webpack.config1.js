const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:'development' ,
    entry: "./src/main.js", // 入口
    output: { 
        // publicPath:'/',
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pulic/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
          }),
          new CleanWebpackPlugin(), 
    ],
    devServer: {
        // static:'./dist/indexasd.html',
        // host: 'localhost',
        port: 5050, // 端口号
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit:8192,
            //         }
            //     }
            //   },
            {// webpack 5
            test: /\.(png|jpg|gif)$/i, // 匹配的图片
            // type: 'asset/resource', // 处理资源模块的方式
            // asset/resource 直接复制dist 目录下
            type: 'asset',
            // 直接转换成based64
        
         parser: {
            dataUrlCondition: {
                maxSize: 30 * 1024,
            },
             },
             generator :{
                filename: '[hash:6][ext]', 
             }
            
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                }
            }
        }
        ],
        
    }
}
// __dirname 可以用来动态获取当前文件所属目录的绝对路径
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口

// path.resolve(__dirname, "dist"),
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist