var app = new Vue({
    el: '#root',
    data: {
        tasks: [{
            taskDescription: 'Spostare pezzi in più in cartella bonus',
            isTaskImportant: true
        },
        {
            taskDescription: 'Riordinare il codice',
            isTaskImportant: true
        },
        {
            taskDescription: 'Fare il bucato',
            isTaskImportant: false
        },
        {
            taskDescription: 'Lavarsi i piedi',
            isTaskImportant: false,
        },
        {
            taskDescription: 'Sfamare il coniglio',
            isTaskImportant: true
        }],
        message: '',
        filter: '',
        indexVisible: -1,
    },
    methods: {
        removeTask(index) {
            return this.tasks.splice(index, 1)
        },
        addTask(message) {
            if (message) {
                this.tasks.push({
                    taskDescription: message[0].toUpperCase() + message.slice(1),
                    isTaskImportant: false
                });
                this.message = ''
            }
        },
        filterTasks(filter) {
            return this.tasks.filter((item) => item.taskDescription.toLowerCase().includes(filter.toLowerCase()))
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
