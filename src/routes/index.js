const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, 'views/index.html'));
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: 'Inicio' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contacto' });
});

router.get('/instagram', (req, res) => {
    res.redirect('https://www.instagram.com/mauro.cuquejo/');
});

router.get('/github', (req, res) => {
    res.redirect('https://github.com/mauro-cuquejo/');
});

router.get('/linkedin', (req, res) => {
    res.redirect('https://www.linkedin.com/in/mauro-cuquejo/');
})

module.exports = router;