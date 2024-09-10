const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) { //{name: "New Delhi"}
        try {
            const city = await City.create({ name });
            return City;
        } catch (error) {
            console.error('Something went wrong at repository layer', error);
            throw (error);
        }
    }


    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.error('Something went wrong at repository layer', error);
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
             // The below approch also works but will not return updated object
            // if we are using pg then returning true can be used, else not.
            // const City = await city.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // for getting updated data in mysql we use the below approach.
            const City = await city.findByPk(cityId);
            City.name = data.name;
            await City.save(); 
            return City;
        }
        catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw{error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            console.error("Something went wrong at repository layer", error);
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await city.findAll();
            return cities;
        }catch (error){
            console.log("Something went wrong at repository layer" , error) ;
            throw(error);
        }
    }
}

module.exports = CityRepository;