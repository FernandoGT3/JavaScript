const path = require('path');//importando um módulo do node, para trabalharmos com caminhos
//Node usa CommonJS como um sistema de módulos
//Já o JS usa o ES
//Todo arquivo Js no Node é um módulo
//Então precisamos exportar essa arquivo, para os outros conseguir usá-lo
module.exports = { //exportando o objeto config do webpack
    mode: 'development', //o arquivo é gerado mais rápido e não é minificado(webpack tentaria diminuir nosso arq, encurtando nomes de variáveis)
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/, //expressão regular indica: arquivos que terminam com js( a \ espaca o (.) e o $ é o (termina))
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' //quando acontecer algum erro, ele vai mapear no arquivo original, ao invés de ser no bundle
} 

