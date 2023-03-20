class Prescription < ApplicationRecord
    belongs_to :patient

    validates :name, :refills, presence: true
end