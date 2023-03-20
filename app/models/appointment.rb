class Appointment < ApplicationRecord
    belongs_to :patient
    belongs_to :user

    validates :startDate, :description, :patient_id, presence: true
end
