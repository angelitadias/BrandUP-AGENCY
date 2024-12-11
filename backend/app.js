import express from 'express'
import mysql from 'mysql2'
const app = express();
const port = 3000;


app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   
    password: 'lovebibidro03',   
    database: 'brandup' 
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
    console.log('Conectado ao banco de dados MySQL');
});


app.post('/form', (req, res) => {
    const { id, nome, telefone, cpf, email, empresa} = req.body;


    const query = 'INSERT INTO formulario (id, nome, telefone, cpf, email, empresa) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nome, telefone, cpf, EmailCorporativo, empresa];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir os dados:', err);
            return res.status(500).json({ success: false, message: 'Erro ao salvar os dados' });
        }
        res.status(200).json({ success: true, message: 'Dados salvos com sucesso!' });
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
