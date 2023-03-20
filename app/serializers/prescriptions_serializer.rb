class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :refills
  belongs_to :patient
end
