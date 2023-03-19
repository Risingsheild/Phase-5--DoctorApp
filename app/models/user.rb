class User < ApplicationRecord
    has_secure_password

    has_many :appointments
    has_many :patients, through: :appointments

    validates :username, uniqueness: true, presence: true
end
