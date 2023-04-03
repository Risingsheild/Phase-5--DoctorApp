class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :appointments
  has_many :patients, through: :appointments
  has_many :prescriptions, through: :patients
end
