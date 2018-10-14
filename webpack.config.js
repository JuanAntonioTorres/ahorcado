module.exports={
    entry:'./main.ts',
    devtool:'eval-source-map',
    output:{
        filename:'bundle.js',
        path:__dirname
    },
    module:{
        rules:[{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions:['.ts']
    },
}