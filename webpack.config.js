const path = require("path");
module.exports = {
    context: __dirname,

    entry: "./frontend/query_arena.jsx",

    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    
    // give me line of code for errors
    devtool: "source-map",
    
    resolve: {
    
        // if you do not add the "*",
        // then it will add an extra .jsx to the filename.
        // meaning: entry.jsx.jsx
    
        // makes importing easier
        extensions: [".js", ".jsx", "*"]
    },
    
    module: {
        rules: [
            {
                //read all js and jsx files
                test: /\.jsx?$/,
                
                // don't include what is specified
                exclude: /(node_modules)/,
                use: {
                
                    // tell webpack to use this to apply changes
                    loader: "babel-loader",
                    
                    query: {
                        // rules we set when webpack goes through the loader

                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            }
        ]
    }
}