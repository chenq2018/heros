## gulp前端自动化打包工具（备注还有grunt和webpack）
[官网](http://www.gulpjs.com)
[中文网](http://www.gulpjs.com.cn)

- 前端自动化构建工具
- js: function(){//},代码压缩,混淆 : var name = 123,var x = 123
- css
- 合并: 1个js 1kb ,有10个js.

### gulp 5个核心方法简介
 - gulp.task('任务名',function(){}) // 创建任务。
 - gulp.src('./*.css') 指定想要处理的文件
 - gulp.dest() // 指定最终处理后的文件的存放路径
 - gulp.watch() // 自动的监视文件的变化，然后执行相应任务。
 - gulp.run('任务名')，直接执行相应的任务。

### gulp安装
- 通过npm安装:`npm install gulp --global`

### gulp匹配文件及处理文件输出路径
- 1.在当前项目中也要安装gulp: `npm install gulp --save`
- 2.还需要在当前项目中新建一个文件: gulpfile.js

```javascript
    var gulp =  require('gulp');
    // 创建任务
    // 第一个参数: 任务名
    // 第二个参数: 回调函数,当我们执行任务时就会执行这个函数
    gulp.task('test', function(){
      console.log(123)
})
```
- 3.执行任务: `gulp 任务名`
    + 示例: `gulp test`

### gulp的js插件下载
- `npm install gulp-uglify --save`gulp对js文件进行压缩操作
- `npm install gulp-concat --save`gulp对js文件进行合并和压缩操作

```javascript
  gulp.task('script', function(){
  // 1.要匹配到要处理的文件
  // 指定指定的文件:参数是匹配的规则
  // 参数也可以是数组，数组中的元素就是匹配的规则
  gulp.src(['./app.js','./sign.js'])
  // concat 的参数是合并之后的文件名字
  .pipe(concat('index.js'))
  .pipe(uglify())
  // dest方法参数，指定输出文件的路径
  .pipe(gulp.dest('./dist'))
})
```

### gulp对css文件进行合并压缩
- `npm install gulp-cssnano --save`

```javascript
   // 新建一个任务，对css进行处理
gulp.task('style', function(){
  // 对项目中的2个css文件进行合并，压缩操作
  // 1.匹配到要处理的文件
  gulp.src(['./*.css'])
  // 2.合并文件
  .pipe(concat('index.css'))
  // 3.压缩操作
  .pipe(cssnano())
  // 4.输出到指定目录
  .pipe(gulp.dest('./dist'))
  })
```

### 使用gulp对html进行压缩
- `npm install gulp-htmlmin --save`
- https://github.com/kangax/html-minifier

```javascript
    // 新建一个任务，对html进行压缩
gulp.task('html', function(){
 // 1.匹配到要处理的文件
 gulp.src(['./index.html'])
 // 2.压缩操作
 .pipe(htmlmin({collapseWhitespace:true}))
 // 3.指定输出目录
 .pipe(gulp.dest('./dist'))
})
```