import model from './src/models/product.model.js'
import dotenv from 'dotenv'
import app from './src/app.js'
import seedData from './src/config/seedData.js'


dotenv.config()

const PORT = process.env['PORT'];

(async () => {
    try {
        console.log("Sincronizando banco de dados...")
        await model.sync({force: false})
        await seedData()
        console.log("Banco de dados sincronizado.")

        console.log("Iniciando servidor...")
        app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))
    } catch (e) {
        console.log("Erro ao iniciar o servidor: ", e)
    }
})();

