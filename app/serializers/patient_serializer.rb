class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :dob, :appointments, :prescriptions

  
  # has_many :users, through: :appointments
  # has_many :prescriptions


end
