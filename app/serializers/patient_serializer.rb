class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :dob, :appointments

  has_many :appointments
  has_many :users, through: :appointments
  has_many :prescriptions


end
