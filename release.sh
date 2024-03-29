#!/bin/bash
set -e

# 设置 npm源 为淘宝源
setTbOrigin(){
  echo "是否需要将npm 源设置为taobao源?(y/n)"

  read CONFIRM

  if [[ $CONFIRM == y ]]
  then

    echo "即将执行：npm run useTbOrigin；切换到 tb源;"
    npm run useTbOrigin

    echo "设置 npm 为taobao源成功"
    
  fi
}


echo "输入发版类型：major | minor | patch"
read TYPE
echo "输入的为：$TYPE"

if [[ $TYPE =~ ^major|minor|patch$ ]]
then

  echo "即将执行：npm run release -r $TYPE"
  npm run release -r $TYPE

  echo "即将执行：npm run useNpmOrigin；切换到 npm源;"
  npm run useNpmOrigin

  echo "即将执行：npm run publish2Remote"
  npm run publish2Remote
  
  setTbOrigin

  echo "发布成功"
  
fi