# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Playlist.destroy_all

user1 = User.create(name: 'Seth', password: '1234')

playlist1 = Playlist.create(name: 'Cool tunes', user: user1)

artist1 = Artist.create(name: "")

Song.create(name: "Fred sings", song_id: "1")