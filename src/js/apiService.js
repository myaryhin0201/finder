import axios from 'axios';
const apiKey = `20359490-f2da25da5356f05e90d2084aa`;

const apiService = {
    page: 1,
    searchQuery: '',
    async fetchGallery() {
        try {
            const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;
            console.log(this.page);
            const { data, status } = await axios.get(url);
            console.log(data.hits);
            if (status !== 200) {
                console.log('ups');
                throw error;
            }
            if (data.hits.length === 0) {
                throw error;
            }
            this.page += 1;
            // console.log(data.hits);
            return data.hits;
        } catch (error) {
            throw error;
        }
    },
    reset() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        return this.searchQuery = value;
    }

};
apiService.reset();
apiService.query = 'cat';
let opo = apiService
    .fetchGallery()
    .then(gallery => gallery
);
