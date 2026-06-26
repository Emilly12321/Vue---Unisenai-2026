import jwt from 'jsonwebtoken';

module.exports = (req, res, next)=>{

    const token = req.headers.authorization;
    if(!token) return res.status(401).json({erro: 'Acesso negado!'});

    jwt.verify(token, 'segredo', (err, decoded) => {
        if(err) return res.status(401).json({erro: 'Token inválido!'});
        req.userId = decoded.id;
        next();
    });

};