import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import path from 'node:path'

const customResolver = resolve({
    extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});
const projectRootDir = path.resolve(__dirname);

module.exports = {
    input: 'src/index.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        alias({
            entries: [
                { find: '@/', replacement: path.resolve(projectRootDir, './src') },
                { find: '@components', replacement: path.resolve(projectRootDir, './src/components') }
            ],
            customResolver
        }),
        resolve()
    ]
};