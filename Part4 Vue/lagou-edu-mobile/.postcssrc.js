module.exports = {
    plugins: {
        'autoprefixer': {
            // browsers: ['Android >= 4.0', 'iOS >= 8']
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            // *代表所有
            propList: ['*']
        }
    }
}