class AddColumnUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :home_place, :decimal, precision: 9, scale: 6
    add_column :users, :school_place, :decimal, precision: 9, scale: 6
  end
end
