const express = require('express')

const tacos = require('../usecases/tacos')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTacos = await tacos.getAll()

    response.json({
      success: true,
      message: 'todos los tacos',
      data: {
        tacos: allTacos
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const getTaco = await tacos.getById(id)

    response.json({
      success: true,
      message: 'encontraste el taco',
      data: {
        tacos: getTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedTacos = await tacos.deleteById(id)

    response.json({
      success: true,
      message: 'taco borrado',
      data: {
        tacos: deletedTacos
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const tacoUpdate = request.body

    const newTaco = await tacos.updateById(id, tacoUpdate)

    response.json({
      success: true,
      message: 'taco actualizado',
      data: {
        tacos: newTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const { type, price, isChido } = request.body

    // HACEMOS UNA COMPROBACIÓN PARA SABER QUE EXISTEN ESTAS PROPIEDADES
    if (!type) throw new Error('type is required') // Una condicional if en la misma línea, no lleva {}
    if (!price) throw new Error('price is required')
    if (isChido == null) throw new Error('isChido is required')

    const newTaco = await tacos.create({ type, price, isChido })

    response.json({
      success: true,
      message: 'taco agregado',
      data: {
        taco: newTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
// Exportamos el router pero falta que lo montemos al servidor
