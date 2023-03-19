class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :description
      t.string :startDate
  
      t.references :patient, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
  

      t.timestamps
    end
  end
end
