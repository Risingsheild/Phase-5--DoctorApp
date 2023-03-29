class AddUserInteger < ActiveRecord::Migration[7.0]
  def change
    add_column :patients, :user_id, :integer
  end
end
