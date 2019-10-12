// Dentro do controller de Session nós temos os seguintes métodos:
// index -> retorna uma listagem de sessões
// show -> mostra apenas uma sessão
// store -> cria uma sessão
// update -> alterar uma sessão
// destroy -> remover/deletar uma sessão

const User = require('../models/User');

module.exports = {
    async store(req, res) { // nesse caso eu gostaria de criar uma sessão, por isso o 'store'
        const { email } = req.body;   // seria a mesma coisa que 'const email = req.body.email;'

        let user = await User.findOne({ email }) // aqui estamos usando apenas 'email' e não 'email: email' pq o parâmetro tem o mesmo nome então o js permite que seja feito dessa maneira

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user);
    }
};