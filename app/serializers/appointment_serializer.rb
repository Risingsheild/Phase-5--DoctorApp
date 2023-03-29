class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :description, :patient

  def patient
    p = {}
    p[:id] = self.object.patient.id
    p[:name] = self.object.patient.name
    p[:dob] = self.object.patient.dob
    p[:phone] = self.object.patient.phone
    p
  end
  belongs_to :patient
  belongs_to :user
end
