class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :album
      t.string :uri
      t.string :song_id
      t.string :href
      t.string :aritsts

      t.timestamps
    end
  end
end
