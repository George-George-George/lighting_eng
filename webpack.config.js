const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode:'development',
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
        }),
        new VueLoaderPlugin()

      ],
      devServer: {
        port: 8080, // 端口号
        open: true
      },
      module: { // loader 加载器 配置在这儿
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            // loader 执行的顺序： use数组里从右向左运行
            // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
            // 再用 style-loader 将样式, 把css插入到dom中
            use: [ "style-loader", "css-loader","less-loader"]
          },
          {
            test: /\.less$/, // 匹配执行类型的文件
            // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
          // 执行的顺序 less-loader css-loader style-loader
          // less-loader 先把less代码转换成css
          // css-loader 再把css代码转换成webpack 可以识别的js代码
          // style-loader 在把css代码插入到 dom中
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.vue$/,
            use: ['vue-loader']
          },

        ]
    }
}
// __dirname 可以用来动态获取当前文件所属目录的绝对路径
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口

// path.resolve(__dirname, "dist"),
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist