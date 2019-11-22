#!/bin/bash
set -e

echo "输入发版类型：major | minor | patch"
read TYPE
echo "输入的为：$TYPE"

if [[ $TYPE =~ ^major|minor|patch$ ]]
then

  echo "即将执行：npm run release -r $TYPE"
  npm run release -r $TYPE

  echo "即将执行：npm run setNpmOrigin"
  npm run setNpmOrigin

  echo "即将执行：npm run publish2Npm"
  npm run publish2Npm

  echo "发布成功"
  
fi
