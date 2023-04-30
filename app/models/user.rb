class User < ApplicationRecord
    has_secure_password

    has_many :appointments, dependent: :destroy
    has_many :patients, -> {distinct}, through: :appointments, dependent: :destroy
    has_many :prescriptions, through: :patients

    validates :username, uniqueness: true, presence: true
end
