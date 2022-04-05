import axios from "axios"


const state = {
    todos: []
};

const getters = {
    allTodos: (state) =>{
        return state.todos
    }
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('http://localhost:3000/todos');
        commit('setTodos', response.data)
    },
    async deleteTodo({commit}, todoId){
        try {
            await axios.delete(`http://localhost:3000/todos/${todoId}`)
            commit('removeTodo', todoId)
          } catch (error) {
            console.log(error)
          }
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(`http://localhost:3000/todos/${updatedTodo.id}`, updatedTodo);
        console.log(response.data);
     
        commit('updateTodo', response.data);
    },
    async addTodo({commit},title){
        const response = await axios.post(`http://localhost:3000/todos`,
        {title:title,completed:false})
   
        commit('addTodo',response.data)
    },
    async filterTodos({ commit }, event) {
        // Get the limit
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        
        // Request
        const response = await axios.get(`http://localhost:3000/todos?_limit=${limit}`);
     
        commit('setTodos', response.data);
      },

};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),

    removeTodo(state,todoId) {
        console.log(state.todos.filter(todo => todo.id !== todoId))
        state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    updateTodo: (state, updatedTodo) => {
        // Find index
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    
        if (index !== -1) {
          state.todos.splice(index, 1, updatedTodo);
        }
    },
    addTodo:(state,newTodo) => state.todos.unshift(newTodo)
};

export default {
    state,
    getters,
    actions,
    mutations
};

