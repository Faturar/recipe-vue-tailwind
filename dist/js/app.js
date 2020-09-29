const app = new Vue ({
    el: '#app',
    data: {
        query: '',
        recipes: [],
        ingredients: [],
        modal: false,
        next: false,
        more: true,
        from: 0,
        to: 12,
    },
    methods: {
        getData() {
            if(this.next == true){
                this.to += 12;
                console.log(this.to)
            } 
            fetch(`https://api.edamam.com/search?q=${this.query}&app_id=170200ba&app_key=76edce461a627b21dc1d708e9a18d9a0&from=${this.from}&to=${this.to}`, {
                mode: 'cors',
            })
            .then(data => data.json())
            .then(data => {
                this.more = true
                this.recipes = data.hits
            })
            .catch(err => {
                this.more = false
                console.error(err)
            })
        },
        getDataById(id){
            this.ingredients = this.recipes[id].recipe.ingredientLines;
            this.label = this.recipes[id].recipe.label
        }
    },
})