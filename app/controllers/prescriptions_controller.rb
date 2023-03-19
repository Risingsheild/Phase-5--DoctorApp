class PrescriptionsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Prescription.all, status: :ok
    end
    
end
