var app = new Vue({
    el: '#root',
    data: {
        tasks: [
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
    },
    methods: {
        removeTask(index) {
            return this.tasks.splice(index, 1)
        },
        addTask(message) {
            if (message) {
                this.tasks.push({
                    taskDescription: this.capitalizeWord(message),
                });
                this.message = ''
            }
        },
        capitalizeWord(word) {
            return word[0].toUpperCase() + word.slice(1)
        }
    }

})



/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/
