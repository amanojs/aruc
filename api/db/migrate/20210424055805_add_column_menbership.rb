class AddColumnMenbership < ActiveRecord::Migration[5.1]
  def change
    add_reference :memberships, :status, foreign_key: true
  end
end
