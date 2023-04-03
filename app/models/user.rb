class User < ApplicationRecord
    has_secure_password

    has_many :appointments
    has_many :patients, through: :appointments
    has_many :prescriptions, through: :patients

    validates :username, uniqueness: true, presence: true
end
