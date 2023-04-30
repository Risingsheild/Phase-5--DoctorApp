class Prescription < ApplicationRecord
    belongs_to :patient, inverse_of: :prescriptions
    belongs_to :user, inverse_of: :prescriptions

    validates :name, :refills, presence: true
end