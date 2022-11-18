import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3931aff55dc141dbb2c859626616e540', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
