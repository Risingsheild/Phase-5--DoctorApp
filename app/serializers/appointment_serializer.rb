class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :description, :patient

  # def patient
  #   p = {}
  #   p[:id] = self.object.patient.id
  #   p[:first_name] = self.object.patient.first_name
  #   p[:last_name] = self.object.patient.last_name
  #   p[:dob] = self.object.patient.dob
  #   p[:phone] = self.object.patient.phone
  #   p
  # end
  belongs_to :patient
  belongs_to :user
end
