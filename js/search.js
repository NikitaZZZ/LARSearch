// Компонент task - задание
Vue.component('result', {
    props: ['data'],

    data() {
        return {}
    },
 
    template: `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><a :href="data.link" target="_blank" id="card-link">{{ data.name }}</a></h5>
                <a :href="data.link" target="_blank" class="card-subtitle mb-2 text-muted">{{ data.link }}</a>

                <p class="card-text">{{ data.desc }}</p>
            </div>
        </div>
    `
});

const app = new Vue({
    el: "#app",
    data: {
        searchInput: '',

        results: [],

        db: [
            { 
                name: 'YouTube', 
                desc: `Смотрите любимые видео, 
                    слушайте любимые песни, 
                    загружайте собственные ролики и делитесь ими с друзьями, 
                    близкими и целым миром.`,
                link: 'https://www.youtube.com/',
            }
        ]
    },

    methods: {
        search: function () {
            this.db.forEach((obj) => {
                if (this.searchInput.toLowerCase().trim() == obj.name.toLowerCase().trim()) this.createResult(obj);
            })
        },

        createResult: function (obj) {
            this.results.push(obj);
        }
    }
})

document.querySelector('#search-input').addEventListener('keydown', (e) => {
    if (e.key == "Enter") app.search();
})