import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Если dev режим, то css стили идут в js файл, если prod режим, то в отдельный css файл
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Это делает хэш для селектора стиля только в случае, если есть .module. в названии
                        localIdentName: isDev
                            ? '[path][name]__[local]' // Если dev режим, то оно вместо селектора класса ставит путь до него, его название и ...
                            : '[hash:base64:8]', // Если prod режим, то просто hash из 8 символов
                    },
                },
            },
            'sass-loader',
        ],
    };
}
