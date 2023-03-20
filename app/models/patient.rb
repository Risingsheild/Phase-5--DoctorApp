class Patient < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    validates :name, :phone, :dob, presence: true
end
