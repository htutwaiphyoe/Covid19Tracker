import axios from 'axios';

export default class Asean{
    constructor(query){
        this.query = query;
    }

    async getData(){
        try{
            const result = await axios(`https://covid19.mathdro.id/api/countries/${this.query}`);
            this.result = result.data;
            // console.log(this.result);
        }
        catch(error){
            console.log(error);
        }
    }
}