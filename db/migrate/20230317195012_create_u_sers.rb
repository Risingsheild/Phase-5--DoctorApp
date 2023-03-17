class CreateUSers < ActiveRecord::Migration[7.0]
  def change
    create_table :u_sers do |t|

      t.timestamps
    end
  end
end
