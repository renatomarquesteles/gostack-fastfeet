module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pgfastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
