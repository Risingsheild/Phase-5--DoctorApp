class Patient < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_many :prescriptions

    validates :name, :phone, :dob, presence: true

    scope :my_appts, -> { where(user_id: session[:user_id]) }
end
