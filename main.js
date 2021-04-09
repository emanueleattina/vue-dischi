Vue.config.devtools = true;

var app   = new Vue ({
    el: '#root',
    data: {
        diskActive: 0,
        diskFiltered: 0,
        selectedGenre: '',
        index: 0,
        timeRange: 0,
        volumeRange: 20,
        pausePlay: false,
        arrow: '', 
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
        
    },
    computed: {
        filteredDisks() {

            if(this.selectedGenre === '') {
                return this.disks;
            } else {
                return this.disks
                           .filter((disk) => disk.genre === this.selectedGenre)
            }
        }
      },
    methods: {
        next() {
            this.timeRange = 0;
            if(this.diskActive < this.disks.length - 1) {
                this.diskActive++;
            } else if (this.diskActive >= this.disks.length - 1) {
                this.diskActive = 0;
            }
        },
        prev() {
            this.timeRange = 0;
            if(this.diskActive > 0) {
                this.diskActive --;
            } else if (this.diskActive <= 0){
                this.diskActive = this.disks.length - 1;
            }
        },
        startPlayer() {
            setInterval(() => {
            
                this.timeRange = this.timeRange + 1;
                if(this.timeRange == 100) {
                    this.timeRange = 0;
                }
            }, 1000);

            this.pausePlay = !this.pausePlay;
        },
        pausePlayer() {
            this.pausePlay = !this.pausePlay;
        },
        sortYear() {
            this.disks.sort((a, b) => a.year < b.year ? 1 : -1);
        }
    }
});