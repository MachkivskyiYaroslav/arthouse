const router = require('express').Router();
const {albumController, photoController} = require('../../controller');

router.get('/getAllTypesAlbums', albumController.getAllTypesAlbums);
router.get('/getAllResponsiveStatus', albumController.getAllResponsiveStatus);
router.get('/getAllAlbums', albumController.getAllAlbums);
router.get('/:type/:id/:title',albumController.getAlbumById);
module.exports = router;

