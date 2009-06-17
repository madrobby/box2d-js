#!/bin/sh

mkdir dist
sprocketize -C src box2d.js > dist/box2d.js
`java -jar vendor/yuicompressor/yuicompressor-2.4.2.jar --charset UTF8 dist/box2d.js -o box2d.min.js`