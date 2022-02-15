const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name_of_dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Health_Level: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.TEXT
    }
  });
};
