class PrescriptionsController < ApplicationController
    #skip_before_action :authorized

    def index 
        render json: Prescription.all, status: :ok
    end

    def create 
        prescription = @current_user.prescriptions.create!(prescription_params)
        if prescription 
            render json: prescription
        else
            render json: {error: "Please add name of prescription"}
        end
    end


    private 

    def prescription_params
        params.permit(:name, :refills, :patient_id)
    end

    
end
