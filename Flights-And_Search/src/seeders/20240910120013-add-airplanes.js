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

    await queryInterface.bulkInsert('Airplanes' , [
      {
        modelNumber:Airbus,
        capacity: 350,
        createdAt: new Date(),
        updatedAt : new Date()
     },
     {
      modelNumber:IndiGo ,
      capacity: 360,
      createdAt: new Date(),
      updatedAt : new Date()
   },
   {
    modelNumber:AirIndia,
    capacity: 180,
    createdAt: new Date(),
    updatedAt : new Date()
 }
 ,{
  modelNumber:Vistara,
  capacity: 248,
  createdAt: new Date(),
  updatedAt : new Date()
 },
 {
  modelNumber:AirIndia,
  capacity: 168,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:Boeing ,
  capacity: 300,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:Vistara,
  capacity: 290,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:IndiGo,
  capacity: 200,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:Airbus,
  capacity: 150,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:Vistara,
  capacity: 210,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:IndiGo,
  capacity: 300,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:IndiGo,
  capacity: 210,
  createdAt: new Date(),
  updatedAt : new Date()
},
{
  modelNumber:AirIndia,
  capacity:200,
  createdAt: new Date(),
  updatedAt : new Date()
}   
    ])
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
