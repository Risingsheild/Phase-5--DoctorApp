class CreatePrescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.integer :refills

      t.references :user, null: false, foreign_key: true, on_delete: :cascade
      t.references :patient, null: false, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
