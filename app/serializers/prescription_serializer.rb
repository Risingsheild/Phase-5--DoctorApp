class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :refills
  belongs_to :patient
  belongs_to :user
end
