class Patient < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    validtas :name, :phone, :dob, presence: true
end
