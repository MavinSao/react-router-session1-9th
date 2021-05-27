class Auth {
    constructor() {
        this.isAuth = false
    }

    login(cb) {
        this.isAuth = true
        setTimeout(() => {
            cb()
        }, 2000)
    }

    logout(cb) {
        setTimeout(() => {
            this.isAuth = false
            cb()
        }, 2000)
    }
}

export default new Auth()