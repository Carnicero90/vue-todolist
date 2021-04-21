var app = new Vue({
    el: '#root',
    data: {
        tasks: [{
            str: 'spostare pezzi in più in cartella bonus',
            important: true
        },
        {str: 'riordinare il codice',
    important: true},
            
            
            {
            str: 'Fare il bucato',
            important: false
        }, {
            str: 'Lavarsi i piedi',
            important: false,
        },
        { str: 'Sfamare il coniglio',
         important: true }],
            message: '',
            filter: '',
            indexVisible: -1,
            filteredTasks: []
    },
    methods: {
        removeTask(index) {
            return this.tasks.splice(index, 1)
        },
        addTask(message) {
            if (message) {
                this.tasks.push({
                    str: message,
                    important: false
                });
                this.message = ''
            }
        },
        filterTasks(filter) {
            return this.tasks.filter((item) => item.str.toLowerCase().includes(filter.toLowerCase()))
        }
    },

})



/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/
