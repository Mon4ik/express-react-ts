const path = require('path');
const glob = require('glob');

let filenames = glob.sync('./src/**/*.tsx')
    .filter((name) => !name.startsWith("./src/components"))
    .map((name) => ({
        [path.basename(name, ".tsx")]: name
    }))

let entry = Object.assign({}, ...filenames)

module.exports = {
    mode: "production",
    entry,
    output: {
        path: path.join(__dirname, '/webpack'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
        ]
    },
};