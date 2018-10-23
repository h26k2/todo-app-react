const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/public/index.js",
    output : {
        filename : "bundle.js",
        path : path.join(__dirname,"/public")
    },
    module:{
        rules:[
            {
                test : /\.js/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.css$/,
                exclude : /node_modules/,
                use : {
                    loader : "style-loader"
                }
            },
            {
                test : /\.css$/,
                exclude : /node_modules/,
                use : {
                    loader : "css-loader"
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/public/index.html"
        })
    ]
}