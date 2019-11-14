class RelateSongToArtist < ActiveRecord::Migration[6.0]
  def change
    add_reference :artists, :song,   foreign_key: true
  end
end
