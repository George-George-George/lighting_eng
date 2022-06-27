const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
        // 默认情况下dist
        new HtmlWebpackPlugin({
            template: './public/index.html',
      // template 为webpack 打包生成 dist/ html 文件指定模版
             filename: 'index.html' // html 文件 文件名称
        })
      ]
}
// __dirname 可以用来动态获取当前文件所属目录的绝对路径
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口

// path.resolve(__dirname, "dist"),
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist