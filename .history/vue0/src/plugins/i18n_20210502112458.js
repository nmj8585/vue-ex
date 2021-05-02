expect default {
    Install: (app, options) => {
        app.config.globalProperties.$translate= (key) => {
            return key.s
        }
    }
}