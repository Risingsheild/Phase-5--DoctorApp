class User < ApplicationRecord
    has_secure_password

    has_many :appointments, dependent: :destroy
    has_many :patients, -> {distinct}, through: :appointments
    has_many :prescriptions, dependent: :destroy

    accepts_nested_attributes_for :prescriptions

    validates :username, uniqueness: true, presence: true
end
