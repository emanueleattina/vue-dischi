Vue.config.devtools = true;

var app   = new Vue ({
    el: '#root',
    data: {
        diskActive: 0,
        selectedGenre: '',
        index: 0,
        timeRange: 0,
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
    created() {
        setInterval(() => {
            this.timeRange = this.timeRange + 1;
        }, 1000);
    },
    methods: {
        next() {
            this.timeRange = 0;
            if(this.diskActive < this.disks.length - 1) {
                this.diskActive++;
            } else {
                this.diskActive = 0;
            }
        },
        prev() {
            this.timeRange = 0;
            if(this.diskActive > 0) {
                this.diskActive--;
            } else {
                this.diskActive = this.disks.length - 1;
            }
        },
    }
});