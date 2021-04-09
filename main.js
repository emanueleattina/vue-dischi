Vue.config.devtools = true;
var app   = new Vue ({
    el: '#root',
    data: {
        index: 0,
        timeRange: 90,
        volumeRange: 20,
        disks: [
            {

            }
        ],
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            this.disks = (response.data.response);
        });
    },
    methods: {
        next() {
            if(this.index < this.disks.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }
        },
        prev() {
            if(this.index > 0) {
                this.index--;
            } else {
                this.index = this.disks.length - 1;
            }
        },
    }
});