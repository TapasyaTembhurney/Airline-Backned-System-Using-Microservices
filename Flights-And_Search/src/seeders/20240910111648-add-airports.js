'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports' , [

    {
    name:'Noida International Airport' , 
    cityId : 1,
    createdAt :new Date(),
    updatedAt :new Date()
    },

    {
      name: "Indira Gandhi International Airport",
      cityId: 2,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

    {
      name: "Kempegowda International Airport",
      cityId: 3,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      cityId: 4,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

    {
      name: "Rajiv Gandhi International Airport",
      cityId: 5,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

    {
      name: "Juhu Airport",
      cityId: 4,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

    {
      name: "Shimla Airport",
      cityId: 6,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Bagdogra Airport",
      cityId: 7,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Pune International Airport",
      cityId: 8,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Chennai International Airport",
      cityId: 9,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Jaipur International Airport",
      cityId: 10,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Madurai Airport",
      cityId: 11,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    {
      name: "Srinagar Airport",
      cityId: 15,
      createdAt: new Date(), 
      updatedAt: new Date() 
    },

  ], {})
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
