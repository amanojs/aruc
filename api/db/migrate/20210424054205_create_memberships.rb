class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.references :to_user, foreign_key: { to_table: :users }
      t.references :from_user, foreign_key: { to_table: :users }

      t.timestamps

      t.index %i[to_user_id from_user_id], unique: true

      t.timestamps
    end
  end
end
