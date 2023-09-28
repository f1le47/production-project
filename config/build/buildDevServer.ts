import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, // Автоматически открывает страницу в браузере
        historyApiFallback: true, // чтобы после перезапуска страницы (находясь на отличным от '/' роута) не было 404 ошибки
        hot: true,
    };
}
