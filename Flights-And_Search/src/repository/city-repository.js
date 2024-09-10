const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) { //{name: "New Delhi"}
        try {
            const city = await City.create({ name });
            return City;
        } catch (error) {
            console.error('Something went wrong:', error);
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
            console.error('Something went wrong :', error);
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            })
            return City;
        }
        catch (error) {
            console.error("Something went wrong:", error);
            throw{error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            console.error("Something went wrong:", error);
            throw {error};
        }
    }
}

module.exports = CityRepository;