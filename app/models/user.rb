class User < ApplicationRecord
    has_secure_password

    has_many :appointments
    has_many :patients, -> {distinct}, through: :appointments
    has_many :prescriptions, through: :patients, dependent: :destroy

    validates :username, uniqueness: true, presence: true
end
