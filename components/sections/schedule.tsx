'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

const schedule = {
  Monday: [
    { time: "06:00 AM", class: "Morning HIIT", trainer: "Sarah Johnson", duration: "45 min" },
    { time: "09:00 AM", class: "Yoga Flow", trainer: "Michael Chen", duration: "60 min" },
    { time: "05:00 PM", class: "Strength Training", trainer: "James Wilson", duration: "60 min" },
    { time: "07:00 PM", class: "Cardio Blast", trainer: "Emma Davis", duration: "45 min" }
  ],
  Tuesday: [
    { time: "07:00 AM", class: "CrossFit", trainer: "James Wilson", duration: "60 min" },
    { time: "10:00 AM", class: "Pilates", trainer: "Emma Davis", duration: "45 min" },
    { time: "04:00 PM", class: "Boxing", trainer: "Sarah Johnson", duration: "60 min" },
    { time: "06:30 PM", class: "Meditation", trainer: "Michael Chen", duration: "30 min" }
  ],
  Wednesday: [
    { time: "06:00 AM", class: "Strength Training", trainer: "James Wilson", duration: "60 min" },
    { time: "09:00 AM", class: "Yoga Flow", trainer: "Michael Chen", duration: "60 min" },
    { time: "05:00 PM", class: "HIIT", trainer: "Sarah Johnson", duration: "45 min" },
    { time: "07:00 PM", class: "Spin Class", trainer: "Emma Davis", duration: "45 min" }
  ],
  Thursday: [
    { time: "07:00 AM", class: "Morning HIIT", trainer: "Sarah Johnson", duration: "45 min" },
    { time: "10:00 AM", class: "Flexibility", trainer: "Michael Chen", duration: "45 min" },
    { time: "04:00 PM", class: "CrossFit", trainer: "James Wilson", duration: "60 min" },
    { time: "06:30 PM", class: "Cardio Blast", trainer: "Emma Davis", duration: "45 min" }
  ],
  Friday: [
    { time: "06:00 AM", class: "Strength Training", trainer: "James Wilson", duration: "60 min" },
    { time: "09:00 AM", class: "Yoga Flow", trainer: "Michael Chen", duration: "60 min" },
    { time: "05:00 PM", class: "Boxing", trainer: "Sarah Johnson", duration: "60 min" },
    { time: "07:00 PM", class: "HIIT", trainer: "Emma Davis", duration: "45 min" }
  ],
  Saturday: [
    { time: "08:00 AM", class: "Weekend Warrior", trainer: "James Wilson", duration: "90 min" },
    { time: "10:00 AM", class: "Yoga Flow", trainer: "Michael Chen", duration: "60 min" },
    { time: "02:00 PM", class: "CrossFit", trainer: "Sarah Johnson", duration: "60 min" },
    { time: "04:00 PM", class: "Meditation", trainer: "Emma Davis", duration: "30 min" }
  ],
  Sunday: [
    { time: "09:00 AM", class: "Strength Training", trainer: "James Wilson", duration: "60 min" },
    { time: "11:00 AM", class: "Flexibility", trainer: "Michael Chen", duration: "45 min" },
    { time: "02:00 PM", class: "HIIT", trainer: "Sarah Johnson", duration: "45 min" },
    { time: "04:00 PM", class: "Yoga Flow", trainer: "Emma Davis", duration: "60 min" }
  ]
}

const Schedule = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Class Schedule</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our diverse range of classes led by expert trainers throughout the week
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(schedule).map(([day, classes], dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <div className="bg-primary p-4">
                <h3 className="text-xl font-semibold text-white text-center">{day}</h3>
              </div>
              <div className="p-4 space-y-4">
                {classes.map((classItem, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-gray-900">
                        {classItem.class}
                      </h4>
                      <span className="text-primary font-medium">
                        {classItem.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{classItem.time}</p>
                    <p className="text-sm text-gray-500">with {classItem.trainer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Book a Class
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule
