class User < ApplicationRecord
  has_many :memberships, foreign_key: 'from_user_id', class_name: 'Membership', dependent: :destroy
  has_many :followings, through: :memberships
  has_many :memberships, foreign_key: 'to_user_id', class_name: 'Membership', dependent: :destroy
  has_many :followers, through: :memberships
end
