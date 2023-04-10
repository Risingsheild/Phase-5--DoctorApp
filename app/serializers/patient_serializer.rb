class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :dob, :appointments, :prescriptions

  
  # has_many :users, through: :appointments
  # has_many :prescriptions


end
