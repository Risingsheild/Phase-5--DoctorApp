# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Appointment.destroy_all
Patient.destroy_all
Prescription.destroy_all

puts "Seeding Users"

User.create(username: "Nick", password: "123")
User.create(username: "Katie", password: "456")

puts " seeding Patients"

20.times do 
    Patient.create(
        name: Faker::Name.name,
        phone: Faker::PhoneNumber.cell_phone,
        dob: Faker::Date.birthday(min_age: 18, max_age: 85)
    )
end

puts "Seeding Appointments"
    10.times do 
        Appointment.create(
            user_id: 1,
            patient_id: rand(1..10),
            description: Faker::Cannabis.health_benefit,
            startDate: Faker::Time.between(from: DateTime.now - 1, to: Date.today + 20, format: :long)
        )
    end 

    10.times do 
        Appointment.create(
            user_id: 2,
            patient_id: rand(11..20),
            description: Faker::Cannabis.health_benefit,
            startDate: Faker::Time.between(from: DateTime.now - 1, to: Date.today + 20, format: :long)
        )
    end 


 puts "Seeding Prescriptions"
    10.times do 
        Prescription.create(
            patient_id: rand(1..10),
            user_id: 1,
            name: Faker::Beer.name,
            refills: rand(1..3)
        )
    end

    10.times do 
        Prescription.create(
            patient_id: rand(11..20),
            user_id: 2,
            name: Faker::Beer.name,
            refills: rand(1..3)
        )
    end


    puts "Done Seeding"







