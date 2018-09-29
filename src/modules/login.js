const state = {login:false}
const mutations = {
    isCurrent(state,users){
        if(users.user === '18332571995'&& users.password === '123456'){
            state.login = true
        }
    }
}
const login = {
    state,
    mutations
}
export default login