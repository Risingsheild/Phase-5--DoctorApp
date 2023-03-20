class CreatePerscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.integer :refills

      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
