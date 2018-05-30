module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define(
    'Channel',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: true },
    },
    {
      underscored: true,
    }
  );

  Channel.associate = models => {
    Channel.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    Channel.hasMany(models.Message);
    Channel.hasMany(models.ChannelMember);
  };

  Channel.instanceMethods = () => {
    () => {
      console.log(this.title);
    };
  };

  return Channel;
};
