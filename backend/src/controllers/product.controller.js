import model from '../models/product.model.js'

function serverError(e, response) {
    console.error('Erro no servidor:', e);
    return response.status(500).json({
        error: 'Erro interno do servidor',
        message: 'Ocorreu um problema.',
        erro: e.message
    });
}

async function findAll(request, response) {
    try {
        const res = await model.findAll()
        if(res.length <= 0)
            return response.status(404).json({ message: "Nenhum registro encontrado" })
        return response.status(200).json(res)
    } catch(e) {
        return serverError(e, response)
    }
}


async function deleteByPk(request, response) {
    try{
        const res = await model.destroy({where: {id: request.params.id}})
        if(res == 1) 
            return response.status(200).send()
        else 
            return response.status(404).json({ message: "Registro nao encontrado." })
    } catch(e){
        return serverError(e, response)
    }
}

async function create(request, response) {
    try {
        const result = await model.create({
            name: request.body.name,
            price: request.body.price,
            desc: request.body.desc,
            image: request.body.image
        })
        response.status(201).json(result);
    } catch (e) {
        return serverError(e, response)
    }
}

export default { findAll, deleteByPk, create }
