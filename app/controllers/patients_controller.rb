class PatientsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Patient.all
    end

    def show
        patient = @current_user.patients.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create!(patient_params)
        if patient
            render json: patient, status: :created 
        else 
            render json: { error: "Please fill out all info"}, status: :length_required
        end
    end


    private

    def patient_params
        params.permit(:first_name, :last_name, :phone, :dob)
    
    end


end
