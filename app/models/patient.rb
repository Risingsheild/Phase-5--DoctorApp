class Patient < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_many :prescriptions

    validates :name, :phone, :dob, presence: true
end
