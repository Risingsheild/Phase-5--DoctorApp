class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :dob

  has_many :appointments
  has_many :users, through: :appointments
end
