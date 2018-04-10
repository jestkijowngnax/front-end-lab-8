var router = express.Router();

router.post('/rockstar', handlers.post);
router.get('/rockstars', handlers.get);
router.get('/rockstar/:id', handlers.getById);
router.put('/rockstar/:id', handlers.put);
router.delete('/rockstar:id', handlers.delete);

module.exports = router;
