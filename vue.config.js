module.exports = {
    chainWebpack: config => {
        config.externals({
            'ag-grid-community': 'ag-grid-vue',
            'ag-grid-vue': 'ag-grid-vue'
        })
    }
}