class AppointmentsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        render json: Appointment.all.order(:startDate), status: :ok
    end

    def create 
        appointments = @current_user.appointments.create!(appt_params)
        if appointment
            render json: appointment, status: :created
        else 
            render json: {error: "Please fill out all information"}, status: :length_required
        end
    end

    def update
        if appointment = @current_user.appointments.find(params[:id])
            appointment.update!(appt_params)
            render json: appointment
        else 
            render json: { error: "Appointment Not Found"}, status: :not_found
        end 
    end

    def destroy 
        appointment = @current_user.appointments.find(params[:id])
        appointment.destroy
        render json: {message: "Appointment is canceled "}
    end

    

    private 

    def appt_params
        params.permit(:startDate, :description, :patient_id)
end
