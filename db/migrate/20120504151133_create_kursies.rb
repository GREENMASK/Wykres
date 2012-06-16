class CreateKursies < ActiveRecord::Migration
  def change
    create_table :kursies do |t|
      t.string :nazwa
      t.string :kod
      t.string :przelicznik
      t.string :kurs
      t.string :data

      t.timestamps
    end
  end
end
