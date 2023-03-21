class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :phone
      t.string :dob
      t.integer :user_id

      t.timestamps
    end
  end
end