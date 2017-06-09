/**
 * @file 使用 babel-register 进行转码
 * @author chuck7 (chuck7liu@gmail.com)
 * @data 17/5/31
 */
require('babel-core/register')({
    'presets': [
        ['env', {
            'targets': {
                'node': 'current'
            }
        }]
    ]
})
require('./index.js')
