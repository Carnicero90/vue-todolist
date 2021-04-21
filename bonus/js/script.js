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
                    taskDescription: this.capitalizeWord(message),
                    isTaskImportant: false
                });
                this.message = ''
            }
        },
        togglePopUp(index) {
            this.indexVisible = index;
        },

        toggleImportance(task) {
            task.isTaskImportant = !task.isTaskImportant;
        },

        filterTasks(filter) {
            return this.tasks.filter((item) => item.taskDescription.toLowerCase().includes(filter.toLowerCase()))
        },
        getRandomItem(array) {

            return array[(Math.floor(Math.random() * array.length))]
        },
        capitalizeWord(word) {
            return word[0].toUpperCase() + word.slice(1)
        }
    },
    created() {
        // TEST: aggiunge tot task random a tasks
        const verb = ["Sollecitare", "Fare", "Costruire", "Sollevare", "Rincorrere", "Programmare"];
        const what = ["una scacchiera", "il bagnino", "cento forchette", "Giorgio Napolitano", "l'Ascoli"]
        const how = ["graziosamente", "in camicia", "col trattore", "alla moicana", "ballando sopra le stelle"]
        const randi = Array.from({ length: 7 }, () => {
            return {
                taskDescription: `${this.getRandomItem(verb)} ${this.getRandomItem(what)} ${this.getRandomItem(how)}`,
                isTaskImportant: false
            }
        });
        this.tasks = [...this.tasks, ...randi]


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
