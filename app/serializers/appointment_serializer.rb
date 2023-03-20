class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :description

  belongs_to :patient
  belongs_to :user
end
