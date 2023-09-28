import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // Позволяет использовать абсолютные пути (нужно настроить и в tsconfig.json)
        modules: [options.paths.src, 'node_modules'], // Откуда использовать абсолютные пути
        mainFiles: ['index'], // main файлы откуда брать экспорт
        alias: {}, // если оставить пустым можно сразу обращаться к нужной папке, в случае с alias'ом обычно перед путем прописывают @/
    };
}
