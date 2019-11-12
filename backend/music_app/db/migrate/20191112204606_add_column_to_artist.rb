class AddColumnToArtist < ActiveRecord::Migration[6.0]
  def change
    add_column :artists, :name, :string 
    add_column :artists, :spotify_id, :string   
    add_column :artists, :image, :string 
    add_column :artists, :uri, :string 
  end
end
