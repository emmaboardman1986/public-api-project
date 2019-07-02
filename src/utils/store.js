import axios from 'axios'

export const store = {
    state: {
        topTenDeals: [],
        isDealDataLoaded: false
    },
    fetchDeals() {
        axios
        .get('https://public-api.livingsocial.co.uk/v1/deal/london')
        .then(response => {
            console.log(response);
            this.state.topTenDeals = response.data.deals.slice(0,9);
            console.log("ygjhjb: ", this.state.topTenDeals);
            this.state.isDealDataLoaded = true;
        })
    }
}