class Prescription < ApplicationRecord
    belongs_to :patient
    belongs_to :user
    validates :name, :refills, presence: true
end