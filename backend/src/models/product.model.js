import sequelize from "../config/dbconfig.js"
import { DataTypes, Model } from "sequelize"

class Product extends Model { }

Product.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    desc: {type: DataTypes.TEXT, allowNull: true},
    image: {type: DataTypes.STRING, allowNull: false}
    }, 
    { sequelize: sequelize, timestamps: false }
)

export default Product
