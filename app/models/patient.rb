class Patient < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments
    has_many :prescriptions, dependent: :nullify

    validates :first_name, :last_name, :phone, :dob, presence: true

    # scope :my_appts, -> { where(user_id: session[:user_id]) }
end
