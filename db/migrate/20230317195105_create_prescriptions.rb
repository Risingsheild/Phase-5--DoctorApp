class CreatePerscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :address

      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
