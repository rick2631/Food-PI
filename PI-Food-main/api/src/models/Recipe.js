const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
   
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
   },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

   summary: {
    type: DataTypes.STRING,
    allowNull: false,
    },

    healthScore: {
        type: DataTypes.FLOAT,// use float por que es un numero seguido de una coma (,)
    },
    image:{
        type: DataTypes.STRING

    },

    step:{
        type:DataTypes.TEXT
    },
 



  });
};

