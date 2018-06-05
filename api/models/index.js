

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL);
var models = [                 
  'usuario', 'artista', 'album', 'cancion', 'playlist','sigue','cancion_playlist'
];

sequelize.sync({force: true})

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});


sequelize.models.Usuario.belongsToMany(sequelize.models.Playlist,{through:sequelize.models.Sigue,foreignKey:'usuario',as:'playlists'});
sequelize.models.Playlist.belongsToMany(sequelize.models.Usuario,{through:sequelize.models.Sigue,foreignKey:'playlist',as:'usuarios'});


sequelize.models.Cancion.belongsToMany(sequelize.models.Playlist,{through:sequelize.models.Cancion_Playlist,as:'playlists', timestamps: false});
sequelize.models.Playlist.belongsToMany(sequelize.models.Cancion,{through:sequelize.models.Cancion_Playlist,as:'canciones', timestamps: false});

