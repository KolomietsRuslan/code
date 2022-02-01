function invalidToken (token) {
    return token !== '';
}

export default {
    namespaced: true,
    state: {
        token: '21',
        name: '',
    },
    getters: {
        isAuth (state) {
            return invalidToken(state.token);
        },
    },
    mutations: {

    },
    actions: {
        doAuth (context, data) {
            if (data.login === 'rusich' && data.password === '111') {
                context.state.token = data.login;
                return 'OK';
            }
            return 'error';
        }
    },
}