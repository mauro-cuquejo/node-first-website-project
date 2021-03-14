const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, 'views/index.html'));
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: 'First Website' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About Page' });
});

module.exports = router;