module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      // githubProviderId: { type: DataTypes.STRING, allowNull: false },
      // githubUsername: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      gender: { type: DataTypes.ENUM('MALE', 'FEMALE'), allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      website: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.STRING, allowNull: true },
      profilePhoto: { type: DataTypes.STRING, allowNull: true },
    },
    {
      underscored: true,
    }
  );

  User.associate = models => {
    User.hasMany(models.Channel);
    User.hasMany(models.Message);
    User.hasMany(models.ChannelMember);
  };

  return User;
};
