//Code bundler 
// Four main Concepts
// Entry 
// Output 
// Loaders - Rules 
// mode - dev /prod 

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : './app/index.jsx',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            // Babel -loader 
            {test : /\.(jsx)$/, use : 'babel-loader' },
            //css-loader 
            {test : /\.(css)$/ , use : ['css-loader' , 'style-loader']}
        ]
    },
    mode : 'development',
    plugins : [
        new HTMLWebpackPlugin({
            template : 'app/index.html'
        })
    ]

}