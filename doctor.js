const { Doctor } = require('@appworks/doctor')

const doctor = new Doctor({ignore: ['node_modules']})
doctor.scan('src', {
    framework: 'vue',tempFileDir: 'doctorResult'
}).then((result) => {
  console.log(result)
})
