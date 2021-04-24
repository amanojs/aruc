# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_424_060_812) do
  create_table 'memberships', force: :cascade do |t|
    t.integer 'to_user_id'
    t.integer 'from_user_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'status_id'
    t.index ['from_user_id'], name: 'index_memberships_on_from_user_id'
    t.index ['status_id'], name: 'index_memberships_on_status_id'
    t.index %w[to_user_id from_user_id], name: 'index_memberships_on_to_user_id_and_from_user_id', unique: true
    t.index ['to_user_id'], name: 'index_memberships_on_to_user_id'
  end

  create_table 'statuses', force: :cascade do |t|
    t.string 'status_name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'user_name'
    t.string 'school_name'
    t.integer 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.decimal 'home_place', precision: 9, scale: 6
    t.decimal 'school_place', precision: 9, scale: 6
    t.string 'password'
  end
end
