import babel from 'rollup-plugin-babel' // babel转换
import resolve from 'rollup-plugin-node-resolve' // rollup不知道如何去处理外部依赖，所以需要resolve插件帮忙解析
import commonjs from 'rollup-plugin-commonjs' // 一些库导出成你可以正常导入的ES6模块,目前，npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用commonjs插件将cjs模块转换成esm模块供rollup处理；rollup-plugin-commonjs应该用在其他插件转换你的模块之前 - 这是为了防止其他插件的改变破坏CommonJS的检测。

import minify from 'rollup-plugin-babel-minify'

// rollup支持以下格式
// amd – 异步模块定义，用于像RequireJS这样的模块加载器
// cjs – CommonJS，适用于 Node 和 Browserify/Webpack
// es – 将软件包保存为ES模块文件
// iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
// umd – 通用模块定义，以amd，cjs 和 iife 为一体
// 所以正常情况下打包es及umd格式即可

const LIB_NAME = 'drawing-board'
const GLOBAL_NAME = 'DrawingBoard'
const pkg = require('./package.json')

export default {
  input: 'src/main.js',
  output: [
    {
      file: `dist/${LIB_NAME}.es.js`,
      format: 'es'
    },
    {
      file: `dist/${LIB_NAME}.umd.js`,
      format: 'umd',
      // umd模式需要指定name
      name: GLOBAL_NAME
    }
  ],
  plugins: [
    // plugins顺序有讲究
    // 正常情况,resolve，commonjs应该在第一第二位置
    // 但此库使用了es6 class的类属性提案，commonjs无法解析，需要使用@babel/plugin-proposal-class-properties；所以将babel提前到首位
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    // 压缩，应该使用在production模式
    minify()
  ],
  external: [
    // 配置额外库
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}
